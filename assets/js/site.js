/* Renders every page from <body data-lang data-page>. Plain script (no modules) so it works from file:// and any static host. */
(function(){
const L = document.body.dataset.lang, PAGE = document.body.dataset.page;
const other = L==="es"?"eu":"es";
const tt = T[L], u = UI[L], ln = LEARN[L];
const byS = s => RAW.find(x=>x.s===s);
const nm = el => el[L];
const $ = (s,r=document)=>r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
const Q = new URLSearchParams(location.search);

const S = {
es:{brand:"Tabla Periódica Infantil",sub:"Aprende jugando · 118 elementos y secretos",
 tabs:{tabla:"🧪 La tabla",aprende:"🔍 Aprende",secretos:"🤫 Secretos y moléculas",fichas:"📚 Fichas y ejemplos",quiz:"🎮 Minijuego"},
 print:"🖨️ Imprimir",ph:"Buscar por nombre, símbolo o número…",fam:"Filtrar por familia",all:"Ver todos",
 tableH:"Tabla periódica para pequeños científicos",tableLead:"Los 118 bloques con los que está construido todo el universo. Toca una casilla para ver su ficha.",
 hello:"¡Toca una casilla y descubre dónde vive cada elemento!",more:"Ver ficha completa →",speak:"🔊 Escuchar",
 dlH:"Descargar pósters",dlLead:"Para imprimir o enseñar en pantalla.",dlTable:"Tabla periódica infantil",dlSec:"Secretos de los elementos",
 secH:"Secretos y moléculas",secLead:"Los elementos casi nunca van solos: al juntarse forman cosas nuevas. Estos son 12 ejemplos.",
 fichasH:"Fichas de los 118 elementos",fichasLead:"Toca una ficha para ver todo sobre ese elemento.",
 quizLead:"Mira la pista y elige el elemento correcto.",
 f:{z:"Número atómico",ze:"Electrones",g:"Grupo (columna)",p:"Periodo (fila)",m:"Masa atómica",st:"Estado a 20 ºC",fa:"Familia",d:"Descubierto"},
 st:{s:"Sólido",l:"Líquido",g:"Gas","?":"Desconocido (dura muy poco)"},
 anti:"Se conoce desde la Antigüedad",by:"por",
 usesH:"¿Dónde lo encuentras o para qué sirve?",curioH:"Curiosidad",placeH:"Su sitio en la tabla",molH:"Aparece en estas combinaciones",mix:"Mezcla",swipe:"👉 Desliza la tabla hacia los lados para verla entera",size:"Tamaño del texto",cousin:(a,b)=>`${a} dura tan poco que nadie ha podido juntarlo con otros elementos. Pero se parece a su primo ${b}, que está justo encima en la tabla. Mira cómo se junta ${b}:`,kin:b=>`Sus primos de la tabla (${b}) se juntan de forma parecida. Mira:`,
 famH:"Su familia",prev:"◀ Anterior",next:"Siguiente ▶",back:"Volver a la tabla",noMol:"Todavía no tenemos ejemplos de combinaciones con este elemento.",
 colHelp:"Los elementos de la misma columna se parecen, como hermanos.",
 whoH:"¿Quién lo descubrió?",nameH:"Dato",zHelp:"Es el número de protones que tiene en el centro.",
 lang1:"Castellano",lang2:"Euskara"},
eu:{brand:"Taula Periodiko Txikia",sub:"Ikasi jolasean · 118 elementu eta sekretuak",
 tabs:{tabla:"🧪 Taula",aprende:"🔍 Ikasi",secretos:"🤫 Sekretuak eta molekulak",fichas:"📚 Fitxak eta adibideak",quiz:"🎮 Jokoa"},
 print:"🖨️ Inprimatu",ph:"Bilatu izenaren, ikurraren edo zenbakiaren arabera…",fam:"Iragazi familiaren arabera",all:"Ikusi guztiak",
 tableH:"Taula periodikoa zientzialari txikientzat",tableLead:"Unibertso osoa eraikita dagoen 118 blokeak. Ukitu laukitxo bat bere fitxa ikusteko.",
 hello:"Ukitu laukitxo bat eta ezagutu elementu bakoitza non bizi den!",more:"Ikusi fitxa osoa →",speak:"🔊 Entzun",
 dlH:"Deskargatu posterrak",dlLead:"Inprimatzeko edo pantailan erakusteko.",dlTable:"Taula periodiko txikia",dlSec:"Elementuen sekretuak",
 secH:"Sekretuak eta molekulak",secLead:"Elementuak ia inoiz ez dira bakarrik ibiltzen: elkartzean gauza berriak sortzen dituzte. Hona 12 adibide.",
 fichasH:"118 elementuen fitxak",fichasLead:"Ukitu fitxa bat elementu horri buruzko guztia ikusteko.",
 quizLead:"Begiratu pistari eta aukeratu elementu zuzena.",
 f:{z:"Zenbaki atomikoa",ze:"Elektroiak",g:"Taldea (zutabea)",p:"Periodoa (errenkada)",m:"Masa atomikoa",st:"Egoera 20 ºC-tan",fa:"Familia",d:"Aurkitua"},
 st:{s:"Solidoa",l:"Likidoa",g:"Gasa","?":"Ezezaguna (oso gutxi irauten du)"},
 anti:"Antzinatik ezagutzen da",by:"-k",
 usesH:"Non aurkitzen duzu edo zertarako balio du?",curioH:"Bitxikeria",placeH:"Taulan duen lekua",molH:"Konbinazio hauetan agertzen da",mix:"Nahastea",swipe:"👉 Irristatu taula alboetara osorik ikusteko",size:"Testuaren tamaina",cousin:(a,b)=>`${a} hain gutxi irauten du, inork ezin izan duela beste elementuekin elkartu. Baina bere lehengusu ${b}ren antzekoa da, taulan ia gainean dagoena. Ikusi ${b} nola elkartzen den:`,kin:b=>`Taulako lehengusuak (${b}) antzera elkartzen dira. Ikusi:`,
 famH:"Bere familia",prev:"◀ Aurrekoa",next:"Hurrengoa ▶",back:"Itzuli taulara",noMol:"Oraindik ez dugu elementu honekin konbinazio-adibiderik.",
 colHelp:"Zutabe bereko elementuak antzekoak dira, senideak bezala.",
 whoH:"Nork aurkitu zuen?",nameH:"Datua",zHelp:"Erdian dituen protoi kopurua da.",
 lang1:"Castellano",lang2:"Euskara"}
}[L];

/* Discoverer text: stored in Spanish, light translation for Basque. */
function who(w){
  if(L==="es") return w;
  const M={"Laboratorios de Dubna y Berkeley":"Dubnako eta Berkeleyko laborategiak","Laboratorio de Dubna":"Dubnako laborategia","Laboratorio de Berkeley":"Berkeleyko laborategia","Laboratorio de Darmstadt":"Darmstadtko laborategia","Laboratorio RIKEN (Japón)":"RIKEN laborategia (Japonia)","Laboratorios de Dubna y Oak Ridge":"Dubnako eta Oak Ridgeko laborategiak","Hermanos Elhuyar":"Elhuyar anaiak"};
  if(M[w]) return M[w];
  return w.replace(/ y /g," eta ").replace("(en el Sol)","(Eguzkian)").replace("su equipo","bere taldea");
}

/* ---------- shell ---------- */
const TABS = ["tabla","aprende","secretos","fichas","quiz"];
function shell(){
  const qs = location.search;
  document.body.innerHTML = `
  <header class="top"><div class="row">
    <a class="brand" href="tabla.html"><span class="logo">🧪</span><span><h1>${S.brand}</h1><small>${S.sub}</small></span></a>
    <span class="seg" role="group" aria-label="Idioma / Hizkuntza">
      <a href="../${L==="es"?"es":"es"}/${PAGE}.html${qs}" class="${L==="es"?"on":""}" lang="es">${S.lang1}</a>
      <a href="../eu/${PAGE}.html${qs}" class="${L==="eu"?"on":""}" lang="eu">${S.lang2}</a>
    </span>
    <span class="fsz" role="group" aria-label="${S.size}"><button class="btn" id="fsm" aria-label="${S.size} −">A−</button><button class="btn" id="fsp" aria-label="${S.size} +">A+</button></span>
    <button class="btn t hide-m" id="b-print">${S.print}</button>
    <a class="btn" href="../index.html" aria-label="home">🏠</a>
  </div>
  <nav class="tabs">${TABS.map(k=>`<a href="${k}.html" ${k===PAGE||(PAGE==="elemento"&&k==="fichas")?'aria-current="page"':""}>${S.tabs[k]}</a>`).join("")}</nav>
  </header>
  <main id="view"></main>
  <footer class="foot">${ln.sources}</footer>
  <div class="modal" id="modal" role="dialog" aria-modal="true"></div>`;
  document.documentElement.lang = L;
  $("#b-print").onclick = ()=>window.print();
  const FS = [100,112.5,125,140];
  const setFs = i => { i=Math.max(0,Math.min(FS.length-1,i)); document.documentElement.style.fontSize=FS[i]+"%"; try{localStorage.setItem("tp-fs",i)}catch(e){} return i; };
  let fi = 1; try{ const s=localStorage.getItem("tp-fs"); if(s!==null) fi=+s; }catch(e){}
  fi = setFs(fi);
  $("#fsm").onclick = ()=>{ fi=setFs(fi-1) }; $("#fsp").onclick = ()=>{ fi=setFs(fi+1) };
}

/* ---------- shared bits ---------- */
function catShort(c){ return u.short[c]; }
function speakBtn(el,id){
  const b = $(id); if(!b||!("speechSynthesis" in window)) return;
  const set = () => {
    const v = speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith(L));
    if(!v){ b.classList.add("hidden"); return; }
    b.classList.remove("hidden");
    b.onclick = () => { speechSynthesis.cancel(); const m=new SpeechSynthesisUtterance(`${nm(el)}. ${el.h[L]}`); m.voice=v; m.lang=v.lang; speechSynthesis.speak(m); };
  };
  set(); speechSynthesis.onvoiceschanged = set;
}
const CPK = {H:["#ffffff"],C:["#4a4a55","#fff"],O:["#ff5a5a"],Na:["#b388ff"],Cl:["#6bd36b"],Si:["#d8b878"],Fe:["#b5651d","#fff"],N:["#5a8dff"],Ca:["#ffd34d"]};
function atoms(m){
  const total = m.at.reduce((a,b)=>a+b[1],0);
  return m.at.map(([s,n])=>{
    const c = CPK[s]||[`var(--${byS(s).c})`]; const st = `--cpk:${c[0]};${c[1]?"--tx:#fff":""}`;
    if(total<=6) return Array.from({length:n},()=>`<span class="atom" style="${st}">${s}</span>`).join("");
    return `<span class="atom" style="${st}">${s}${n>1?`<b>×${n}</b>`:""}</span>`;
  }).join("");
}
function molCard(m){
  const bg = m.bg || `var(--${byS(m.at[0][0]).c})`;
  return `<div class="fun-card card molcard" style="--bgc:${bg}"><div class="top2"><h3>${m[L].t}${m.mix?` <small class="mixtag">${S.mix}</small>`:""}</h3><span class="em">${m.em}</span></div>
    <div class="mol">${atoms(m)}<span class="formula">${m.f}</span></div><p>${m[L].p}</p></div>`;
}
function famChips(){
  return CATS.map(c=>`<button class="chip cat-${c}" data-c="${c}"><i></i>${catShort(c)}</button>`).join("");
}
function confetti(){
  const c = document.createElement("div"); c.className="confetti";
  c.innerHTML = Array.from({length:24},()=>`<span style="left:${Math.random()*100}%;animation-delay:${Math.random()*.4}s">${["⭐","🎉","✨","🧪","🔬"][Math.floor(Math.random()*5)]}</span>`).join("");
  document.body.appendChild(c); setTimeout(()=>c.remove(),2200);
}

/* ---------- TABLA ---------- */
let sel = +(Q.get("n")||19), focus = null, query = "";
function matches(el){
  if(!query) return true;
  const q = norm(query);
  return String(el.n)===q || norm(el.s)===q || norm(el.es).includes(q) || norm(el.eu).includes(q);
}
function dimmed(el){ return (focus&&focus!==el.c) || !matches(el); }
function renderTabla(){
  const files = L==="es" ? ["tabla-periodica-infantil-es.png","secretos-de-los-elementos-es.png"] : ["taula-periodikoa-haurrentzat-eu.png","elementuen-sekretuak-eu.png"];
  $("#view").innerHTML = `
   <section class="fun-card" id="search"><div class="searchbar"><input id="q" type="search" placeholder="${S.ph}" aria-label="${S.ph}" autocomplete="off">
     <button class="btn d" id="all">${S.all} (118)</button></div>
     <div class="fams" id="fams">${famChips()}</div></section>
   <h2 class="sec">🌈 ${S.tableH}</h2><p class="lead">${S.tableLead}</p><p class="swipehint">${S.swipe}</p>
   <div class="fun-card"><div class="tbl-wrap"><div class="tbl"><div class="grid" id="grid"></div></div></div></div>
   <h2 class="sec">🖼️ ${S.dlH}</h2><p class="lead">${S.dlLead}</p>
   <div class="dl">${files.map((f,i)=>`<a class="fun-card" href="../descargas/${f}" download><img loading="lazy" src="../descargas/${f}" alt=""><span>⬇️ ${i?S.dlSec:S.dlTable} (PNG)</span></a>`).join("")}</div>`;
  drawGrid();
  if(Q.get("n")){ const c=$(`.cell[data-n="${sel}"]`); if(c) c.scrollIntoView({block:"center",inline:"center"}); }
  $("#q").oninput = e => { query = e.target.value.trim(); drawGrid(); };
  $("#q").onkeydown = e => { if(e.key==="Enter"){ const f=RAW.find(matches); if(f&&query){openModal(f.n);} } };
  $("#all").onclick = () => { query=""; focus=null; $("#q").value=""; syncChips(); drawGrid(); };
  $("#fams").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{focus = focus===b.dataset.c?null:b.dataset.c; syncChips(); drawGrid();});
}
function syncChips(){ document.querySelectorAll("#fams .chip").forEach(b=>{b.classList.toggle("on",b.dataset.c===focus);b.classList.toggle("off",!!focus&&b.dataset.c!==focus)}); }
function drawGrid(){
  const g = $("#grid"); let h = "";
  RAW.forEach(el=>{
    h += `<button class="cell cat-${el.c}${el.n===sel?" act":""}${dimmed(el)?" dim":""}" data-n="${el.n}" style="grid-row:${el.r};grid-column:${el.col}" aria-label="${el.n} ${el.s} ${esc(nm(el))}">
      <span class="n">${el.n}</span><span class="e">${el.e}</span><span class="s">${el.s}</span><span class="nm${nm(el).length>10?" l":""}">${esc(nm(el))}</span></button>`;
  });
  const ph = tt.ph;
  h += `<div class="ph cat-lan" style="grid-row:6;grid-column:3"><span>${ph[0]}</span><span>${ph[1]}</span></div><div class="ph cat-act" style="grid-row:7;grid-column:3"><span>${ph[2]}</span><span>${ph[3]}</span></div>`;
  h += `<div class="keybox"><div class="mini"><span class="n">19</span><span class="e">🍌</span><span class="s">K</span><span class="nm">${esc(nm(byS("K")))}</span></div>
    <div><h3>${u.keyTitle}</h3><ol>${u.keyItems.map((k,i)=>`<li><b>${i+1}</b>${k}</li>`).join("")}</ol></div></div>
    <div class="hello"><span class="big">🧑‍🔬</span><span>${S.hello}</span></div>`;
  g.innerHTML = h;
  g.querySelectorAll(".cell").forEach(b=>b.onclick=()=>openModal(+b.dataset.n));
}
function openModal(n){
  sel = n<1?118:n>118?1:n;
  drawGrid();
  const el = RAW[sel-1], fa = FACTS[sel-1], rich = RICH[el.s], m = $("#modal");
  const period = (el.n>=57&&el.n<=71)?6:(el.n>=89&&el.n<=103)?7:el.r;
  const group = (el.n>=57&&el.n<=71)||(el.n>=89&&el.n<=103) ? "—" : el.col;
  const uses = rich ? rich.u[L] : [];
  const pv = RAW[(sel===1?118:sel-1)-1], nx = RAW[(sel===118?1:sel+1)-1];
  m.innerHTML = `<div class="mbox cat-${el.c}">
    <button class="btn mx" id="mx" aria-label="close">✖</button>
    <div class="mbody"><div class="mleft"><div class="mnum">#${el.n}</div><div class="memo">${el.e}</div><div class="msym">${el.s}</div></div>
    <div class="mright"><span class="mfam">${tt.cats[el.c]}</span><h2>${esc(nm(el))}</h2><p class="mhint">${esc(el.h[L])}</p>
      <div class="mfacts"><span><small>${S.f.g}</small><b>${group}</b></span><span><small>${S.f.p}</small><b>${period}</b></span><span><small>${S.f.st}</small><b>${S.st[fa.st]}</b></span>${fa.m?`<span><small>${S.f.m}</small><b>${fa.m}</b></span>`:""}</div>
      ${uses.length?`<div class="muses">${uses.map(t=>{const i=t.indexOf(" ");return `<span><i>${t.slice(0,i)}</i>${esc(t.slice(i+1))}</span>`}).join("")}</div>`:""}
      ${rich?`<p class="mcur">💡 ${esc(rich.c[L])}</p>`:""}
    </div></div>
    <div class="mfoot"><button class="btn mnav" id="mp" aria-label="${pv.s}">◀ ${pv.s}</button><a class="btn y mmain" href="elemento.html?n=${el.n}">${S.more}</a><button class="btn mnav" id="mk" aria-label="${S.speak}">🔊</button><button class="btn mnav" id="mn" aria-label="${nx.s}">${nx.s} ▶</button></div></div>`;
  m.classList.add("open"); document.body.style.overflow="hidden";
  $("#mx").onclick = closeModal; $("#mp").onclick = ()=>openModal(sel-1); $("#mn").onclick = ()=>openModal(sel+1);
  m.onclick = e => { if(e.target===m) closeModal(); };
  speakBtn(el,"#mk");
}
function closeModal(){ const m=$("#modal"); if(m) m.classList.remove("open"); document.body.style.overflow=""; if("speechSynthesis" in window) speechSynthesis.cancel(); }
document.addEventListener("keydown",e=>{
  const m=$("#modal"); if(!m||!m.classList.contains("open")) return;
  if(e.key==="Escape") closeModal();
  if(e.key==="ArrowRight") openModal(sel+1);
  if(e.key==="ArrowLeft") openModal(sel-1);
});

/* ---------- APRENDE ---------- */
function atomFigure(){
  const orb = [0,60,120].map(a=>`<g transform="rotate(${a} 120 120)"><ellipse cx="120" cy="120" rx="100" ry="36" fill="none" stroke="#233142" stroke-width="3" stroke-dasharray="6 5"/><circle cx="220" cy="120" r="9" fill="#4aa8ff" stroke="#233142" stroke-width="3"/></g>`).join("");
  const nuc = [[110,112],[130,114],[120,130]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="13" fill="#ff5a5a" stroke="#233142" stroke-width="3"/>`).join("");
  return `<div class="atomfig"><svg viewBox="0 0 240 240" role="img" aria-label="atom">${orb}${nuc}</svg>
    <ul>${ln.atomLegend.map(([e,t,d])=>`<li><span>${e}</span><b>${t}</b>: ${d}</li>`).join("")}</ul></div>`;
}
function renderAprende(){
  const card = (o,c)=>`<div class="fun-card"><h2>${o.e} ${o.h}</h2>${o.p.map(p=>`<p>${p}</p>`).join("")}</div>`;
  $("#view").innerHTML = `
   <h2 class="sec">⚛️ ${ln.storyH}</h2>
   <div class="story">${ln.story.map((s,i)=>`<div class="fun-card step"><div class="stepn"><b>${i+1}</b><span>${s.e}</span></div><div><h3>${s.h}</h3><p>${s.p}</p>${s.atom?atomFigure():""}</div></div>`).join("")}</div>
   <div class="two" style="margin-top:16px">${card(ln.use)}</div>
   <h2 class="sec">🔎 ${tt.hLeer}</h2>
   <div class="fun-card readbox"><div class="ex"><span class="n">19</span><span class="e">🍌</span><span class="s">K</span><span class="nm">${esc(nm(byS("K")))}</span></div>
     <div><p class="lead">${tt.leadLeer}</p><ol class="steps">${tt.steps.map((s,i)=>`<li><b>${i+1}</b><span>${s}</span></li>`).join("")}</ol></div></div>
   <h2 class="sec">🧩 ${tt.hOrder}</h2>
   <div class="cards">${tt.order.map(o=>`<div class="fun-card card"><h3>${o.t}</h3><p>${o.p}</p></div>`).join("")}</div>
   <h2 class="sec">🎨 ${ln.famH}</h2>
   <div class="cards">${CATS.map(c=>`<div class="fun-card card fam-card cat-${c}"><h3>${catShort(c)}</h3><p>${ln.fam[c]}</p></div>`).join("")}</div>
   <h2 class="sec">📜 ${ln.histH}</h2>
   <div class="time">${ln.hist.map(h=>`<div class="it"><div class="fun-card"><span class="yr">${h.e} ${h.y}</span><h3>${h.t}</h3><p style="margin:0">${h.p}</p></div></div>`).join("")}</div>`;
}

/* ---------- SECRETOS ---------- */
function renderSecretos(){
  const bars = u.body.map(([s,name,p])=>`<div class="bar-row"><span>${byS(s).e} ${name}</span><div class="track"><div class="fill cat-${byS(s).c}" style="width:${Math.max(p*1.4,3)}%"></div></div><b>${p}%</b></div>`).join("");
  $("#view").innerHTML = `
   <h2 class="sec">⚗️ ${S.secH}</h2><p class="lead">${S.secLead}</p>
   <div class="cards">${MOLS.map(molCard).join("")}</div>
   <h2 class="sec">🧍 ${u.bodyH}</h2><p class="lead">${u.bodyP}</p><div class="fun-card bars">${bars}</div>
   <h2 class="sec">🤯 ${u.factsH}</h2><div class="cards">${u.facts.map(f=>`<div class="fun-card card"><h3><span class="em">${f.e}</span></h3><p>${f.t}</p></div>`).join("")}</div>`;
}

/* ---------- FICHAS ---------- */
function renderFichas(){
  const scenes = u.scenes.map(sc=>`<div class="fun-card card scene"><h3><span class="em">${sc.e}</span>${sc.t}</h3>${
    sc.els.map(s=>{const el=byS(s);return `<a class="it" href="elemento.html?n=${el.n}" style="text-decoration:none"><span class="em">${el.e}</span><span><b>${el.s} ${esc(nm(el))}</b><br>${esc(el.h[L])}</span></a>`}).join("")}</div>`).join("");
  $("#view").innerHTML = `
   <h2 class="sec">🌈 ${u.dayH}</h2><div class="cards">${scenes}</div>
   <h2 class="sec">📚 ${S.fichasH}</h2><p class="lead">${S.fichasLead}</p>
   <section class="fun-card"><div class="searchbar"><input id="q" type="search" placeholder="${S.ph}" aria-label="${S.ph}" autocomplete="off"><button class="btn d" id="all">${S.all} (118)</button></div>
   <div class="fams" id="fams">${famChips()}</div></section>
   <div class="fichas" id="fichas" style="margin-top:16px"></div>`;
  const draw = () => {
    $("#fichas").innerHTML = RAW.filter(el=>matches(el)&&(!focus||focus===el.c)).map(el=>`<a class="ficha cat-${el.c}" href="elemento.html?n=${el.n}"><span class="em">${el.e}</span><div><div class="hd">${el.n} ${el.s} · ${esc(nm(el))}</div><p>${esc(el.h[L])}</p></div></a>`).join("");
  };
  draw();
  $("#q").oninput = e => { query = e.target.value.trim(); draw(); };
  $("#all").onclick = () => { query=""; focus=null; $("#q").value=""; syncChips(); draw(); };
  $("#fams").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{focus = focus===b.dataset.c?null:b.dataset.c; syncChips(); draw();});
}

/* ---------- ELEMENTO ---------- */
function relatives(el){
  if(el.n>=57&&el.n<=71) return [RAW[el.n-2],RAW[el.n]].filter(x=>x&&x.n>=57&&x.n<=71);
  if(el.n>=89&&el.n<=103) return [RAW[el.n-2],RAW[el.n]].filter(x=>x&&x.n>=89&&x.n<=103);
  const out = [];
  const up = RAW.find(x=>x.col===el.col&&x.r===el.r-1&&x.r<=7);
  const dn = RAW.find(x=>x.col===el.col&&x.r===el.r+1&&x.r<=7);
  if(up) out.push(up); if(dn) out.push(dn);
  if(!out.length){ const nb=RAW.find(x=>x.r===el.r&&Math.abs(x.col-el.col)===1); if(nb) out.push(nb); }
  return out.slice(0,2);
}
function swipeNav(p,nx){
  let x0=null,y0=null;
  document.addEventListener("touchstart",e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
  document.addEventListener("touchend",e=>{ if(x0===null)return; const dx=e.changedTouches[0].clientX-x0, dy=e.changedTouches[0].clientY-y0; x0=null;
    if(Math.abs(dx)>80&&Math.abs(dx)>Math.abs(dy)*2) location.href="elemento.html?n="+(dx<0?nx:p); },{passive:true});
  document.addEventListener("keydown",e=>{ if(e.key==="ArrowRight") location.href="elemento.html?n="+nx; if(e.key==="ArrowLeft") location.href="elemento.html?n="+p; });
}
function renderElemento(){
  let n = +Q.get("n"); if(Q.get("s")){const e=byS(Q.get("s")); if(e) n=e.n}
  if(!(n>=1&&n<=118)) n = 1;
  const el = RAW[n-1], fa = FACTS[n-1], rich = RICH[el.s];
  document.title = `${nm(el)} (${el.s}) · ${S.brand}`;
  const period = el.n>=57&&el.n<=71 ? 6 : el.n>=89&&el.n<=103 ? 7 : el.r;
  const group = (el.n>=57&&el.n<=71)||(el.n>=89&&el.n<=103) ? "—" : el.col;
  const disc = fa.y==="a" ? S.anti : `${fa.y}${fa.w ? ` · ${who(fa.w)}`:""}`;
  const uses = rich ? rich.u[L] : [`${el.e} ${el.h[L]}`];
  const hasEl = k => ALLMOLS.filter(m=>m.at.some(a=>a[0]===k));
  const mols = hasEl(el.s);
  let kin = [], kinMols = [];
  if(COUSIN[el.s]){ kin=[byS(COUSIN[el.s])]; }
  else if(mols.length<2){ kin = relatives(el); }
  const addKin = k => hasEl(k.s).forEach(m=>{ if(!mols.includes(m)&&!kinMols.includes(m)&&kinMols.length<2) kinMols.push(m); });
  kin.forEach(addKin);
  if(mols.length+kinMols.length<2) kin.forEach(k=>relatives(k).forEach(addKin));
  const pv = RAW[(n===1?118:n-1)-1], nx = RAW[(n===118?1:n+1)-1];
  const mini = RAW.map(x=>`<a class="cat-${x.c}${x.n===el.n?" me":""}" href="elemento.html?n=${x.n}" style="grid-row:${x.r>8?x.r-1:x.r};grid-column:${x.col}" title="${esc(nm(x))}" aria-label="${esc(nm(x))}">${x.s}</a>`).join("");
  const stateTxt = S.st[fa.st];
  $("#view").innerHTML = `
   <div class="fun-card hero cat-${el.c}" style="margin-top:14px"><div><div class="emo">${el.e}</div></div>
     <div><span class="num">#${el.n}</span><div class="sym">${el.s}</div><h1>${esc(nm(el))}</h1><p class="hint">${esc(el.h[L])}</p>
       <div class="acts" style="display:flex;gap:10px;flex-wrap:wrap"><span class="chip cat-${el.c}" style="cursor:default">${tt.cats[el.c]}</span><button class="btn" id="sk">${S.speak}</button></div></div></div>
   <h2 class="sec">🧾 ${L==="es"?"Ficha del elemento":"Elementuaren fitxa"}</h2>
   <div class="facts">
     <div class="fact"><small>${S.f.z}</small><b>${el.n}</b><div style="font-size:.85rem">${S.zHelp}</div></div>
     <div class="fact"><small>${S.f.ze}</small><b>${el.n}</b></div>
     <div class="fact"><small>${S.f.g}</small><b>${group}</b></div>
     <div class="fact"><small>${S.f.p}</small><b>${period}</b></div>
     ${fa.m?`<div class="fact"><small>${S.f.m}</small><b>${fa.m}</b></div>`:""}
     <div class="fact"><small>${S.f.st}</small><b>${stateTxt}</b></div>
     <div class="fact" style="grid-column:span 2"><small>${S.f.d}</small><b>${disc}</b></div>
   </div>
   <h2 class="sec">🌍 ${S.usesH}</h2>
   <div class="uses">${uses.map(t=>{const i=t.indexOf(" ");return `<div class="use"><span class="em">${t.slice(0,i)}</span><span>${esc(t.slice(i+1))}</span></div>`}).join("")}</div>
   ${rich?`<h2 class="sec">💡 ${S.curioH}</h2><div class="fun-card curio"><span class="em">🤓</span><span>${esc(rich.c[L])}</span></div>`:""}
   <h2 class="sec">🎨 ${S.famH}</h2><div class="fun-card cat-${el.c}" style="background:var(--c)"><b class="fun">${catShort(el.c)}</b><p style="margin:4px 0 0">${ln.fam[el.c]}</p></div>
   <h2 class="sec">🧩 ${S.placeH}</h2><div class="fun-card"><div class="minipt">${mini}</div><p style="margin:10px 0 0">${S.colHelp}</p></div>
   <h2 class="sec">⚗️ ${S.molH}</h2>
   ${mols.length?`<div class="cards">${mols.map(molCard).join("")}</div>`:""}
   ${kinMols.length?`<p class="lead" style="margin-top:14px">${COUSIN[el.s]?S.cousin(nm(el),nm(kin[0])):S.kin(kin.map(nm).join(" / "))}</p><div class="cards">${kinMols.map(molCard).join("")}</div>`:""}
   <nav class="stickynav" aria-label="nav"><a class="btn" href="tabla.html?n=${el.n}">🏠 ${S.tabs.tabla.replace(/^\S+\s/,"")}</a><a class="btn y" href="elemento.html?n=${pv.n}" rel="prev">◀ ${pv.e} ${pv.s}</a><a class="btn y" href="elemento.html?n=${nx.n}" rel="next">${nx.s} ${nx.e} ▶</a></nav>`;
  document.body.classList.add("has-sticky");
  swipeNav(pv.n,nx.n);
  speakBtn(el,"#sk");
}

/* ---------- QUIZ ---------- */
function renderQuiz(){ renderQuizPage({L,S,RAW,byS,nm,esc,$,confetti,RICH,ALLMOLS,MOLS,FACTS,CATS,u}); }

shell();
({tabla:renderTabla,aprende:renderAprende,secretos:renderSecretos,fichas:renderFichas,elemento:renderElemento,quiz:renderQuiz})[PAGE]();
if(PAGE==="tabla"||PAGE==="aprende"||PAGE==="secretos"||PAGE==="fichas"||PAGE==="quiz") document.title = `${S.tabs[PAGE].replace(/^\S+\s/,"")} · ${S.brand}`;
})();
