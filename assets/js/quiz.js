/* Quiz engine: ~500 questions built from the element data (+ general and true/false), shuffled deck, no repeats until all are seen. */
const QTXT = {
es:{sym2:"¿Cómo se llama el elemento con el símbolo {s}?",name2:"¿Cuál es el símbolo de {n}?",num2:"¿Qué elemento es el número {n}?",hint:"¿De qué elemento hablamos?",use:"¿Qué elemento es este?",
 fam:"¿A qué familia pertenece {n}?",state:"{N}: ¿sólido, líquido o gas?",mol:"¿Qué elementos forman «{t}» ({f})?",form:"¿Qué es {f}?",tf:"Verdadero o falso",t:"Verdadero",f:"Falso",
 st:{s:"Sólido",l:"Líquido",g:"Gas"},score:"Aciertos",streak:"Racha",seen:"Preguntas vistas",of:"de",ok:["¡Muy bien!","¡Genial!","¡Eso es!","¡Lo sabes todo!","¡Fantástico!"],no:"Casi. ¡Prueba otra vez!",
 answer:"La respuesta es",next:"Otra pregunta ▶",sheet:"Ver ficha",reset:"Empezar de nuevo",done:"¡Has visto todas las preguntas! Empezamos otra vuelta.",and:" + "},
eu:{sym2:"Zer du izena {s} ikurra duen elementuak?",name2:"Zein da {n}ren ikurra?",num2:"Zein elementu da {n}. zenbakia?",hint:"Zein elementuri buruz ari gara?",use:"Zein elementu da hau?",
 fam:"Zein familiakoa da {n}?",state:"{N}: solidoa, likidoa edo gasa?",mol:"Zein elementuk osatzen dute «{t}» ({f})?",form:"Zer da {f}?",tf:"Egia ala gezurra",t:"Egia",f:"Gezurra",
 st:{s:"Solidoa",l:"Likidoa",g:"Gasa"},score:"Asmatuak",streak:"Segida",seen:"Ikusitako galderak",of:"/",ok:["Oso ondo!","Bikain!","Hori da!","Dena dakizu!","Zoragarria!"],no:"Ia-ia. Saiatu berriro!",
 answer:"Erantzuna hau da:",next:"Beste galdera bat ▶",sheet:"Ikusi fitxa",reset:"Hasi berriro",done:"Galdera guztiak ikusi dituzu! Beste itzuli bat hasten dugu.",and:" + "}
};
/* [question, correct, wrong1, wrong2] */
const QGEN = {
es:[["¿Cuántos elementos tiene la tabla periódica?","118","18","1180"],["¿Quién ordenó la tabla periódica?","Dmitri Mendeléyev","Albert Einstein","Leonardo da Vinci"],["¿Qué elemento respiramos para vivir?","Oxígeno","Hierro","Oro"],["¿Qué elemento es el más ligero de todos?","Hidrógeno","Plomo","Oro"],["¿Cuál es el único metal líquido a temperatura ambiente?","Mercurio","Hierro","Plata"],["¿Qué gas llena los globos que vuelan?","Helio","Oxígeno","Cloro"],["¿Qué dos elementos forman el agua?","Hidrógeno y oxígeno","Carbono y calcio","Sodio y cloro"],["¿De qué elemento es la mina del lápiz?","Carbono","Plomo","Oro"],["¿Qué elemento hay en los plátanos?","Potasio","Plata","Plutonio"],["¿Qué elemento hace fuertes los huesos y los dientes?","Calcio","Cobre","Cloro"],["¿Cuál es el símbolo del oro?","Au","Ag","Or"],["¿Qué científica ganó dos premios Nobel y descubrió el polonio y el radio?","Marie Curie","Ada Lovelace","Rosalind Franklin"],["¿Qué elemento descubrieron los hermanos Elhuyar en Bergara?","Wolframio","Oro","Helio"],["¿Cómo se ordenan los elementos en la tabla?","Por su número atómico","Por su color","Por orden alfabético"],["¿Qué elemento hay en la sal de cocina junto al cloro?","Sodio","Hierro","Helio"]],
eu:[["Zenbat elementu ditu taula periodikoak?","118","18","1180"],["Nork ordenatu zuen taula periodikoa?","Dmitri Mendeleiev","Albert Einstein","Leonardo da Vinci"],["Zein elementu arnasten dugu bizitzeko?","Oxigenoa","Burdina","Urrea"],["Zein da elementurik arinena?","Hidrogenoa","Beruna","Urrea"],["Zein da giro-tenperaturan likidoa den metal bakarra?","Merkurioa","Burdina","Zilarra"],["Zein gasek betetzen ditu hegan egiten duten globoak?","Helioak","Oxigenoak","Kloroak"],["Zein bi elementuk osatzen dute ura?","Hidrogenoa eta oxigenoa","Karbonoa eta kaltzioa","Sodioa eta kloroa"],["Zein elementu da arkatzaren mina?","Karbonoa","Beruna","Urrea"],["Zein elementu dago platanoetan?","Potasioa","Zilarra","Plutonioa"],["Zein elementuk egiten ditu hezurrak eta hortzak indartsuak?","Kaltzioak","Kobreak","Kloroak"],["Zein da urrearen ikurra?","Au","Ag","Or"],["Zein zientzialarik irabazi zituen bi Nobel sari eta aurkitu zituen polonioa eta radioa?","Marie Curie","Ada Lovelace","Rosalind Franklin"],["Zein elementu aurkitu zuten Elhuyar anaiek Bergaran?","Wolframa","Urrea","Helioa"],["Nola daude ordenatuta elementuak taulan?","Zenbaki atomikoaren arabera","Kolorearen arabera","Ordena alfabetikoan"],["Zein elementu dago sukaldeko gatzean kloroarekin batera?","Sodioa","Burdina","Helioa"]]
};
/* [statement, true?] */
const QTF = {
es:[["El oro es un metal líquido.",0],["El agua está hecha de hidrógeno y oxígeno.",1],["El helio pesa más que el aire.",0],["Casi todo el aire que respiramos es nitrógeno.",1],["Todos los elementos se encuentran en la naturaleza.",0],["El diamante y la mina del lápiz están hechos del mismo elemento.",1],["El hierro está en tu sangre.",1],["La sal de cocina tiene sodio y cloro.",1],["El mercurio es un metal sólido.",0],["Los elementos de una misma columna se parecen, como hermanos.",1],["El plomo es el metal más ligero.",0],["Los fuegos artificiales rojos llevan estroncio.",1],["El oxígeno es un gas.",1],["La tabla periódica tiene 18 elementos.",0],["El potasio está en los plátanos.",1]],
eu:[["Urrea metal likidoa da.",0],["Ura hidrogenoz eta oxigenoz egina dago.",1],["Helioak airea baino gehiago pisatzen du.",0],["Arnasten dugun airearen gehiena nitrogenoa da.",1],["Elementu guztiak naturan aurkitzen dira.",0],["Diamantea eta arkatzaren mina elementu berekoak dira.",1],["Burdina zure odolean dago.",1],["Sukaldeko gatzak sodioa eta kloroa ditu.",1],["Merkurioa metal solidoa da.",0],["Zutabe bereko elementuak antzekoak dira, senideak bezala.",1],["Beruna metalik arinena da.",0],["Suzko artifizial gorriek estrontzioa dute.",1],["Oxigenoa gasa da.",1],["Taula periodikoak 18 elementu ditu.",0],["Potasioa platanoetan dago.",1]]
};
const QCOMMON = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Ti","Cr","Mn","Fe","Co","Ni","Cu","Zn","Br","Kr","Ag","Sn","I","Xe","Au","Hg","Pb","U","Pt","W","Ba","Cd","Se","Ra"];

function renderQuizPage(ctx){
  const {L,S,RAW,byS,nm,esc,$,confetti,RICH,ALLMOLS,MOLS,FACTS,CATS,u} = ctx;
  const q = QTXT[L];
  const shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]} return a; };
  const pick = (arr,n,not) => shuffle(arr.filter(x=>x!==not)).slice(0,n);
  const cap = s => s.charAt(0).toUpperCase()+s.slice(1);
  const common = QCOMMON.map(byS);
  const blank = (txt,el) => {
    const name = nm(el), stem = name.length>4 ? name.slice(0,-1) : name;
    return txt.replace(new RegExp("(?<![\\p{L}])"+stem.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"[\\p{L}]*","giu"),"___");
  };
  const mk = (id,type,build) => ({id,type,build});
  const bank = [];

  common.forEach(el=>{
    bank.push(mk("s2:"+el.s,"sym2",()=>{const o=[el,...pick(common,2,el)];return {big:el.s,q:q.sym2.replace("{s}",el.s),opts:o.map(x=>({l:cap(nm(x)),c:x===el,cat:x.c})),el};}));
    bank.push(mk("n2:"+el.s,"name2",()=>{const o=[el,...pick(common,2,el)];return {big:el.e,q:q.name2.replace("{n}",nm(el)),opts:o.map(x=>({l:x.s,c:x===el,cat:x.c})),el};}));
    bank.push(mk("fm:"+el.s,"fam",()=>{const o=[el.c,...pick(CATS,2,el.c)];return {big:el.e,q:q.fam.replace("{n}",nm(el)),opts:o.map(c=>({l:u.short[c],c:c===el.c,cat:c})),el};}));
    const st = FACTS[el.n-1].st;
    if(q.st[st]) bank.push(mk("st:"+el.s,"state",()=>({big:el.e,q:q.state.replace("{N}",cap(nm(el))),opts:["s","l","g"].map(k=>({l:q.st[k],c:k===st})),el})));
    if(el.n<=36) bank.push(mk("nm:"+el.s,"num2",()=>{const o=[el,...pick(common,2,el)];return {big:"#"+el.n,q:q.num2.replace("{n}",el.n),opts:o.map(x=>({l:cap(nm(x)),c:x===el,cat:x.c})),el};}));
  });
  RAW.filter(e=>e.n<=92).forEach(el=>{
    bank.push(mk("h:"+el.s,"hint",()=>{const o=[el,...pick(common,2,el)];return {big:el.e,q:q.hint,hint:blank(el.h[L],el),opts:o.map(x=>({l:cap(nm(x)),c:x===el,cat:x.c})),el};}));
  });
  Object.keys(RICH).forEach(s=>{
    const el = byS(s); if(!el) return;
    RICH[s].u[L].forEach((t,i)=>{
      const k = t.indexOf(" ");
      bank.push(mk("u:"+s+i,"use",()=>{const o=[el,...pick(common,2,el)];return {big:t.slice(0,k),q:q.use,hint:blank(t.slice(k+1),el),opts:o.map(x=>({l:cap(nm(x)),c:x===el,cat:x.c})),el};}));
    });
  });
  const molsOK = ALLMOLS.filter(m=>!m.mix&&new Set(m.at.map(a=>a[0])).size>=2&&new Set(m.at.map(a=>a[0])).size<=3);
  molsOK.forEach((m,i)=>{
    const syms = [...new Set(m.at.map(a=>a[0]))], key = syms.slice().sort().join();
    bank.push(mk("m:"+i,"mol",()=>{
      const mkSet = ss => ss.map(s=>nm(byS(s))).join(q.and);
      const wrong = []; let guard = 0;
      while(wrong.length<2&&guard++<60){ const w = shuffle(common).slice(0,syms.length).map(x=>x.s); if(w.slice().sort().join()!==key && !wrong.some(x=>x.slice().sort().join()===w.slice().sort().join())) wrong.push(w); }
      const o = [syms,...wrong];
      return {big:m.em,q:q.mol.replace("{t}",m[L].t).replace("{f}",m.f),opts:o.map(ss=>({l:mkSet(ss),c:ss===syms})),el:byS(syms[0])};
    }));
  });
  MOLS.forEach((m,i)=>{
    bank.push(mk("f:"+i,"form",()=>{const o=[m,...pick(MOLS,2,m)];return {big:m.f,q:q.form.replace("{f}",m.f),opts:o.map(x=>({l:x[L].t,c:x===m})),el:byS(m.at[0][0])};}));
  });
  QGEN[L].forEach((g,i)=>bank.push(mk("g:"+i,"gen",()=>({big:"🤔",q:g[0],opts:[g[1],g[2],g[3]].map((l,j)=>({l,c:j===0})),el:null}))));
  QTF[L].forEach((g,i)=>bank.push(mk("t:"+i,"tf",()=>({big:"✅❌",q:q.tf,hint:g[0],opts:[{l:q.t,c:!!g[1]},{l:q.f,c:!g[1]}],el:null,noshuffle:true}))));

  /* deck without repeats, persisted */
  const KEY = "tp-quiz-"+L;
  let seen = new Set(); try{ seen = new Set(JSON.parse(localStorage.getItem(KEY)||"[]")); }catch(e){}
  const save = () => { try{localStorage.setItem(KEY,JSON.stringify([...seen]))}catch(e){} };
  let deck = [], lastType = null, score = 0, streak = 0;
  const refill = () => {
    let left = bank.filter(b=>!seen.has(b.id));
    if(!left.length){ seen.clear(); save(); left = bank.slice(); }
    deck = shuffle(left);
  };
  const draw = () => {
    if(!deck.length) refill();
    let i = deck.findIndex(b=>b.type!==lastType); if(i<0) i=0;
    const b = deck.splice(i,1)[0]; lastType = b.type; return b;
  };

  $("#view").innerHTML = `<h2 class="sec">🎮 ${u.quizH}</h2><p class="lead">${S.quizLead}</p><div class="fun-card quiz" id="quiz"></div>`;
  const box = $("#quiz");
  function next(){
    const b = draw(), d = b.build();
    seen.add(b.id); save();
    const opts = d.noshuffle ? d.opts : shuffle(d.opts);
    let wrongs = 0;
    box.innerHTML = `<div class="qstat"><span>⭐ ${q.score}: ${score}</span><span>🔥 ${q.streak}: ${streak}</span><span>📚 ${q.seen}: ${seen.size} ${q.of} ${bank.length}</span></div>
      <div class="bigem">${d.big}</div><div class="q">${esc(d.q)}</div>${d.hint?`<div class="hintq">${esc(d.hint)}</div>`:""}
      <div class="opts">${opts.map((o,i)=>`<button class="opt${o.cat?" cat-"+o.cat:""}" data-i="${i}">${esc(o.l)}</button>`).join("")}</div><div class="feedback" id="fb"></div>`;
    const btns = [...box.querySelectorAll(".opt")];
    const finish = ok => {
      btns.forEach((x,i)=>{x.disabled=true; if(opts[i].c) x.classList.add("ok");});
      const right = opts.find(o=>o.c).l;
      $("#fb").innerHTML = `${ok?q.ok[Math.floor(Math.random()*q.ok.length)]:`${q.answer} <b>${esc(right)}</b>`}<div class="fbtns"><button class="btn y" id="nx">${q.next}</button>${d.el?`<a class="btn" href="elemento.html?n=${d.el.n}">${q.sheet} ${d.el.e}</a>`:""}</div>`;
      $("#nx").onclick = next; $("#nx").focus({preventScroll:true});
    };
    btns.forEach((x,i)=>x.onclick=()=>{
      if(opts[i].c){ score++; streak++; x.classList.add("ok"); confetti(); finish(true); }
      else { streak=0; wrongs++; x.classList.add("no"); x.disabled=true; if(wrongs>=2){ finish(false); } else $("#fb").textContent=q.no; }
    });
  }
  next();
}
