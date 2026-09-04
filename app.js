const views={home:document.querySelector('#homeView'),days:document.querySelector('#daysView'),reading:document.querySelector('#readingView')};
const backButton=document.querySelector('#backButton');
let currentView='home',currentDay=1,counterValue=1;
const $=s=>document.querySelector(s);
const settings=JSON.parse(localStorage.getItem('novenaSettings')||'{}');
let draftSettings={};
const completed=JSON.parse(localStorage.getItem('novenaCompleted')||'[]');

function showView(name){Object.values(views).forEach(v=>v.classList.remove('active'));views[name].classList.add('active');currentView=name;backButton.classList.toggle('hidden',name==='home');window.scrollTo(0,0)}
function saveCompleted(){localStorage.setItem('novenaCompleted',JSON.stringify(completed));renderDays()}
function renderDays(){
  $('#dayList').innerHTML=Array.from({length:9},(_,i)=>{const day=i+1;return `<div class="day-row"><button class="day-button" data-day="${day}"><span>Día ${day}</span><span>›</span></button><label class="check-wrap" aria-label="Marcar día ${day}"><input type="checkbox" data-check="${day}" ${completed.includes(day)?'checked':''}></label></div>`}).join('');
  $('#progressText').textContent=`${completed.length} de 9 completados`;
  document.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>openDay(Number(b.dataset.day)));
  document.querySelectorAll('[data-check]').forEach(c=>c.onchange=()=>{const d=Number(c.dataset.check),p=completed.indexOf(d);if(c.checked&&p<0)completed.push(d);if(!c.checked&&p>=0)completed.splice(p,1);saveCompleted()});
}
function escapeHtml(value){return value.replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]))}
function formatPrayerText(text){
  const lines=String(text||'').replace(/\r/g,'').split('\n');
  const parts=[];let paragraph=[];
  const flush=()=>{if(!paragraph.length)return;const value=paragraph.join(' ').trim();const quote=/^[”“"]|\([A-Z][a-z]?\s?\d/.test(value);parts.push(`<p class="${quote?'scripture':''}">${escapeHtml(value)}</p>`);paragraph=[]};
  lines.forEach((raw,index)=>{
    const line=raw.trim();
    if(!line){flush();return}
    const isMain=index===0&&/^Día\s+\d+/i.test(line);
    const isHeading=/:$/.test(line)||/^Acto de contrición/i.test(line)||/^Primer Día/i.test(line)||/^Breve reflexión/i.test(line);
    if(isMain||isHeading){flush();parts.push(`<${isMain?'h2':'h3'} class="${isMain?'content-title':'content-heading'}">${escapeHtml(line)}</${isMain?'h2':'h3'}>`)}
    else if(/^Am[eé]n\.?$/i.test(line)){flush();parts.push(`<p class="amen">${escapeHtml(line)}</p>`)}
    else paragraph.push(line);
  });
  flush();return parts.join('');
}
function openDay(day){currentDay=day;const content=NOVENA_CONTENT.days[day-1];$('#readingLabel').textContent=`DÍA ${day}`;$('#mainText').innerHTML=formatPrayerText(content.texto);$('#continuationText').innerHTML=formatPrayerText(content.texto2);showView('reading')}
function openPrayer(title,text,hasCounter=false){$('#modalTitle').textContent=title;$('#modalText').innerHTML=formatPrayerText(text);$('#counter').classList.toggle('hidden',!hasCounter);counterValue=1;$('#counterValue').textContent=counterValue;$('#prayerDialog').showModal()}
function paintSettings(values){const root=document.documentElement;root.style.setProperty('--prayer-size',`${values.size||18}px`);root.style.setProperty('--prayer-color',values.color||'#24362d');root.style.setProperty('--view-font',values.viewFamily||values.family||'Georgia, serif');root.style.setProperty('--modal-font',values.modalFamily||values.family||'Georgia, serif')}
function applySettings(){paintSettings(settings);$('#fontSize').value=settings.size||18;$('#fontSizeOutput').textContent=`${settings.size||18} px`;$('#fontColor').value=settings.color||'#24362d';$('#viewFontFamily').value=settings.viewFamily||settings.family||'Georgia, serif';$('#modalFontFamily').value=settings.modalFamily||settings.family||'Georgia, serif'}
function saveSettings(){Object.assign(settings,draftSettings);localStorage.setItem('novenaSettings',JSON.stringify(settings));applySettings();$('#settingsSaved').textContent='Cambios guardados';setTimeout(()=>{$('#settingsSaved').textContent=''},1800)}

$('#openNovena').onclick=()=>showView('days');
backButton.onclick=()=>showView(currentView==='reading'?'days':'home');
$('#clearChecks').onclick=()=>{completed.splice(0);saveCompleted()};
$('#dateButton').onclick=()=>{const old=localStorage.getItem('novenaStart');if(old){localStorage.removeItem('novenaStart');$('#dateText').textContent='Marcar inicio'}else{const d=new Date(),months=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'],h=d.getHours(),hour=h%12||12,ampm=h>=12?'pm':'am';const value=`${String(d.getDate()).padStart(2,'0')}/${months[d.getMonth()]}/${d.getFullYear()} ${String(hour).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')} ${ampm}`;localStorage.setItem('novenaStart',value);$('#dateText').textContent=value}};
$('#ourFatherButton').onclick=()=>openPrayer('Padre nuestro',NOVENA_CONTENT.padreNuestro);
$('#hailMaryButton').onclick=()=>openPrayer('Dios te salve',NOVENA_CONTENT.diosTeSalve,true);
document.querySelectorAll('.close-button').forEach(b=>b.onclick=()=>b.closest('dialog').close());
document.querySelectorAll('dialog').forEach(d=>d.onclick=e=>{if(e.target===d)d.close()});
$('#counterPrev').onclick=()=>{$('#counterValue').textContent=counterValue=Math.max(1,counterValue-1)};
$('#counterNext').onclick=()=>{$('#counterValue').textContent=counterValue=Math.min(10,counterValue+1)};
$('#settingsButton').onclick=()=>{draftSettings={...settings};applySettings();$('#settingsDialog').showModal()};
$('#fontSize').oninput=e=>{draftSettings.size=Number(e.target.value);$('#fontSizeOutput').textContent=`${draftSettings.size} px`;paintSettings(draftSettings)};
$('#fontColor').oninput=e=>{draftSettings.color=e.target.value;paintSettings(draftSettings)};
$('#viewFontFamily').onchange=e=>{draftSettings.viewFamily=e.target.value;paintSettings(draftSettings)};
$('#modalFontFamily').onchange=e=>{draftSettings.modalFamily=e.target.value;paintSettings(draftSettings)};
$('#resetColor').onclick=()=>{draftSettings.color='#24362d';$('#fontColor').value=draftSettings.color;paintSettings(draftSettings)};
$('#saveSettingsButton').onclick=saveSettings;
$('#settingsDialog').addEventListener('close',applySettings);
const savedDate=localStorage.getItem('novenaStart');if(savedDate)$('#dateText').textContent=savedDate;
renderDays();applySettings();
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js?v=1.5'));
