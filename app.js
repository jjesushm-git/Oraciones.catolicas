const views={
  home:document.querySelector('#homeView'),
  days:document.querySelector('#daysView'),
  reading:document.querySelector('#readingView'),
  prayers:document.querySelector('#prayersView'),
  standalone:document.querySelector('#standalonePrayerView'),
  rosary:document.querySelector('#rosaryView'),
  rosaryReading:document.querySelector('#rosaryReadingView')
};
const $=selector=>document.querySelector(selector);
const backButton=$('#backButton');
const settings=JSON.parse(localStorage.getItem('novenaSettings')||'{}');
const NOVENAS={
  nudos:{
    title:'Novena Desata Nudos',
    menuName:'NOVENA DESATA NUDOS',
    dayLabel:day=>`Día ${day}`,
    content:NOVENA_CONTENT,
    completedKey:'novenaCompleted',
    dateKey:'novenaStart'
  },
  sanBenito:{
    title:'Novena de San Benito',
    menuName:'NOVENA DE SAN BENITO',
    dayLabel:day=>`Día ${day} San Benito`,
    content:SAN_BENITO_CONTENT,
    completedKey:'novenaCompletedSanBenito',
    dateKey:'novenaStartSanBenito'
  }
};

let currentView='home';
let currentDay=1;
let currentNovena='nudos';
let counterValue=1;
let counterContext='';
let rosaryAveCount=1;
let currentRosaryDay=ROSARIO_POR_DIA[new Date().getDay()];
let completed=[];
let draftSettings={};

function readCompleted(){
  try{
    const value=JSON.parse(localStorage.getItem(NOVENAS[currentNovena].completedKey)||'[]');
    return Array.isArray(value)?value:[];
  }catch{return []}
}

function showView(name,addHistory=true,details={}){
  Object.values(views).forEach(view=>view.classList.remove('active'));
  views[name].classList.add('active');
  currentView=name;
  backButton.classList.toggle('hidden',name==='home');
  $('#sanBenitoFloating').classList.toggle('hidden',!(name==='reading'&&currentNovena==='sanBenito'));
  $('#rosaryFloating').classList.toggle('hidden',name!=='rosaryReading');
  if(addHistory)history.pushState({view:name,novena:currentNovena,...details},'');
  window.scrollTo(0,0);
}

function prepareNovena(id){
  currentNovena=NOVENAS[id]?id:'nudos';
  completed=readCompleted();
  const novena=NOVENAS[currentNovena];
  $('#daysNovenaName').textContent=novena.menuName;
  $('#readingTitle').textContent=novena.title;
  updateDateDisplay();
  renderDays();
}

function selectNovena(id,addHistory=true){
  prepareNovena(id);
  showView('days',addHistory);
}

function saveCompleted(){
  localStorage.setItem(NOVENAS[currentNovena].completedKey,JSON.stringify(completed));
  renderDays();
}

function renderDays(){
  const novena=NOVENAS[currentNovena];
  $('#dayList').innerHTML=Array.from({length:9},(_,index)=>{
    const day=index+1;
    const label=novena.dayLabel(day);
    return `<div class="day-row"><button class="day-button" data-day="${day}"><span>${label}</span><span>›</span></button><label class="check-wrap" aria-label="Marcar ${label}"><input type="checkbox" data-check="${day}" ${completed.includes(day)?'checked':''}></label></div>`;
  }).join('');
  $('#progressText').textContent=`${completed.length} de 9 completados`;
  document.querySelectorAll('[data-day]').forEach(button=>button.onclick=()=>openDay(Number(button.dataset.day)));
  document.querySelectorAll('[data-check]').forEach(checkbox=>checkbox.onchange=()=>{
    const day=Number(checkbox.dataset.check);
    const position=completed.indexOf(day);
    if(checkbox.checked&&position<0)completed.push(day);
    if(!checkbox.checked&&position>=0)completed.splice(position,1);
    saveCompleted();
  });
}

function escapeHtml(value){
  return value.replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
}

function formatPrayerText(text){
  const lines=String(text||'').replace(/\r/g,'').split('\n');
  const parts=[];
  let paragraph=[];
  const flush=()=>{
    if(!paragraph.length)return;
    const value=paragraph.join(' ').trim();
    const quote=/^[”“"]|\([A-Z][a-z]?\s?\d/.test(value);
    parts.push(`<p class="${quote?'scripture':''}">${escapeHtml(value)}</p>`);
    paragraph=[];
  };
  lines.forEach((raw,index)=>{
    const line=raw.trim();
    if(!line){flush();return}
    if(line==='----------'){
      flush();
      parts.push('<div class="prayer-separator" aria-hidden="true"><span>✦</span></div>');
      return;
    }
    if(/^Todos:\s*/i.test(line)){
      flush();
      const response=line.replace(/^Todos:\s*/i,'');
      parts.push(`<p class="response-line"><strong>Todos:</strong> ${escapeHtml(response)}</p>`);
      return;
    }
    const isMain=index===0&&/^Día\s+\d+/i.test(line);
    const isHeading=/:$/.test(line)||/^(INICIO|LETANÍA|ORACIONES FINALES)\.?$/i.test(line)||/^Acto de contrición/i.test(line)||/^Breve reflexión/i.test(line)||/^Oración (preparatoria|final)/i.test(line)||/^(Primer|Segundo|Tercer|Cuarto|Quinto|Sexto|Séptimo|Octavo|Noveno) día de la Novena/i.test(line);
    const isEmphasis=/^\*.*\*$/.test(line);
    const isList=/^[•-]\s*/.test(line);
    if(isMain||isHeading){
      flush();
      parts.push(`<${isMain?'h2':'h3'} class="${isMain?'content-title':'content-heading'}">${escapeHtml(line)}</${isMain?'h2':'h3'}>`);
    }else if(/^Am[eé]n\.?$/i.test(line)){
      flush();
      parts.push(`<p class="amen">${escapeHtml(line)}</p>`);
    }else if(isEmphasis){
      flush();
      parts.push(`<p class="prayer-emphasis">${escapeHtml(line.slice(1,-1))}</p>`);
    }else if(isList){
      flush();
      parts.push(`<p class="prayer-list-item">${escapeHtml(line.replace(/^[•-]\s*/,''))}</p>`);
    }else{
      paragraph.push(line);
    }
  });
  flush();
  return parts.join('');
}

function formatModalPrayer(text){
  const clean=String(text||'').replace(/\r/g,'').split('\n').map(line=>line.trim()).filter(Boolean).join(' ');
  return clean.split(/(?=Gloria al Padre)/i).map((section,index)=>{
    const hasAmen=/\bAmén\.?\s*$/i.test(section);
    const prayer=section.replace(/\s*Amén\.?\s*$/i,'').trim();
    return `<section class="${index?'modal-gloria':'modal-prayer-section'}"><p class="modal-prayer-paragraph">${escapeHtml(prayer)}</p>${hasAmen?'<p class="modal-amen-line">Amén.</p>':''}</section>`;
  }).join('');
}

function openDay(day,addHistory=true){
  currentDay=day;
  const novena=NOVENAS[currentNovena];
  const content=novena.content.days[day-1];
  $('#readingLabel').textContent=novena.dayLabel(day).toUpperCase();
  $('#readingTitle').textContent=novena.title;
  $('#mainText').innerHTML=formatPrayerText(content.texto);
  $('#continuationText').innerHTML=formatPrayerText(content.texto2);
  $('#nudosPrayerActions').classList.toggle('hidden',currentNovena!=='nudos');
  showView('reading',addHistory,{day});
}

function updateCounter(){
  $('#counterValue').textContent=counterValue;
  if(counterContext==='rosary'){
    rosaryAveCount=counterValue;
    $('#rosaryAveCounter').textContent=`‹ ${counterValue} ›`;
  }
  const gloria=$('#modalText .modal-gloria');
  if(gloria)gloria.classList.toggle('visible',counterValue===10);
}

function openPrayer(title,text,hasCounter=false,structured=false,initialCounter=1,context=''){
  $('#modalTitle').textContent=title;
  $('#modalText').innerHTML=structured?formatPrayerText(text):formatModalPrayer(text);
  $('#counter').classList.toggle('hidden',!hasCounter);
  counterContext=context;
  counterValue=initialCounter;
  updateCounter();
  $('#prayerDialog').showModal();
}

function renderGeneralPrayers(){
  $('#prayersList').innerHTML=ORDEN_ORACIONES.map(id=>{
    const prayer=ORACIONES_GENERALES[id];
    return `<button class="prayer-menu-button" data-prayer="${id}"><span>${escapeHtml(prayer.titulo)}</span><span aria-hidden="true">›</span></button>`;
  }).join('');
  document.querySelectorAll('[data-prayer]').forEach(button=>{
    button.onclick=()=>openGeneralPrayer(button.dataset.prayer);
  });
}

function openGeneralPrayer(id,addHistory=true){
  const prayer=ORACIONES_GENERALES[id];
  if(!prayer)return;
  if(prayer.paginaCompleta){
    $('#standalonePrayerTitle').textContent=prayer.titulo;
    $('#standalonePrayerText').innerHTML=formatPrayerText(prayer.texto);
    showView('standalone',addHistory,{prayerId:id});
    return;
  }
  openPrayer(prayer.titulo,prayer.texto,false,true);
}

function updateRosaryToday(){
  currentRosaryDay=ROSARIO_POR_DIA[new Date().getDay()];
  const mystery=ROSARIO_CONTENT.misterios[currentRosaryDay.misterio];
  $('#rosaryWeekday').textContent=`Hoy es ${currentRosaryDay.dia}`;
  $('#rosaryMysteryToday').textContent=mystery.nombre;
}

function renderLitany(){
  const litany=ROSARIO_CONTENT.letania;
  const pairs=[
    ...litany.invocaciones,
    ...litany.ruegaPorNosotros.map(invocation=>[`${invocation}.`,'Ruega por nosotros.']),
    ...litany.corderoDeDios
  ];
  return `<section class="litany-section">
    <h3 class="content-heading">${escapeHtml(litany.titulo)}</h3>
    <div class="litany-list">${pairs.map(([invocation,response])=>`
      <div class="litany-pair">
        <p>${escapeHtml(invocation)}</p>
        <p><strong>Todos:</strong> ${escapeHtml(response)}</p>
      </div>`).join('')}
    </div>
  </section>`;
}

function renderRosaryReading(){
  updateRosaryToday();
  const mystery=ROSARIO_CONTENT.misterios[currentRosaryDay.misterio];
  const [closingBeforeLitany,closingAfterLitany]=ROSARIO_CONTENT.cierre.split('[[LETANIA]]');
  $('#rosaryReadingDay').textContent=currentRosaryDay.dia.toUpperCase();
  $('#rosaryReadingMystery').textContent=mystery.nombre;
  $('#rosaryIntro').innerHTML=formatPrayerText(ROSARIO_CONTENT.inicio);
  $('#rosaryMysteries').innerHTML=mystery.items.map((item,index)=>`
    <section class="rosary-mystery">
      <div class="mystery-number"><span>${index+1}</span><strong>${escapeHtml(item.numero)}</strong></div>
      <h2>${escapeHtml(item.titulo)}</h2>
      <p class="mystery-reading">${escapeHtml(item.lectura)}</p>
      <p class="mystery-prayer-guide">Rezar un Padre Nuestro, diez Ave Marías y las Jaculatorias.</p>
    </section>`).join('');
  $('#rosaryClosing').innerHTML=`${formatPrayerText(closingBeforeLitany)}${renderLitany()}${formatPrayerText(closingAfterLitany)}`;
}

function selectRosary(addHistory=true){
  updateRosaryToday();
  showView('rosary',addHistory);
}

function startRosary(addHistory=true){
  rosaryAveCount=1;
  $('#rosaryAveCounter').textContent='‹ 1 ›';
  renderRosaryReading();
  showView('rosaryReading',addHistory,{rosaryDay:new Date().getDay()});
}

function paintSettings(values){
  const root=document.documentElement;
  root.style.setProperty('--prayer-size',`${values.size||18}px`);
  root.style.setProperty('--prayer-color',values.color||'#24362d');
  root.style.setProperty('--view-font',values.viewFamily||values.family||'Georgia, serif');
  root.style.setProperty('--modal-font',values.modalFamily||values.family||'Georgia, serif');
}

function applySettings(){
  paintSettings(settings);
  $('#fontSize').value=settings.size||18;
  $('#fontSizeOutput').textContent=`${settings.size||18} px`;
  $('#fontColor').value=settings.color||'#24362d';
  $('#viewFontFamily').value=settings.viewFamily||settings.family||'Georgia, serif';
  $('#modalFontFamily').value=settings.modalFamily||settings.family||'Georgia, serif';
}

function saveSettings(){
  Object.assign(settings,draftSettings);
  localStorage.setItem('novenaSettings',JSON.stringify(settings));
  applySettings();
  $('#settingsSaved').textContent='Cambios guardados';
  setTimeout(()=>{$('#settingsSaved').textContent=''},1800);
}

function updateDateDisplay(){
  $('#dateText').textContent=localStorage.getItem(NOVENAS[currentNovena].dateKey)||'Marcar inicio';
}

function restoreNavigation(state){
  if(!state?.view)return;
  if(state.view==='home'){
    showView('home',false);
    return;
  }
  if(state.view==='prayers'){
    renderGeneralPrayers();
    showView('prayers',false);
    return;
  }
  if(state.view==='standalone'){
    openGeneralPrayer(state.prayerId||'caminataEncarnacion',false);
    return;
  }
  if(state.view==='rosary'){
    selectRosary(false);
    return;
  }
  if(state.view==='rosaryReading'){
    renderRosaryReading();
    showView('rosaryReading',false);
    return;
  }
  prepareNovena(state.novena||'nudos');
  if(state.view==='reading')openDay(state.day||1,false);
  else showView(state.view,false);
}

$('#openNovena').onclick=()=>selectNovena('nudos');
$('#openSanBenito').onclick=()=>selectNovena('sanBenito');
$('#openRosary').onclick=()=>selectRosary();
$('#startRosary').onclick=()=>startRosary();
$('#openPrayers').onclick=()=>{
  renderGeneralPrayers();
  showView('prayers');
};
backButton.onclick=()=>history.back();
$('#clearChecks').onclick=()=>{completed.splice(0);saveCompleted()};
$('#dateButton').onclick=()=>{
  const key=NOVENAS[currentNovena].dateKey;
  const old=localStorage.getItem(key);
  if(old){
    localStorage.removeItem(key);
  }else{
    const date=new Date();
    const months=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    const hours=date.getHours();
    const value=`${String(date.getDate()).padStart(2,'0')}/${months[date.getMonth()]}/${date.getFullYear()} ${String(hours%12||12).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')} ${hours>=12?'pm':'am'}`;
    localStorage.setItem(key,value);
  }
  updateDateDisplay();
};

$('#ourFatherButton').onclick=()=>openPrayer('Padre nuestro',NOVENA_CONTENT.padreNuestro);
$('#hailMaryButton').onclick=()=>openPrayer('Dios te salve',NOVENA_CONTENT.diosTeSalve,true);
$('#sbOurFather').onclick=()=>openPrayer('Padrenuestro',SAN_BENITO_CONTENT.prayers.padreNuestro);
$('#sbHailMary').onclick=()=>openPrayer('Avemaría',SAN_BENITO_CONTENT.prayers.aveMaria);
$('#sbGlory').onclick=()=>openPrayer('Gloria',SAN_BENITO_CONTENT.prayers.gloria);
$('#rosaryOurFather').onclick=()=>{
  rosaryAveCount=1;
  $('#rosaryAveCounter').textContent='‹ 1 ›';
  openPrayer('Padre Nuestro',ORACIONES_GENERALES.padreNuestro.texto);
};
$('#rosaryHailMary').onclick=()=>openPrayer('Ave María',ORACIONES_GENERALES.aveMaria.texto,true,false,rosaryAveCount,'rosary');
$('#rosaryJaculatory').onclick=()=>openPrayer('Jaculatorias',ROSARIO_CONTENT.jaculatorias,false,true);

document.querySelectorAll('.close-button').forEach(button=>button.onclick=()=>button.closest('dialog').close());
document.querySelectorAll('dialog').forEach(dialog=>dialog.onclick=event=>{if(event.target===dialog)dialog.close()});
$('#counterPrev').onclick=()=>{counterValue=Math.max(1,counterValue-1);updateCounter()};
$('#counterNext').onclick=()=>{counterValue=Math.min(10,counterValue+1);updateCounter()};
$('#settingsButton').onclick=()=>{draftSettings={...settings};applySettings();$('#settingsDialog').showModal()};
$('#fontSize').oninput=event=>{draftSettings.size=Number(event.target.value);$('#fontSizeOutput').textContent=`${draftSettings.size} px`;paintSettings(draftSettings)};
$('#fontColor').oninput=event=>{draftSettings.color=event.target.value;paintSettings(draftSettings)};
$('#viewFontFamily').onchange=event=>{draftSettings.viewFamily=event.target.value;paintSettings(draftSettings)};
$('#modalFontFamily').onchange=event=>{draftSettings.modalFamily=event.target.value;paintSettings(draftSettings)};
$('#resetColor').onclick=()=>{draftSettings.color='#24362d';$('#fontColor').value=draftSettings.color;paintSettings(draftSettings)};
$('#saveSettingsButton').onclick=saveSettings;
$('#settingsDialog').addEventListener('close',applySettings);

prepareNovena('nudos');
renderGeneralPrayers();
updateRosaryToday();
applySettings();

if(!sessionStorage.getItem('novenaHistoryReady')){
  history.replaceState({view:'home',exitBoundary:true},'');
  history.pushState({view:'home',appGuard:true},'');
  sessionStorage.setItem('novenaHistoryReady','1');
}else{
  restoreNavigation(history.state);
}

window.addEventListener('popstate',event=>{
  if(event.state?.exitBoundary){
    showView('home',false);
    if(confirm('¿Quieres cerrar Oraciones Católicas?')){
      sessionStorage.removeItem('novenaHistoryReady');
      history.back();
    }else{
      history.pushState({view:'home',appGuard:true},'');
    }
    return;
  }
  restoreNavigation(event.state);
});

if('serviceWorker' in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js?v=4.0'));
}
