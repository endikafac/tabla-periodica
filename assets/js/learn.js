/* Content for the "Aprende" page: what it is, how it works, what it is for, history, families. */
const LEARN = {
es:{
 what:{h:"¿Qué es la tabla periódica?",e:"🧱",p:["Es un mapa con todos los elementos del mundo. Un elemento es un tipo de materia, como el oro, el oxígeno o el hierro.","Es como el álbum de cromos de la naturaleza: 118 cromos, cada uno con su número, su símbolo y su nombre."]},
 how:{h:"¿Cómo funciona?",e:"⚙️",p:["Todo está hecho de átomos, que son diminutos. Cada elemento tiene un número: el hidrógeno es el 1, el helio el 2, el litio el 3... hasta el 118.","Los elementos de una misma columna se portan de forma parecida, como hermanos de una misma familia."]},
 use:{h:"¿Para qué sirve?",e:"🎯",p:["Para saber cómo se va a portar un elemento sin tener que probarlo: si conoces a un hermano, ya sabes cómo es el resto de la familia.","Con ella, los científicos inventan materiales nuevos, los médicos hacen medicinas y los ingenieros eligen el metal perfecto para un puente o un móvil."]},
 histH:"Historia: ¿cómo se hizo la tabla?",
 hist:[
  {y:"Antigüedad",e:"🏺",t:"Los primeros elementos",p:"Hace miles de años ya se conocían el oro, la plata, el cobre, el hierro, el plomo y otros. Nadie sabía que eran elementos."},
  {y:"1669",e:"🔬",t:"Hennig Brand",p:"Buscando oro, hirvió orina y encontró el fósforo, que brilla en la oscuridad. Fue de los primeros elementos descubiertos a propósito."},
  {y:"1783",e:"⛏️",t:"Los hermanos Elhuyar",p:"Fausto y Juan José Elhuyar aislaron el wolframio en Bergara. ¡Un elemento descubierto en Euskadi!"},
  {y:"1789",e:"📖",t:"Lavoisier",p:"Hizo la primera lista seria de elementos, con 33."},
  {y:"1807",e:"⚡",t:"Humphry Davy",p:"Usó electricidad para separar el sodio y el potasio, y poco después el calcio, el magnesio y otros más."},
  {y:"1869",e:"📋",t:"Dmitri Mendeléyev",p:"Ordenó los elementos y dejó huecos. Dijo: aquí irán otros que aún no conocemos. Años después se descubrieron, ¡y acertó!"},
  {y:"1898",e:"☢️",t:"Marie Curie",p:"Descubrió el polonio y el radio, y fue la primera persona en ganar dos premios Nobel, de Física y de Química."},
  {y:"1913",e:"🧲",t:"Henry Moseley",p:"Descubrió que lo importante es el número de cada elemento. Desde entonces la tabla se ordena por ese número."},
  {y:"1937",e:"🧪",t:"El primer elemento fabricado",p:"El tecnecio fue el primer elemento hecho por personas en un laboratorio. Después llegaron muchos más."},
  {y:"2016",e:"🎉",t:"La tabla se completa",p:"Los últimos cuatro elementos (113, 115, 117 y 118) recibieron nombre oficial y la séptima fila quedó llena."}],
 famH:"Las familias de la tabla",
 fam:{alk:"Metales blandos y muy activos. Reaccionan con el agua. Ejemplos: litio, sodio, potasio.",
  alke:"Metales de la tiza, los huesos y las conchas. Ejemplos: calcio, magnesio, bario.",
  tra:"Los metales duros y brillantes de las herramientas y las joyas. Ejemplos: hierro, cobre, oro, plata.",
  pos:"Otros metales más blandos y fáciles de fundir. Ejemplos: aluminio, estaño, plomo.",
  met:"Mitad metal, mitad no metal. Son la clave de los chips de los ordenadores. Ejemplos: silicio, boro.",
  non:"Elementos de la vida y del aire: carbono, oxígeno, nitrógeno, azufre, fósforo, hidrógeno.",
  hal:"Los que forman sales al juntarse con metales. Ejemplos: flúor, cloro, yodo.",
  nob:"Gases tranquilos que casi no se juntan con nadie. Ejemplos: helio, neón, argón.",
  lan:"Las tierras raras. Están en imanes, pantallas y auriculares. Ejemplos: neodimio, europio.",
  act:"Casi todos son radiactivos. Ejemplos: uranio, plutonio, torio."},
 sources:"Nombres según la RSEQ. Datos de descubrimiento y masas atómicas simplificados para el aula."
},
eu:{
 what:{h:"Zer da taula periodikoa?",e:"🧱",p:["Existitzen diren elementu guztien mapa bat da, errazago aurkitzeko ordenatuta. Elementu bat materia mota bat da, urrea, oxigenoa edo burdina bezala.","Naturaren kromo-albuma bezalakoa da: 118 kromo, bakoitza bere zenbaki, ikur eta izenarekin."]},
 how:{h:"Nola funtzionatzen du?",e:"⚙️",p:["Dena atomoz egina dago, oso txikiak. Elementu bakoitzak zenbaki bat du: hidrogenoa 1 da, helioa 2, litioa 3... 118raino.","Zutabe bereko elementuak antzera portatzen dira, familia bereko senideak bezala."]},
 use:{h:"Zertarako balio du?",e:"🎯",p:["Elementu bat nola portatuko den jakiteko, probatu gabe: senide bat ezagutzen baduzu, familiako gainerakoak nolakoak diren badakizu.","Taulari esker, zientzialariek material berriak asmatzen dituzte, medikuek sendagaiak egiten dituzte eta ingeniariek zubi edo mugikor baterako metal egokia aukeratzen dute."]},
 histH:"Historia: nola egin zen taula?",
 hist:[
  {y:"Antzinatea",e:"🏺",t:"Lehen elementuak",p:"Duela milaka urte jada ezagutzen ziren urrea, zilarra, kobrea, burdina, beruna eta beste batzuk. Inork ez zekien elementuak zirenik."},
  {y:"1669",e:"🔬",t:"Hennig Brand",p:"Urrea bilatzen ari zela, pixa irakin zuen eta fosforoa aurkitu zuen, ilunpean distiratzen duena. Nahita aurkitutako lehen elementuetako bat izan zen."},
  {y:"1783",e:"⛏️",t:"Elhuyar anaiak",p:"Fausto eta Juan Jose Elhuyarrek wolframa isolatu zuten Bergaran. Euskal Herrian aurkitutako elementu bat!"},
  {y:"1789",e:"📖",t:"Lavoisier",p:"Elementuen lehen zerrenda serioa egin zuen, 33rekin."},
  {y:"1807",e:"⚡",t:"Humphry Davy",p:"Elektrizitatea erabili zuen sodioa eta potasioa banatzeko, eta handik gutxira kaltzioa, magnesioa eta beste batzuk."},
  {y:"1869",e:"📋",t:"Dmitri Mendeleiev",p:"Elementuak ordenatu zituen eta hutsuneak utzi zituen. Esan zuen: hemen oraindik ezagutzen ez ditugun beste batzuk joango dira. Urte batzuk geroago aurkitu ziren, eta asmatu zuen!"},
  {y:"1898",e:"☢️",t:"Marie Curie",p:"Polonioa eta radioa aurkitu zituen, eta bi Nobel sari irabazi zituen lehen pertsona izan zen, Fisikan eta Kimikan."},
  {y:"1913",e:"🧲",t:"Henry Moseley",p:"Garrantzitsuena elementu bakoitzaren zenbakia dela aurkitu zuen. Ordutik taula zenbaki horren arabera ordenatzen da."},
  {y:"1937",e:"🧪",t:"Egindako lehen elementua",p:"Teknezioa pertsonek laborategian egindako lehen elementua izan zen. Gero beste asko etorri ziren."},
  {y:"2016",e:"🎉",t:"Taula osatzen da",p:"Azken lau elementuek (113, 115, 117 eta 118) izen ofiziala jaso zuten eta zazpigarren errenkada beteta geratu zen."}],
 famH:"Taulako familiak",
 fam:{alk:"Metal bigunak eta oso aktiboak. Urarekin erreakzionatzen dute. Adibideak: litioa, sodioa, potasioa.",
  alke:"Klarionaren, hezurren eta maskorren metalak. Adibideak: kaltzioa, magnesioa, barioa.",
  tra:"Tresnen eta bitxien metal gogor eta distiratsuak. Adibideak: burdina, kobrea, urrea, zilarra.",
  pos:"Beste metal batzuk, biguinagoak eta errazago urtzen direnak. Adibideak: aluminioa, eztainua, beruna.",
  met:"Erdi metal, erdi ez-metal. Ordenagailuen txipen gakoa dira. Adibideak: silizioa, boroa.",
  non:"Bizitzaren eta airearen elementuak: karbonoa, oxigenoa, nitrogenoa, sufrea, fosforoa, hidrogenoa.",
  hal:"Metalekin elkartzean gatzak sortzen dituztenak. Adibideak: fluorra, kloroa, iodoa.",
  nob:"Ia inorekin elkartzen ez diren gas lasaiak. Adibideak: helioa, neona, argona.",
  lan:"Lur arraroak. Imanetan, pantailetan eta aurikularretan daude. Adibideak: neodimioa, europioa.",
  act:"Ia guztiak erradioaktiboak dira. Adibideak: uranioa, plutonioa, torioa."},
 sources:"Izenak RSEQren arabera. Aurkikuntza-datuak eta masa atomikoak ikasgelarako sinplifikatuta."
}};

/* "From big to small" story: what is an atom, an element, why each has a number, why columns are families. */
LEARN.es.storyH = "Antes de empezar: ¿qué es un átomo?";
LEARN.es.atomLegend = [["🔴","Protones","están en el centro"],["🔵","Electrones","giran alrededor, como satélites"]];
LEARN.es.story = [
 {e:"🔍",h:"Todo está hecho de piezas diminutas",p:"Todo lo que ves (tu bocadillo, el aire, tu tablet) está hecho de piezas tan pequeñas que no se ven ni con una lupa. Esas piezas se llaman átomos. En el punto final de una frase caben millones de átomos."},
 {e:"🧱",h:"Hay distintas clases de átomos",p:"Es como los LEGO: hay piezas de muchas clases. Cada clase de átomo se llama elemento. El oxígeno es una clase de átomo. El oro es otra clase. El hierro es otra."},
 {e:"🔤",h:"Solo hay 118 clases",p:"Con solo 118 clases de átomos se hace todo, igual que con las letras del abecedario se escriben todas las palabras."},
 {e:"⚛️",h:"¿Cómo es un átomo por dentro?",p:"En el centro tiene unas bolitas que se llaman protones. Alrededor giran otras bolitas más pequeñas, los electrones, como si fueran satélites.",atom:true},
 {e:"🔢",h:"Cada elemento tiene un número",p:"Lo que hace distinto a cada elemento es cuántos protones tiene en el centro. Ese es su número. El hidrógeno tiene 1 protón: es el número 1. El helio tiene 2: es el número 2. El litio tiene 3... y así hasta el 118."},
 {e:"🗺️",h:"La tabla periódica es el mapa",p:"Es una tabla que coloca los 118 elementos en orden, del 1 al 118, en filas y columnas. Se lee como un libro: de izquierda a derecha y de arriba abajo."},
 {e:"👨‍👩‍👧",h:"Las columnas son familias",p:"Los elementos de la misma columna se parecen, como hermanos. Por ejemplo, el helio, el neón y el argón (la última columna) son gases muy tranquilos que casi nunca se juntan con otros. El litio, el sodio y el potasio (la primera columna) son metales blandos que reaccionan con fuerza con el agua."},
 {e:"⚗️",h:"Los átomos se juntan",p:"Los átomos de distintos elementos se juntan para hacer cosas nuevas. Dos átomos de hidrógeno y uno de oxígeno hacen una gotita de agua. Esas uniones se llaman moléculas. ¡Míralas en Secretos!"}
];
LEARN.eu.storyH = "Hasi baino lehen: zer da atomo bat?";
LEARN.eu.atomLegend = [["🔴","Protoiak","erdian daude"],["🔵","Elektroiak","inguruan ibiltzen dira, satelite bezala"]];
LEARN.eu.story = [
 {e:"🔍",h:"Dena pieza txikiz egina dago",p:"Ikusten duzun guztia (zure hamaiketakoa, airea, zure tableta) lupaz ere ikusten ez diren pieza txikiz egina dago. Pieza horiei atomo esaten zaie. Esaldi bateko puntuan milioika atomo sartzen dira."},
 {e:"🧱",h:"Atomo mota asko daude",p:"LEGOak bezalakoak dira: pieza mota asko daude. Atomo mota bakoitzari elementu esaten zaio. Oxigenoa atomo mota bat da. Urrea beste mota bat da. Burdina beste bat."},
 {e:"🔤",h:"118 mota baino ez",p:"118 atomo motarekin dena egiten da, abeceko letrekin hitz guztiak idazten diren bezala."},
 {e:"⚛️",h:"Nolakoa da atomo bat barrutik?",p:"Erdian protoi izeneko bolatxoak ditu. Inguruan bolatxo txikiagoak ibiltzen dira, elektroiak, satelite bezala.",atom:true},
 {e:"🔢",h:"Elementu bakoitzak zenbaki bat du",p:"Elementu bakoitza desberdina egiten duena erdian zenbat protoi dituen da. Hori da bere zenbakia. Hidrogenoak protoi 1 du: 1. zenbakia da. Helioak 2 ditu: 2. zenbakia da. Litioak 3 ditu... eta horrela 118raino."},
 {e:"🗺️",h:"Taula periodikoa mapa da",p:"118 elementuak ordenan jartzen dituen taula bat da, 1etik 118ra, errenkada eta zutabetan. Liburu bat bezala irakurtzen da: ezkerretik eskuinera eta goitik behera."},
 {e:"👨‍👩‍👧",h:"Zutabeak familiak dira",p:"Zutabe bereko elementuak antzekoak dira, senideak bezala. Adibidez, helioa, neona eta argona (azken zutabea) gas lasai-lasaiak dira, ia inoiz beste elementuekin elkartzen ez direnak. Litioa, sodioa eta potasioa (lehen zutabea) metal bigunak dira, urarekin indarrez erreakzionatzen dutenak."},
 {e:"⚗️",h:"Atomoak elkartu egiten dira",p:"Elementu desberdinetako atomoak elkartzen dira gauza berriak egiteko. Bi hidrogeno atomok eta oxigeno atomo batek ur-tanta bat egiten dute. Elkarte horiei molekula esaten zaie. Ikusi Sekretuak atalean!"}
];
