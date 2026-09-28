const views={
  home:document.querySelector('#homeView'),
  lordDay:document.querySelector('#lordDayView'),
  days:document.querySelector('#daysView'),
  reading:document.querySelector('#readingView'),
  prayers:document.querySelector('#prayersView'),
  standalone:document.querySelector('#standalonePrayerView'),
  rosary:document.querySelector('#rosaryView'),
  rosaryReading:document.querySelector('#rosaryReadingView'),
  rosary46Reading:document.querySelector('#rosary46ReadingView')
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
let pendingRosaryMystery='';
let pendingRosaryMode='today';

const LORD_DAY_URL='https://misa.jjesushmalerva.chatgpt.site/';
const ROSARY_SELECTION_KEY='rosaryMysterySelection';
const ROSARY_MYSTERY_IDS=['gozosos','dolorosos','gloriosos','luminosos'];
const ROSARY_MYSTERY_SCHEDULES={
  gozosos:'Corresponden al lunes y sábado.',
  dolorosos:'Corresponden al martes y viernes.',
  gloriosos:'Corresponden al miércoles y domingo.',
  luminosos:'Corresponden al jueves.'
};

function readCompleted(){
  try{
    const value=JSON.parse(localStorage.getItem(NOVENAS[currentNovena].completedKey)||'[]');
    return Array.isArray(value)?value:[];
  }catch{return []}
}

function showView(name,addHistory=true,details={}){
  closeGloriaBubble();
  Object.values(views).forEach(view=>view.classList.remove('active'));
  views[name].classList.add('active');
  currentView=name;
  backButton.classList.toggle('hidden',name==='home');
  $('#sanBenitoFloating').classList.toggle('hidden',!(name==='reading'&&currentNovena==='sanBenito'));
  $('#rosaryFloating').classList.toggle('hidden',!['rosaryReading','rosary46Reading'].includes(name));
  if(addHistory)history.pushState({view:name,novena:currentNovena,...details},'');
  window.scrollTo(0,0);
}

function setLordDayStatus(message,description='',isError=false){
  const status=$('#lordDayStatus');
  const shell=$('#lordDayFrameShell');
  status.querySelector('strong').textContent=message;
  status.querySelector('small').textContent=description;
  status.classList.toggle('is-error',isError);
  $('#retryLordDay').classList.toggle('hidden',!isError);
  shell.setAttribute('aria-busy',String(!isError));
}

function loadLordDay(force=false){
  const frame=$('#lordDayFrame');
  const shell=$('#lordDayFrameShell');
  if(!navigator.onLine){
    frame.classList.remove('is-loaded');
    shell.classList.remove('is-loaded');
    setLordDayStatus('No hay conexión a Internet','Conéctate y pulsa Reintentar.',true);
    return;
  }
  if(!force&&frame.getAttribute('src')===LORD_DAY_URL&&frame.classList.contains('is-loaded'))return;
  frame.classList.remove('is-loaded');
  shell.classList.remove('is-loaded');
  setLordDayStatus('Preparando la misa de hoy','Espera un momento…');
  frame.src=LORD_DAY_URL;
}

function openLordDay(addHistory=true){
  showView('lordDay',addHistory);
  requestAnimationFrame(()=>loadLordDay());
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
    const isHeading=/:$/.test(line)||/^(INICIO|LETAN[IÍ]A|JACULATORIAS?|AVE MAR[IÍ]AS|DIOS TE SALVE|ORACIONES FINALES|OREMOS|ORACIÓN)\.?$/i.test(line)||/^Acto de contrición/i.test(line)||/^Breve reflexión/i.test(line)||/^Oración (preparatoria|final)/i.test(line)||/^(Primer|Segundo|Tercer|Cuarto|Quinto|Sexto|Séptimo|Octavo|Noveno) día de la Novena/i.test(line);
    const isEmphasis=/^\*.*\*$/.test(line);
    const isList=/^[•*-]\s*/.test(line);
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
      parts.push(`<p class="prayer-list-item">${escapeHtml(line.replace(/^[•*-]\s*/,''))}</p>`);
    }else{
      paragraph.push(line);
    }
  });
  flush();
  return parts.join('');
}

function formatRosary46Text(text){
  const separated=String(text||'').replace(
    /([^\n])\s+(Am[eé]n\.?)(?=\s*(?:\n|$))/gim,
    '$1\n\n$2'
  );
  return formatPrayerText(separated);
}

function renderRosary46Paragraph(text,className){
  const value=String(text||'').trim();
  const match=value.match(/^([\s\S]*?)\s+(Am[eé]n\.?)$/i);
  if(!match)return `<p class="${className}">${escapeHtml(value)}</p>`;
  return `<p class="${className}">${escapeHtml(match[1].trim())}</p><p class="amen">${escapeHtml(match[2])}</p>`;
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
  const structuredFormatter=currentView==='rosary46Reading'?formatRosary46Text:formatPrayerText;
  $('#modalText').innerHTML=structured?structuredFormatter(text):formatModalPrayer(text);
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

function getTodayKey(){
  const date=new Date();
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

function readRosaryMysterySelection(){
  try{
    const selection=JSON.parse(localStorage.getItem(ROSARY_SELECTION_KEY)||'null');
    if(selection?.date===getTodayKey()&&ROSARY_MYSTERY_IDS.includes(selection.mystery))return selection.mystery;
    if(selection)localStorage.removeItem(ROSARY_SELECTION_KEY);
  }catch{
    localStorage.removeItem(ROSARY_SELECTION_KEY);
  }
  return '';
}

function resolveRosaryDay(){
  const scheduled=ROSARIO_POR_DIA[new Date().getDay()];
  const selected=readRosaryMysterySelection();
  const manual=Boolean(selected&&selected!==scheduled.misterio);
  if(selected&&!manual)localStorage.removeItem(ROSARY_SELECTION_KEY);
  return {...scheduled,misterio:manual?selected:scheduled.misterio,manual};
}

function updateRosaryToday(){
  currentRosaryDay=resolveRosaryDay();
  const mystery=ROSARIO_CONTENT.misterios[currentRosaryDay.misterio];
  const schedule=ROSARY_MYSTERY_SCHEDULES[currentRosaryDay.misterio];
  const todayMystery=ROSARIO_CONTENT.misterios[ROSARIO_POR_DIA[new Date().getDay()].misterio];
  $('#rosaryWeekday').textContent=currentRosaryDay.manual?'Selección personal':`Hoy es ${currentRosaryDay.dia}`;
  $('#rosaryMysteryToday').textContent=mystery.nombre;
  $('#rosaryMysterySchedule').textContent=schedule;
  $('#todayMysteryDescription').textContent=`Hoy corresponden los ${todayMystery.nombre.toLowerCase()}`;
  $('#openMysterySelector').setAttribute('aria-label',`${currentRosaryDay.manual?'Selección personal. ':''}${mystery.nombre}. ${schedule} Puedes seleccionar aquí los misterios a meditar.`);
}

function paintMysteryOptions(){
  const todaySelected=pendingRosaryMode==='today';
  $('#selectTodayMystery').classList.toggle('selected',todaySelected);
  $('#selectTodayMystery').setAttribute('aria-pressed',String(todaySelected));
  document.querySelectorAll('[data-mystery-option]').forEach(button=>{
    const selected=pendingRosaryMode==='manual'&&button.dataset.mysteryOption===pendingRosaryMystery;
    button.classList.toggle('selected',selected);
    button.setAttribute('aria-pressed',String(selected));
  });
}

function openMysterySelector(){
  updateRosaryToday();
  pendingRosaryMystery=currentRosaryDay.misterio;
  pendingRosaryMode=currentRosaryDay.manual?'manual':'today';
  paintMysteryOptions();
  $('#mysterySelectorDialog').showModal();
}

function saveRosaryMysterySelection(){
  if(!ROSARY_MYSTERY_IDS.includes(pendingRosaryMystery))return;
  const scheduled=ROSARIO_POR_DIA[new Date().getDay()].misterio;
  if(pendingRosaryMode==='today'||pendingRosaryMystery===scheduled){
    localStorage.removeItem(ROSARY_SELECTION_KEY);
  }else{
    localStorage.setItem(ROSARY_SELECTION_KEY,JSON.stringify({
      mystery:pendingRosaryMystery,
      date:getTodayKey()
    }));
  }
  updateRosaryToday();
  $('#mysterySelectorDialog').close();
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

function renderRosary46Closing(){
  const lines=String(ROSARIO_46_CONTENT.cierre||'').replace(/\r/g,'').split('\n');
  const litanyStart=lines.findIndex(line=>/^LETAN[IÍ]A$/i.test(line.trim()));
  const responseNote=lines.findIndex((line,index)=>index>litanyStart&&/^A las siguientes invocaciones/i.test(line.trim()));
  const corderoStart=lines.findIndex((line,index)=>index>responseNote&&/^Guía:\s*Cordero de Dios/i.test(line.trim()));
  if(litanyStart<0||responseNote<0||corderoStart<0)return formatPrayerText(ROSARIO_46_CONTENT.cierre);

  const makePairs=source=>{
    const clean=source.map(line=>line.trim()).filter(Boolean);
    const pairs=[];
    for(let index=0;index<clean.length;index+=1){
      const invocation=clean[index].replace(/^Guía:\s*/i,'');
      const next=clean[index+1]||'';
      if(/^Todos:\s*/i.test(next)){
        pairs.push([invocation,next.replace(/^Todos:\s*/i,'')]);
        index+=1;
      }else{
        pairs.push([invocation,'Ruega por nosotros.']);
      }
    }
    return pairs;
  };

  let litanyEnd=corderoStart;
  while(litanyEnd<lines.length){
    const line=lines[litanyEnd].trim();
    if(!line||/^Guía:\s*/i.test(line)||/^Todos:\s*/i.test(line)){
      litanyEnd+=1;
      continue;
    }
    break;
  }

  const openingPairs=makePairs(lines.slice(litanyStart+1,responseNote));
  const responsePairs=lines.slice(responseNote+1,corderoStart)
    .map(line=>line.trim())
    .filter(Boolean)
    .map(invocation=>[invocation,'Ruega por nosotros.']);
  const closingPairs=makePairs(lines.slice(corderoStart,litanyEnd));
  const renderPairs=pairs=>pairs.map(([invocation,response])=>`
    <div class="litany-pair">
      <p>${escapeHtml(invocation)}</p>
      <p><strong>Todos:</strong> ${escapeHtml(response)}</p>
    </div>`).join('');

  const litanyHtml=`<section class="litany-section rosary46-litany">
    <h3 class="content-heading">LETANÍA</h3>
    <div class="litany-list">
      ${renderPairs(openingPairs)}
      <p class="litany-response-note">A las siguientes invocaciones respondemos: Ruega por nosotros.</p>
      ${renderPairs(responsePairs)}
      ${renderPairs(closingPairs)}
    </div>
  </section>`;

  return `${formatRosary46Text(lines.slice(0,litanyStart).join('\n'))}${litanyHtml}${formatRosary46Text(lines.slice(litanyEnd).join('\n'))}`;
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
  const closingHtml=formatPrayerText(closingAfterLitany).replace(
    'un Padre Nuestro, Ave María y Gloria.',
    'un Padre Nuestro, Ave María y <button id="rosaryGloriaButton" class="inline-gloria-button" type="button">Gloria</button>.'
  );
  $('#rosaryClosing').innerHTML=`${formatPrayerText(closingBeforeLitany)}${renderLitany()}${closingHtml}`;
  const gloriaButton=$('#rosaryGloriaButton');
  if(gloriaButton)gloriaButton.onclick=openGloriaBubble;
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

function renderRosary46Reading(){
  updateRosaryToday();
  const mystery=ROSARIO_46_CONTENT.misterios[currentRosaryDay.misterio];
  $('#rosary46ReadingDay').textContent=currentRosaryDay.manual?'SELECCIÓN PERSONAL':currentRosaryDay.dia.toUpperCase();
  $('#rosary46ReadingMystery').textContent=mystery.nombre;
  $('#rosary46Intro').innerHTML=formatRosary46Text(ROSARIO_46_CONTENT.inicio);
  $('#rosary46Mysteries').innerHTML=mystery.items.map((item,index)=>`
    <section class="rosary-mystery rosary46-mystery">
      <div class="mystery-number"><span>${index+1}</span><strong>${escapeHtml(item.numero)}</strong></div>
      <h2>${escapeHtml(item.titulo)}</h2>
      ${renderRosary46Paragraph(item.ofrecimiento,'mystery-offering')}
      ${renderRosary46Paragraph(item.reflexion,'mystery-reading')}
      <p class="mystery-prayer-guide">Rezar un Padre Nuestro, diez Ave Marías y las Jaculatorias.</p>
    </section>`).join('');
  $('#rosary46Closing').innerHTML=renderRosary46Closing();
}

function startRosary46(addHistory=true){
  rosaryAveCount=1;
  $('#rosaryAveCounter').textContent='‹ 1 ›';
  renderRosary46Reading();
  showView('rosary46Reading',addHistory,{rosaryDay:new Date().getDay(),rosaryKind:'46'});
}

function paintSettings(values){
  const root=document.documentElement;
  const legacySize=values.size||18;
  const viewSize=values.viewSize||legacySize;
  const modalSize=values.modalSize||legacySize;
  root.style.setProperty('--prayer-size',`${viewSize}px`);
  root.style.setProperty('--view-size',`${viewSize}px`);
  root.style.setProperty('--modal-size',`${modalSize}px`);
  root.style.setProperty('--prayer-color',values.color||'#24362d');
  root.style.setProperty('--view-font',values.viewFamily||values.family||'Georgia, serif');
  root.style.setProperty('--modal-font',values.modalFamily||values.family||'Georgia, serif');
}

function applySettings(){
  paintSettings(settings);
  const legacySize=settings.size||18;
  const viewSize=settings.viewSize||legacySize;
  const modalSize=settings.modalSize||legacySize;
  $('#viewFontSize').value=viewSize;
  $('#viewFontSizeOutput').textContent=`${viewSize} px`;
  $('#modalFontSize').value=modalSize;
  $('#modalFontSizeOutput').textContent=`${modalSize} px`;
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
  if(state.view==='lordDay'){
    openLordDay(false);
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
  if(state.view==='rosary46Reading'){
    renderRosary46Reading();
    showView('rosary46Reading',false);
    return;
  }
  prepareNovena(state.novena||'nudos');
  if(state.view==='reading')openDay(state.day||1,false);
  else showView(state.view,false);
}

$('#openNovena').onclick=()=>selectNovena('nudos');
$('#openSanBenito').onclick=()=>selectNovena('sanBenito');
$('#openLordDay').onclick=()=>openLordDay();
$('#openRosary').onclick=()=>selectRosary();
$('#openMysterySelector').onclick=openMysterySelector;
$('#startRosary').onclick=()=>startRosary();
$('#start46Rosary').onclick=()=>startRosary46();
$('#openPrayers').onclick=()=>{
  renderGeneralPrayers();
  showView('prayers');
};
$('#lordDayFrame').addEventListener('load',()=>{
  const frame=$('#lordDayFrame');
  if(!frame.getAttribute('src'))return;
  frame.classList.add('is-loaded');
  $('#lordDayFrameShell').classList.add('is-loaded');
  $('#lordDayFrameShell').setAttribute('aria-busy','false');
});
$('#retryLordDay').onclick=()=>loadLordDay(true);
$('#reloadLordDay').onclick=()=>loadLordDay(true);
document.querySelectorAll('[data-mystery-option]').forEach(button=>{
  button.onclick=()=>{
    pendingRosaryMode='manual';
    pendingRosaryMystery=button.dataset.mysteryOption;
    paintMysteryOptions();
  };
});
$('#selectTodayMystery').onclick=()=>{
  pendingRosaryMode='today';
  pendingRosaryMystery=ROSARIO_POR_DIA[new Date().getDay()].misterio;
  paintMysteryOptions();
};
$('#saveMysterySelection').onclick=saveRosaryMysterySelection;
window.addEventListener('offline',()=>{
  if(currentView==='lordDay')loadLordDay();
});
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
  const prayer=currentView==='rosary46Reading'?ROSARIO_46_CONTENT.padreNuestro:ORACIONES_GENERALES.padreNuestro.texto;
  openPrayer('Padre Nuestro',prayer,false,true);
};
$('#rosaryHailMary').onclick=()=>{
  const prayer=currentView==='rosary46Reading'?ROSARIO_46_CONTENT.aveMaria:ORACIONES_GENERALES.aveMaria.texto;
  openPrayer('Ave María',prayer,true,true,rosaryAveCount,'rosary');
};
$('#rosaryJaculatory').onclick=()=>{
  const prayer=currentView==='rosary46Reading'?ROSARIO_46_CONTENT.jaculatorias:ROSARIO_CONTENT.jaculatorias;
  openPrayer('Jaculatorias',prayer,false,true);
};

function openGloriaBubble(){
  $('#gloriaBubbleText').innerHTML=formatModalPrayer(SAN_BENITO_CONTENT.prayers.gloria);
  $('#gloriaBubble').classList.remove('hidden');
}

function closeGloriaBubble(){
  $('#gloriaBubble')?.classList.add('hidden');
}

document.querySelectorAll('.close-button').forEach(button=>button.onclick=()=>button.closest('dialog').close());
document.querySelectorAll('dialog').forEach(dialog=>dialog.onclick=event=>{if(event.target===dialog)dialog.close()});
$('#closeGloriaBubble').onclick=closeGloriaBubble;
$('#counterPrev').onclick=()=>{counterValue=Math.max(1,counterValue-1);updateCounter()};
$('#counterNext').onclick=()=>{counterValue=counterValue===10?1:counterValue+1;updateCounter()};
$('#settingsButton').onclick=()=>{draftSettings={...settings};applySettings();$('#settingsDialog').showModal()};
$('#viewFontSize').oninput=event=>{draftSettings.viewSize=Number(event.target.value);$('#viewFontSizeOutput').textContent=`${draftSettings.viewSize} px`;paintSettings(draftSettings)};
$('#modalFontSize').oninput=event=>{draftSettings.modalSize=Number(event.target.value);$('#modalFontSizeOutput').textContent=`${draftSettings.modalSize} px`;paintSettings(draftSettings)};
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
  window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js?v=4.8.1'));
}
