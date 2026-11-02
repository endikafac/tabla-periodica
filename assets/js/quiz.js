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

/* Elements a 7-8 year old can reasonably know or reason about. */
const QKIDS = ["H","He","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","K","Ca","Fe","Cu","Zn","Ag","Sn","I","Au","Hg","Pb","Li","Ti","U","Pt","Ar"];
const QFAMOK = ["He","Ne","Ar","Li","Na","K","Fe","Cu","Au","Ag","Cl","F","I","C","O","N","S","Al","Pb","Sn"];
const QEASYMOL = ["H₂O","NaCl","CO₂","O₂","CH₄","SiO₂","Fe₂O₃","CaCO₃"];
const QX = {
es:{pick:"¿Cuántas preguntas quieres?",go:"¡Vamos!",qn:"Pregunta",of:"de",endH:"¡Se acabó!",again:"Jugar otra vez",change:"Cambiar número de preguntas",
 r3:"¡Eres un genio de los elementos!",r2:"¡Muy bien! Sigue practicando y serás un genio.",r1:"¡Buen intento! Mira las fichas y vuelve a probar.",right:"aciertos",questions:"preguntas",listen:"🔊 Escuchar",
 sub:"Preguntas para todos: fáciles y divertidas"},
eu:{pick:"Zenbat galdera nahi dituzu?",go:"Goazen!",qn:"Galdera",of:"/",endH:"Amaitu da!",again:"Berriro jolastu",change:"Galdera kopurua aldatu",
 r3:"Elementuen jenioa zara!",r2:"Oso ondo! Segi praktikatzen eta jenioa izango zara.",r1:"Saiakera ona! Begiratu fitxei eta saiatu berriro.",right:"asmatu",questions:"galdera",listen:"🔊 Entzun",
 sub:"Galderak denentzat: errazak eta dibertigarriak"}
};

function renderQuizPage(ctx){
  const {L,S,RAW,byS,nm,esc,$,confetti,RICH,ALLMOLS,MOLS,FACTS,CATS,u} = ctx;
  const q = QTXT[L], x = QX[L];
  const shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]} return a; };
  const pick = (arr,n,not) => shuffle(arr.filter(v=>v!==not)).slice(0,n);
  const cap = s => s.charAt(0).toUpperCase()+s.slice(1);
  const kids = QKIDS.map(byS);
  const blank = (txt,el) => {
    const name = nm(el), stem = name.length>4 ? name.slice(0,-1) : name;
    return txt.replace(new RegExp("(?<![\\p{L}])"+stem.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"[\\p{L}]*","giu"),"___");
  };
  const mk = (id,type,build) => ({id,type,build});
  const bank = [];

  kids.forEach(el=>{
    bank.push(mk("s2:"+el.s,"sym2",()=>{const o=[el,...pick(kids,2,el)];return {big:el.s,q:q.sym2.replace("{s}",el.s),opts:o.map(v=>({l:cap(nm(v)),c:v===el,cat:v.c})),el};}));
    bank.push(mk("n2:"+el.s,"name2",()=>{const o=[el,...pick(kids,2,el)];return {big:el.e,q:q.name2.replace("{n}",nm(el)),opts:o.map(v=>({l:v.s,c:v===el,cat:v.c})),el};}));
    const st = FACTS[el.n-1].st;
    if(q.st[st]) bank.push(mk("st:"+el.s,"state",()=>({big:el.e,q:q.state.replace("{N}",cap(nm(el))),opts:["s","l","g"].map(k=>({l:q.st[k],c:k===st})),el})));
    if(el.n<=20) bank.push(mk("nm:"+el.s,"num2",()=>{const o=[el,...pick(kids,2,el)];return {big:"#"+el.n,q:q.num2.replace("{n}",el.n),opts:o.map(v=>({l:cap(nm(v)),c:v===el,cat:v.c})),el};}));
    if(RAW[el.n-1] && el.n<=92) bank.push(mk("h:"+el.s,"hint",()=>{const o=[el,...pick(kids,2,el)];return {big:el.e,q:q.hint,hint:blank(el.h[L],el),opts:o.map(v=>({l:cap(nm(v)),c:v===el,cat:v.c})),el};}));
  });
  QFAMOK.map(byS).forEach(el=>{
    bank.push(mk("fm:"+el.s,"fam",()=>{const o=[el.c,...pick(CATS,2,el.c)];return {big:el.e,q:q.fam.replace("{n}",nm(el)),opts:o.map(c=>({l:u.short[c],c:c===el.c,cat:c})),el};}));
  });
  QKIDS.forEach(s=>{
    const el = byS(s), r = RICH[s]; if(!r) return;
    r.u[L].forEach((t,i)=>{
      /* skip clues that fit several elements (batteries, tin cans, medals, fertilizers...) */
      if(["Sn0","Ag0","Li1","Pb2","Li2","Na1","N1","P2","K2"].includes(s+i)) return;
      const k = t.indexOf(" ");
      bank.push(mk("u:"+s+i,"use",()=>{const o=[el,...pick(kids,2,el)];return {big:t.slice(0,k),q:q.use,hint:blank(t.slice(k+1),el),opts:o.map(v=>({l:cap(nm(v)),c:v===el,cat:v.c})),el};}));
    });
  });
  const easy = MOLS.filter(m=>QEASYMOL.includes(m.f));
  easy.filter(m=>new Set(m.at.map(a=>a[0])).size>=2).forEach((m,i)=>{
    const syms = [...new Set(m.at.map(a=>a[0]))], key = syms.slice().sort().join();
    bank.push(mk("m:"+m.f,"mol",()=>{
      const mkSet = ss => ss.map(s=>nm(byS(s))).join(q.and);
      const wrong = []; let guard = 0;
      while(wrong.length<2&&guard++<60){ const w = shuffle(kids).slice(0,syms.length).map(v=>v.s); const k2 = w.slice().sort().join(); if(k2!==key && !wrong.some(v=>v.slice().sort().join()===k2)) wrong.push(w); }
      const o = [syms,...wrong];
      return {big:m.em,q:q.mol.replace("{t}",m[L].t).replace("{f}",m.f),opts:o.map(ss=>({l:mkSet(ss),c:ss===syms})),el:byS(syms[0])};
    }));
  });
  easy.forEach(m=>{
    bank.push(mk("f:"+m.f,"form",()=>{const o=[m,...pick(easy,2,m)];return {big:m.f,q:q.form.replace("{f}",m.f),opts:o.map(v=>({l:v[L].t,c:v===m})),el:byS(m.at[0][0])};}));
  });
  QGEN[L].forEach((g,i)=>bank.push(mk("g:"+i,"gen",()=>({big:"🤔",q:g[0],opts:[g[1],g[2],g[3]].map((l,j)=>({l,c:j===0})),el:null}))));
  QTF[L].forEach((g,i)=>bank.push(mk("t:"+i,"tf",()=>({big:"✅❌",q:q.tf,hint:g[0],opts:[{l:q.t,c:!!g[1]},{l:q.f,c:!g[1]}],el:null,noshuffle:true}))));

  /* deck without repeats, remembered between visits */
  const KEY = "tp-quiz2-"+L;
  let seen = new Set(); try{ seen = new Set(JSON.parse(localStorage.getItem(KEY)||"[]")); }catch(e){}
  const save = () => { try{localStorage.setItem(KEY,JSON.stringify([...seen]))}catch(e){} };
  let deck = [], lastType = null;
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

  $("#view").innerHTML = `<h2 class="sec">🎮 ${u.quizH}</h2><p class="lead">${x.sub}</p><div class="fun-card quiz" id="quiz"></div>`;
  const box = $("#quiz");

  function start(){
    box.innerHTML = `<div class="bigem">🧪</div><div class="q">${x.pick}</div>
      <div class="opts lens">${[10,25,50].map(n=>`<button class="opt len" data-n="${n}"><span class="sy">${n}</span><small>${x.questions}</small></button>`).join("")}</div>`;
    box.querySelectorAll(".len").forEach(b=>b.onclick=()=>play(+b.dataset.n));
  }
  function play(total){
    let asked = 0, score = 0, streak = 0;
    function next(){
      if(asked>=total) return end();
      asked++;
      const b = draw(), d = b.build();
      seen.add(b.id); save();
      const opts = d.noshuffle ? d.opts : shuffle(d.opts);
      let wrongs = 0;
      box.innerHTML = `<div class="progress"><div style="width:${Math.round((asked-1)/total*100)}%"></div></div>
        <div class="qstat"><span>${x.qn} ${asked} ${x.of} ${total}</span><span>⭐ ${score}</span><span>🔥 ${streak}</span></div>
        <div class="bigem">${d.big}</div><div class="q">${esc(d.q)}</div>${d.hint?`<div class="hintq">${esc(d.hint)}</div>`:""}
        <div class="opts">${opts.map((o,i)=>`<button class="opt${o.cat?" cat-"+o.cat:""}" data-i="${i}">${esc(o.l)}</button>`).join("")}</div>
        <div class="feedback" id="fb"></div><button class="btn hidden" id="say">${x.listen}</button>`;
      const say = $("#say");
      if("speechSynthesis" in window){
        const v = speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith(L));
        if(v){ say.classList.remove("hidden"); say.onclick=()=>{speechSynthesis.cancel();const m=new SpeechSynthesisUtterance((d.q+" "+(d.hint||"")+" "+opts.map(o=>o.l).join(", ")).replace(/___/g,"..."));m.voice=v;m.lang=v.lang;speechSynthesis.speak(m);}; }
      }
      const btns = [...box.querySelectorAll(".opt")];
      const finish = ok => {
        btns.forEach((v,i)=>{v.disabled=true; if(opts[i].c) v.classList.add("ok");});
        const right = opts.find(o=>o.c).l;
        const last = asked>=total;
        $("#fb").innerHTML = `${ok?q.ok[Math.floor(Math.random()*q.ok.length)]:`${q.answer} <b>${esc(right)}</b>`}<div class="fbtns"><button class="btn y" id="nx">${last?x.endH:q.next}</button>${d.el?`<a class="btn" href="elemento.html?n=${d.el.n}">${q.sheet} ${d.el.e}</a>`:""}</div>`;
        $("#nx").onclick = next; $("#nx").focus({preventScroll:true});
      };
      btns.forEach((v,i)=>v.onclick=()=>{
        if(opts[i].c){ if(wrongs===0){score++;streak++;} v.classList.add("ok"); confetti(); finish(true); }
        else { streak=0; wrongs++; v.classList.add("no"); v.disabled=true; if(wrongs>=2){ finish(false); } else $("#fb").textContent=q.no; }
      });
    }
    function end(){
      const pct = score/total;
      const msg = pct>=.9?x.r3:pct>=.6?x.r2:x.r1;
      if(pct>=.6) confetti();
      box.innerHTML = `<div class="bigem">${pct>=.9?"🏆":pct>=.6?"🌟":"💪"}</div><div class="q">${x.endH}</div>
        <div class="score" style="font-size:2rem">⭐ ${score} ${x.of} ${total} ${x.right}</div><div class="hintq">${msg}</div>
        <div class="fbtns"><button class="btn y" id="again">${x.again} (${total})</button><button class="btn" id="chg">${x.change}</button></div>`;
      $("#again").onclick = ()=>play(total); $("#chg").onclick = start;
    }
    next();
  }
  start();
}
