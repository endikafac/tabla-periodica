/* Table-focused questions: structure, families, symbols (Latin), order, drawings. */
const LATIN = {Au:"aurum",Ag:"argentum",Fe:"ferrum",Na:"natrium",K:"kalium",Pb:"plumbum",Cu:"cuprum",Hg:"hydrargyrum",Sn:"stannum"};
const QX2 = {
es:{next:"¿Qué elemento viene justo después de {n}?",prev:"¿Qué elemento viene justo antes de {n}?",fam:"¿Cuál de estos elementos está en la familia «{f}»?",
 lat:"El símbolo {s} viene del latín. ¿De qué palabra?",emo:"¿Qué dibujo tiene {n} en nuestra tabla?",cmp:"¿Cuál tiene el número más grande en la tabla?",
 after:"va justo después de",latx:(n,l)=>`${n} se escribe así porque en latín se decía «${l}».`,cmpx:(a,b)=>`${a.name} es el número ${a.n} y ${b.name} es el ${b.n}.`,
 ordx:(a,b)=>`${a.name} es el número ${a.n} y viene justo después de ${b.name}, el ${b.n}.`,ordp:(a,b)=>`${a.name} es el número ${a.n} y viene justo antes de ${b.name}, el ${b.n}.`},
eu:{next:"Zein elementu dator {n}ren ondoren?",prev:"Zein elementu dator {n}ren aurretik?",fam:"Zein elementu dago «{f}» familian?",
 lat:"{s} ikurra latinetik dator. Zein hitzetik?",emo:"Zein marrazki du {n}k gure taulan?",cmp:"Zeinek du zenbaki handiagoa taulan?",
 after:"hurrena da",latx:(n,l)=>`${n} horrela idazten da latinez «${l}» zelako.`,cmpx:(a,b)=>`${a.name} ${a.n}. zenbakia da eta ${b.name} ${b.n}. zenbakia.`,
 ordx:(a,b)=>`${a.name} ${a.n}. zenbakia da eta ${b.name}ren (${b.n}) ondoren dator.`,ordp:(a,b)=>`${a.name} ${a.n}. zenbakia da eta ${b.name}ren (${b.n}) aurretik dator.`}
};
const QGEN3 = {
es:[
["¿Cuántas columnas tiene la tabla periódica?","18","7","118","Las columnas se llaman grupos y hay 18."],
["¿Cuántas filas tiene la tabla periódica?","7","18","10","Las filas se llaman periodos y hay 7."],
["¿Cómo se llaman las columnas de la tabla?","Grupos","Periodos","Capas","Los grupos son las columnas y los periodos son las filas."],
["¿Cómo se llaman las filas de la tabla?","Periodos","Grupos","Capas","Los periodos son las filas y los grupos son las columnas."],
["¿Qué elemento ocupa la primera casilla de la tabla?","Hidrógeno","Helio","Oxígeno","El hidrógeno es el número 1."],
["¿Qué elemento está en la esquina de arriba a la derecha?","Helio","Hidrógeno","Neón","El helio es el número 2 y está en la última columna."],
["¿Qué hay en cada casilla de la tabla?","Número, símbolo y nombre","Solo un dibujo","Una fotografía","Cada casilla es como el carné de un elemento."],
["¿Qué nos dice el número de una casilla?","Cuántos protones tiene","Cuántos kilos pesa","De qué color es","Es la cantidad de protones que hay en el centro del átomo."],
["¿Qué es el símbolo de un elemento?","Su apodo de una o dos letras","Su peso","Su color","Por ejemplo, Fe es el símbolo del hierro."],
["¿Qué familia está en la última columna de la tabla?","Gases nobles","Metales activos","Hacen sales","Los gases nobles son muy tranquilos y casi no se juntan con otros."],
["¿Qué familia está en la primera columna?","Metales activos","Gases nobles","Tierras raras","Litio, sodio y potasio son metales blandos y muy activos."],
["¿Dónde se colocan los lantánidos y los actínidos?","Abajo, en dos filas aparte","Arriba del todo","Se quitaron de la tabla","Se sacan abajo para que la tabla no sea demasiado ancha."],
["¿Cuáles son los dos elementos de la primera fila?","Hidrógeno y helio","Litio y berilio","Oxígeno y flúor","La primera fila solo tiene 2 elementos: el 1 y el 2."],
["¿Cuál fue el primer elemento fabricado por personas?","Tecnecio","Oro","Hierro","El tecnecio se hizo en un laboratorio en 1937."],
["¿Dónde están la mayoría de los metales en la tabla?","A la izquierda y en el centro","Solo abajo","Solo a la derecha","Los no metales y los gases están sobre todo a la derecha."],
["¿Para qué se usan colores en la tabla?","Para ver las familias","Solo para que sea bonita","Para nada","Cada color es una familia de elementos parecidos."],
["¿Qué pasa cuando vas de un elemento al siguiente en la tabla?","El número sube de uno en uno","El número baja de uno en uno","El número cambia al azar","Va del 1 al 118, siempre sumando uno."]
],
eu:[
["Zenbat zutabe ditu taula periodikoak?","18","7","118","Zutabeei talde esaten zaie eta 18 daude."],
["Zenbat errenkada ditu taula periodikoak?","7","18","10","Errenkadei periodo esaten zaie eta 7 daude."],
["Nola deitzen zaie taulako zutabeei?","Taldeak","Periodoak","Geruzak","Taldeak zutabeak dira eta periodoak errenkadak."],
["Nola deitzen zaie taulako errenkadei?","Periodoak","Taldeak","Geruzak","Periodoak errenkadak dira eta taldeak zutabeak."],
["Zein elementu dago taulako lehen laukitxoan?","Hidrogenoa","Helioa","Oxigenoa","Hidrogenoa 1. zenbakia da."],
["Zein elementu dago goiko eskuineko izkinan?","Helioa","Hidrogenoa","Neona","Helioa 2. zenbakia da eta azken zutabean dago."],
["Zer dago taulako laukitxo bakoitzean?","Zenbakia, ikurra eta izena","Marrazki bat bakarrik","Argazki bat","Laukitxo bakoitza elementu baten nortasun-agiria bezalakoa da."],
["Zer esaten digu laukitxo baten zenbakiak?","Zenbat protoi dituen","Zenbat kilo pisatzen dituen","Zer koloretakoa den","Atomoaren erdian dagoen protoi kopurua da."],
["Zer da elementu baten ikurra?","Letra bat edo biko ezizena","Bere pisua","Bere kolorea","Adibidez, Fe burdinaren ikurra da."],
["Zein familia dago taulako azken zutabean?","Gas nobleak","Metal aktiboak","Gatzak egiten dituztenak","Gas nobleak oso lasaiak dira eta ia ez dira besteekin elkartzen."],
["Zein familia dago lehen zutabean?","Metal aktiboak","Gas nobleak","Lur arraroak","Litioa, sodioa eta potasioa metal bigunak eta oso aktiboak dira."],
["Non jartzen dira lantanoideak eta aktinoideak?","Behean, bi errenkada aparte","Goian","Taulatik kendu zituzten","Behean jartzen dira, taula zabalegia izan ez dadin."],
["Zein dira lehen errenkadako bi elementuak?","Hidrogenoa eta helioa","Litioa eta berilioa","Oxigenoa eta fluorra","Lehen errenkadak 2 elementu bakarrik ditu: 1a eta 2a."],
["Zein izan zen pertsonek egindako lehen elementua?","Teknezioa","Urrea","Burdina","Teknezioa laborategian egin zen 1937an."],
["Non daude metal gehienak taulan?","Ezkerrean eta erdian","Behean bakarrik","Eskuinean bakarrik","Ez-metalak eta gasak batez ere eskuinean daude."],
["Zertarako erabiltzen dira koloreak taulan?","Familiak ikusteko","Polita izateko bakarrik","Ezertarako ez","Kolore bakoitza antzeko elementuen familia bat da."],
["Zer gertatzen da taulan elementu batetik hurrengora joaten zarenean?","Zenbakia bat banaka igotzen da","Zenbakia bat banaka jaisten da","Zenbakia ausaz aldatzen da","1etik 118ra doa, beti bat gehituz."]
]
};
const QTF3 = {
es:[
["La tabla periódica tiene 18 columnas.",1,"Las columnas se llaman grupos."],
["La tabla periódica tiene 7 filas.",1,"Son los 7 periodos, sin contar las dos filas de abajo."],
["El helio está en la última columna.",1,"El helio es un gas noble."],
["El hidrógeno es el elemento número 2.",0,"El hidrógeno es el número 1 y el helio es el 2."],
["El símbolo del oro es Or.",0,"El símbolo del oro es Au, del latín aurum."],
["El símbolo del hierro es Fe.",1,"Fe viene del latín ferrum."],
["El símbolo del sodio es So.",0,"Es Na, del latín natrium."],
["El símbolo de la plata es Ag.",1,"Ag viene del latín argentum."],
["El hierro (26) viene antes que el oro (79) en la tabla.",1,"El 26 va antes que el 79."],
["La tabla periódica se ordena por colores.",0,"Se ordena por números, del 1 al 118. Los colores muestran las familias."],
["La tabla periódica se ordena por números.",1,"Va del 1 al 118."],
["Los gases nobles están en la última columna.",1,"Helio, neón, argón..."],
["Los lantánidos y los actínidos también forman parte de la tabla.",1,"Se colocan abajo para que la tabla no sea muy ancha."],
["El oganesón es el elemento 118.",1,"Es el último de la tabla."],
["El elemento número 1 es el helio.",0,"El número 1 es el hidrógeno."],
["Todos los elementos de una columna son iguales.",0,"Son parecidos, como hermanos, pero no iguales."],
["Cada elemento tiene un número distinto.",1,"No hay dos elementos con el mismo número."]
],
eu:[
["Taula periodikoak 18 zutabe ditu.",1,"Zutabeei talde esaten zaie."],
["Taula periodikoak 7 errenkada ditu.",1,"7 periodoak dira, beheko bi errenkadak kontatu gabe."],
["Helioa azken zutabean dago.",1,"Helioa gas noblea da."],
["Hidrogenoa 2. elementua da.",0,"Hidrogenoa 1. zenbakia da eta helioa 2.a."],
["Urrearen ikurra Or da.",0,"Urrearen ikurra Au da, latineko aurum hitzetik."],
["Burdinaren ikurra Fe da.",1,"Fe latineko ferrum hitzetik dator."],
["Sodioaren ikurra So da.",0,"Na da, latineko natrium hitzetik."],
["Zilarraren ikurra Ag da.",1,"Ag latineko argentum hitzetik dator."],
["Burdina (26) urrea (79) baino lehen dago taulan.",1,"26a 79a baino lehen doa."],
["Taula periodikoa koloreen arabera ordenatzen da.",0,"Zenbakien arabera ordenatzen da, 1etik 118ra. Koloreek familiak erakusten dituzte."],
["Taula periodikoa zenbakien arabera ordenatzen da.",1,"1etik 118ra doa."],
["Gas nobleak azken zutabean daude.",1,"Helioa, neona, argona..."],
["Lantanoideak eta aktinoideak ere taulako parte dira.",1,"Behean jartzen dira, taula ez dadin oso zabala izan."],
["Oganessona 118. elementua da.",1,"Taulako azkena da."],
["1. elementua helioa da.",0,"1. zenbakia hidrogenoa da."],
["Zutabe bereko elementu guztiak berdinak dira.",0,"Antzekoak dira, senideak bezala, baina ez berdinak."],
["Elementu bakoitzak zenbaki desberdina du.",1,"Ez dago bi elementu zenbaki berarekin."]
]
};
