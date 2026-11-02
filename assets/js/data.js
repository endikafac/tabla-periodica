/* n|symbol|es|eu|emoji|hint es|hint eu */
const RAW = `
1|H|hidrógeno|hidrogenoa|💧|El más ligero de todos. Con el oxígeno forma el agua.|Guztien arinena da. Oxigenoarekin ura osatzen du.
2|He|helio|helioa|🎈|Hace volar los globos y pone la voz graciosa.|Globoak hegan jartzen ditu eta ahotsa barregarri uzten du.
3|Li|litio|litioa|🔋|Está en las baterías de los móviles y las tablets.|Telefono mugikorren eta tabletaren bateriak ditu.
4|Be|berilio|berilioa|💎|Da el color verde a la esmeralda, una piedra preciosa.|Esmeraldari kolore berdea ematen dio, harri bitxi bati.
5|B|boro|boroa|🧼|Está en jabones y en los cristales de cocina que aguantan el calor.|Xaboietan dago eta beroa jasaten duten sukaldeko kristaletan.
6|C|carbono|karbonoa|✏️|Es la mina del lápiz y también el diamante.|Arkatzaren mina da eta baita diamantea ere.
7|N|nitrógeno|nitrogenoa|🌬️|Casi todo el aire que respiramos es nitrógeno.|Arnasten dugun airearen gehiena nitrogenoa da.
8|O|oxígeno|oxigenoa|🫁|Lo respiramos para vivir.|Bizitzeko arnasten dugu.
9|F|flúor|fluorra|🦷|Está en la pasta de dientes y cuida tus dientes.|Hortzetako pastan dago eta zure hortzak zaintzen ditu.
10|Ne|neón|neona|💡|Hace brillar los carteles de colores de las tiendas.|Dendetako kartel koloretsuak argitzen ditu.
11|Na|sodio|sodioa|🧂|Junto al cloro forma la sal de la cocina.|Klorora lotuta sukaldeko gatza sortzen du.
12|Mg|magnesio|magnesioa|🥬|Está en las espinacas y en los frutos secos.|Espinakak eta fruitu lehorrak ditu.
13|Al|aluminio|aluminioa|🥫|Latas de refresco y papel de aluminio.|Freskagarrien lata-ontziak eta paper aluminioa.
14|Si|silicio|silizioa|🏖️|Está en la arena y en los chips de los ordenadores.|Hondarran eta ordenagailuen txipetan dago.
15|P|fósforo|fosforoa|🦴|Fortalece los huesos y está en las cerillas.|Hezurrak sendotzen ditu eta pospoloetan dago.
16|S|azufre|sufrea|🌋|Huele a huevo podrido. Sale de los volcanes.|Arrautza ustelaren usaina du. Sumendietatik ateratzen da.
17|Cl|cloro|kloroa|🏊|Mantiene limpia el agua de las piscinas.|Igerilekuetako ura garbi mantentzen du.
18|Ar|argón|argona|🔆|Gas tranquilo que llena las bombillas.|Gas lasaia, bonbillak betetzen ditu.
19|K|potasio|potasioa|🍌|Los plátanos tienen potasio.|Platanoek potasioa dute.
20|Ca|calcio|kaltzioa|🥛|Hace fuertes los huesos y los dientes. Está en la leche.|Hezurrak eta hortzak indartzen ditu. Esnean dago.
21|Sc|escandio|eskandioa|🚲|Se usa en bicis y bates muy ligeros.|Bizikleta eta bate oso arinetan erabiltzen da.
22|Ti|titanio|titanioa|🦿|Prótesis y bicicletas fuertes y ligeras.|Protesi eta bizikleta indartsu eta arinak egiteko.
23|V|vanadio|banadioa|🔧|Hace muy duras las llaves y herramientas.|Giltza eta tresnak oso gogor uzten ditu.
24|Cr|cromo|kromoa|🚿|Los grifos brillantes llevan cromo.|Txorrota distiratsuek kromoa dute.
25|Mn|manganeso|manganesoa|🔋|Está dentro de muchas pilas.|Pila askoren barruan dago.
26|Fe|hierro|burdina|🧲|Puentes, la Torre Eiffel y... ¡tu sangre!|Zubiak, Eiffel dorrea eta... zure odola!
27|Co|cobalto|kobaltoa|💙|Da el azul intenso a la cerámica y al cristal.|Zeramikari eta kristalari urdin biziak ematen dio.
28|Ni|níquel|nikela|🪙|Está en las monedas.|Txanponetan dago.
29|Cu|cobre|kobrea|🔌|Los cables de la luz son de cobre.|Argiaren kableak kobrezkoak dira.
30|Zn|zinc|zinka|🧴|Protege la piel en las cremas solares.|Eguzki-kremetan azala babesten du.
31|Ga|galio|galioa|🫳|¡Se derrite en la mano!|Eskuan urtzen da!
32|Ge|germanio|germanioa|📡|Ayuda a viajar la luz por la fibra óptica.|Argiak zuntz optikoan bidaiatzen laguntzen du.
33|As|arsénico|artsenikoa|☠️|Es un veneno. ¡No se toca!|Pozoia da. Ez ukitu!
34|Se|selenio|selenioa|🥜|Está en las nueces de Brasil.|Brasilgo intxaurretan dago.
35|Br|bromo|bromoa|🧪|Es un líquido rojizo que huele muy fuerte.|Likido gorrixka da eta usain oso indartsua du.
36|Kr|kriptón|kriptona|🦸|Su nombre suena a la kriptonita de Superman.|Bere izenak Supermanen kriptonita gogorarazten du.
37|Rb|rubidio|rubidioa|⏱️|Se usa en relojes superprecisos.|Erloju oso zehatzetan erabiltzen da.
38|Sr|estroncio|estrontzioa|🎆|Pone el color rojo a los fuegos artificiales.|Suzko artifizialei kolore gorria ematen die.
39|Y|itrio|itrioa|📺|Da color a las pantallas de la tele.|Telebistako pantailei kolorea ematen die.
40|Zr|circonio|zirkonioa|💍|Hay diamantes de mentira hechos con circonio.|Zirkonioarekin diamante faltsuak egiten dira.
41|Nb|niobio|niobioa|🏥|Está en los imanes de los escáneres del hospital.|Ospitaleko eskanerren iman indartsuetan dago.
42|Mo|molibdeno|molibdenoa|🔩|Hace el acero más resistente.|Altzairua erresistenteago egiten du.
43|Tc|tecnecio|teknezioa|🔬|El primer elemento hecho por personas. Ayuda en hospitales.|Pertsonek egindako lehen elementua. Ospitaleetan laguntzen du.
44|Ru|rutenio|rutenioa|🖊️|Las puntas de algunos bolígrafos lo llevan.|Boligrafo batzuen puntek eramaten dute.
45|Rh|rodio|rodioa|✨|Hace brillar mucho algunas joyas.|Bitxi batzuk asko distiratzea lortzen du.
46|Pd|paladio|paladioa|🚗|Limpia el humo de los coches.|Autoen kea garbitzen du.
47|Ag|plata|zilarra|🥈|Medallas de plata, cubiertos y joyas.|Zilarrezko dominak, koilarak eta bitxiak.
48|Cd|cadmio|kadmioa|🔋|Estaba en pilas antiguas. Es tóxico.|Pila zaharretan zegoen. Toxikoa da.
49|In|indio|indioa|📱|Está en las pantallas táctiles.|Ukipen-pantailetan dago.
50|Sn|estaño|eztainua|🥫|Las latas de conserva llevan estaño.|Kontserba-latek eztainua dute.
51|Sb|antimonio|antimonioa|💄|En el antiguo Egipto lo usaban para pintarse los ojos.|Antzinako Egipton begiak margotzeko erabiltzen zuten.
52|Te|telurio|telurioa|☀️|Está en algunos paneles solares.|Eguzki-panel batzuetan dago.
53|I|yodo|iodoa|🩹|Sirve para desinfectar las heridas.|Zauriak desinfektatzeko balio du.
54|Xe|xenón|xenona|🚙|Hace brillar los faros de algunos coches.|Auto batzuen faroak distiratsu jartzen ditu.
55|Cs|cesio|zesioa|⏰|Los relojes más exactos del mundo usan cesio.|Munduko erloju zehatzenek zesioa erabiltzen dute.
56|Ba|bario|barioa|🩻|Ayuda a ver la tripa en las radiografías.|Erradiografietan sabela ikusten laguntzen du.
57|La|lantano|lantanoa|📷|Está en las lentes de las cámaras de fotos.|Argazki-kameren lenteetan dago.
58|Ce|cerio|zerioa|🔥|La piedrecita del mechero que hace chispas.|Metxeroaren txinparta egiten duen harritxua.
59|Pr|praseodimio|praseodimioa|🟢|Da un color verde amarillento al cristal.|Kristalari kolore berde horixka ematen dio.
60|Nd|neodimio|neodimioa|🎧|Los imanes pequeñitos y fuertes de los auriculares.|Aurikularretako iman txiki eta indartsuak.
61|Pm|prometio|prometioa|🌌|Es radiactivo y brilla en la oscuridad.|Erradioaktiboa da eta ilunpean distiratzen du.
62|Sm|samario|samarioa|🧲|Hace imanes muy potentes.|Iman oso indartsuak egiten ditu.
63|Eu|europio|europioa|💶|Los billetes de euro brillan con luz ultravioleta.|Euro-billeteek argi ultramorearekin distira egiten dute.
64|Gd|gadolinio|gadolinioa|🏥|Ayuda a ver dentro del cuerpo en el hospital.|Ospitalean gorputzaren barrua ikusten laguntzen du.
65|Tb|terbio|terbioa|📺|Da el color verde a las pantallas.|Pantailei kolore berdea ematen die.
66|Dy|disprosio|disprosioa|🚙|Está en los imanes de los coches eléctricos.|Auto elektrikoen imanetan dago.
67|Ho|holmio|holmioa|🔦|Se usa en láseres de los médicos.|Medikuen laserretan erabiltzen da.
68|Er|erbio|erbioa|🌐|Ayuda a que internet viaje por la fibra óptica.|Interneten zuntz optikoan bidaiatzen laguntzen du.
69|Tm|tulio|tulioa|🩻|Muy raro, se usa en máquinas de rayos X.|Oso arraroa, X izpien makinetan erabiltzen da.
70|Yb|iterbio|iterbioa|⏱️|Está en relojes superprecisos.|Erloju oso zehatzetan dago.
71|Lu|lutecio|lutezioa|🏥|Se usa en escáneres médicos.|Eskaner medikuetan erabiltzen da.
72|Hf|hafnio|hafnioa|💻|Está en chips de ordenador.|Ordenagailuen txipetan dago.
73|Ta|tántalo|tantaloa|📱|Está en los móviles.|Mugikorretan dago.
74|W|wolframio|wolframa|💡|El hilito de las bombillas antiguas.|Bonbilla zaharren hari fina.
75|Re|renio|renioa|✈️|Aguanta el calor en los motores de los aviones.|Hegazkinen motorretako beroa jasaten du.
76|Os|osmio|osmioa|⚖️|Es el metal más pesado que existe.|Dagoen metalik astunena da.
77|Ir|iridio|iridioa|🦖|Los meteoritos lo traen. Se encontró donde cayó el que acabó con los dinosaurios.|Meteoritoek ekartzen dute. Dinosauroak desagerrarazi zituenaren lekuan aurkitu zen.
78|Pt|platino|platinoa|💍|Joyas muy valiosas.|Bitxi oso baliotsuak.
79|Au|oro|urrea|🥇|Medallas de oro, coronas y joyas.|Urrezko dominak, koroak eta bitxiak.
80|Hg|mercurio|merkurioa|🌡️|El único metal que es líquido. ¡Es tóxico!|Likidoa den metal bakarra. Toxikoa da!
81|Tl|talio|talioa|☠️|Muy venenoso. Solo se usa en laboratorios.|Oso pozoitsua. Laborategietan bakarrik erabiltzen da.
82|Pb|plomo|beruna|🎣|Pesas de pesca. Es muy pesado.|Arrantza-pisuak. Oso astuna da.
83|Bi|bismuto|bismutoa|🌈|Forma cristales de colores como un arcoíris.|Ostadarra bezalako kristal koloretsuak sortzen ditu.
84|Po|polonio|polonioa|☢️|Lo descubrió Marie Curie y lo llamó así por Polonia.|Marie Curiek aurkitu zuen eta Poloniaren omenez izendatu zuen.
85|At|astato|astatoa|🔬|Rarísimo: casi no hay en la Tierra.|Oso arraroa: ia ez dago Lurrean.
86|Rn|radón|radona|⛰️|Gas que sale de algunas rocas.|Harri batzuetatik ateratzen den gasa.
87|Fr|francio|frantzioa|🥖|Lleva el nombre de Francia. Dura muy poquito.|Frantziaren izena du. Oso gutxi irauten du.
88|Ra|radio|radioa|🌟|Lo descubrió Marie Curie. Brilla en la oscuridad.|Marie Curiek aurkitu zuen. Ilunpean distiratzen du.
89|Ac|actinio|aktinioa|💙|Brilla con una luz azul en la oscuridad.|Argi urdinarekin distiratzen du ilunpean.
90|Th|torio|torioa|⚡|Se estudia para producir energía.|Energia sortzeko aztertzen da.
91|Pa|protactinio|protaktinioa|🔬|Rarísimo. Solo hay un poquito en la naturaleza.|Oso arraroa. Naturan oso gutxi dago.
92|U|uranio|uranioa|⚡|Las centrales nucleares lo usan para dar luz.|Zentral nuklearrek argia sortzeko erabiltzen dute.
93|Np|neptunio|neptunioa|🪐|Se llama como el planeta Neptuno.|Neptuno planetaren izena du.
94|Pu|plutonio|plutonioa|🛰️|Se llama como Plutón. Algunas sondas espaciales lo usan.|Plutonen izena du. Espazio-zunda batzuek erabiltzen dute.
95|Am|americio|amerizioa|🔥|Está en los detectores de humo.|Kearen detektagailuetan dago.
96|Cm|curio|kuria|👩‍🔬|Se llama así por Marie y Pierre Curie.|Marie eta Pierre Curieren omenez du izena.
97|Bk|berkelio|berkelioa|🔬|Se llama como la ciudad de Berkeley, en California.|Kaliforniako Berkeley hiriaren izena du.
98|Cf|californio|kalifornioa|🌴|Se llama como el estado de California.|Kaliforniako estatuaren izena du.
99|Es|einstenio|einsteinioa|🧠|Se llama como Albert Einstein.|Albert Einsteinen izena du.
100|Fm|fermio|fermioa|🧠|Se llama como el científico Enrico Fermi.|Enrico Fermi zientzialariaren izena du.
101|Md|mendelevio|mendelebioa|📋|Se llama como Mendeléyev, el de la tabla.|Mendeleieven izena du, taularen egilearena.
102|No|nobelio|nobelioa|🏅|Se llama como Alfred Nobel, el de los premios Nobel.|Alfred Nobelen izena du, Nobel sarien sortzailearena.
103|Lr|lawrencio|lawrentzioa|🔬|Se llama como Ernest Lawrence, un físico.|Ernest Lawrence fisikariaren izena du.
104|Rf|rutherfordio|rutherfordioa|🧪|Hecho en laboratorio. Como Ernest Rutherford, físico.|Laborategian egina. Ernest Rutherford fisikariaren izena du.
105|Db|dubnio|dubnioa|🧪|Hecho en laboratorio. Como la ciudad rusa de Dubna.|Laborategian egina. Dubna Errusiako hiriaren izena du.
106|Sg|seaborgio|seaborgioa|🧪|Hecho en laboratorio. Como el químico Glenn Seaborg.|Laborategian egina. Glenn Seaborg kimikariaren izena du.
107|Bh|bohrio|bohrioa|🧪|Hecho en laboratorio. Como el físico Niels Bohr.|Laborategian egina. Niels Bohr fisikariaren izena du.
108|Hs|hasio|hassioa|🧪|Hecho en laboratorio. Como Hesse, una región de Alemania.|Laborategian egina. Hessen Alemaniako eskualdearen izena du.
109|Mt|meitnerio|meitnerioa|🧪|Hecho en laboratorio. Como la física Lise Meitner.|Laborategian egina. Lise Meitner fisikariaren izena du.
110|Ds|darmstatio|darmstadtioa|🧪|Hecho en laboratorio. Como la ciudad alemana de Darmstadt.|Laborategian egina. Darmstadt Alemaniako hiriaren izena du.
111|Rg|roentgenio|roentgenioa|🩻|Hecho en laboratorio. Como Röntgen, el de los rayos X.|Laborategian egina. Röntgenen izena du, X izpien aurkitzailearena.
112|Cn|copernicio|kopernizioa|🔭|Hecho en laboratorio. Como Copérnico, el astrónomo.|Laborategian egina. Kopernikoren izena du, astronomoarena.
113|Nh|nihonio|nihonioa|🗾|Hecho en laboratorio en Japón. Nihon es "Japón" en japonés.|Japonian laborategian egina. Nihon "Japonia" da japonieraz.
114|Fl|flerovio|flerovioa|🧪|Hecho en laboratorio. Como el físico Gueorgui Flerov.|Laborategian egina. Georgi Flerov fisikariaren izena du.
115|Mc|moscovio|moskovioa|🧪|Hecho en laboratorio. Como la región de Moscú.|Laborategian egina. Moskuko eskualdearen izena du.
116|Lv|livermorio|livermorioa|🧪|Hecho en laboratorio. Como el laboratorio de Livermore.|Laborategian egina. Livermoreko laborategiaren izena du.
117|Ts|teneso|tennessoa|🧪|Hecho en laboratorio. Como el estado de Tennessee.|Laborategian egina. Tennessee estatuaren izena du.
118|Og|oganesón|oganessona|🧪|El último de la tabla. Como el físico Yuri Oganessian.|Taulako azkena. Yuri Oganessian fisikariaren izena du.
`.trim().split("\n").map(l=>{const [n,s,es,eu,e,he,hu]=l.split("|");return{n:+n,s,es,eu,e,h:{es:he,eu:hu}}});

const CATS = ["alk","alke","tra","pos","met","non","hal","nob","lan","act"];
function catOf(n){
  if([3,11,19,37,55,87].includes(n))return"alk";
  if([4,12,20,38,56,88].includes(n))return"alke";
  if([1,6,7,8,15,16,34].includes(n))return"non";
  if([9,17,35,53,85,117].includes(n))return"hal";
  if([2,10,18,36,54,86,118].includes(n))return"nob";
  if([5,14,32,33,51,52].includes(n))return"met";
  if(n>=57&&n<=71)return"lan";
  if(n>=89&&n<=103)return"act";
  if([13,31,49,50,81,82,83,84,113,114,115,116].includes(n))return"pos";
  return"tra";
}
function pos(n){
  if(n===1)return[1,1]; if(n===2)return[1,18];
  if(n<=4)return[2,n-2]; if(n<=10)return[2,n+8];
  if(n<=12)return[3,n-10]; if(n<=18)return[3,n];
  if(n<=36)return[4,n-18]; if(n<=54)return[5,n-36];
  if(n<=56)return[6,n-54]; if(n>=72&&n<=86)return[6,n-68];
  if(n>=87&&n<=88)return[7,n-86]; if(n>=104)return[7,n-100];
  if(n<=71)return[9,n-53]; return[10,n-85];
}
RAW.forEach(el=>{el.c=catOf(el.n);[el.r,el.col]=pos(el.n)});
