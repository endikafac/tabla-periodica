/* More combinations so (almost) every element appears in some.
   atoms|formula|emoji|mix(1=mixture)|ES name|ES text|EU name|EU text */
const COMPS = `
H:1,Cl:1|HCl|🍽️|0|Ácido del estómago|Hidrógeno y cloro. Tu tripa lo fabrica para deshacer la comida.|Sabeleko azidoa|Hidrogenoa eta kloroa. Zure sabelak egiten du janaria desegiteko.
He:1,O:1|He + O₂|🤿|1|Aire para bucear|Una mezcla de helio y oxígeno que respiran los buceadores.|Urpekaritzarako airea|Helioz eta oxigenoz egindako nahastea, urpekariek arnasten dutena.
Li:1,Co:1,O:2|LiCoO₂|🔋|0|Batería del móvil|Litio, cobalto y oxígeno dentro de la batería de tu tablet.|Mugikorraren bateria|Litioa, kobaltoa eta oxigenoa zure tabletaren bateriaren barruan.
Be:3,Al:2,Si:6,O:18|Be₃Al₂Si₆O₁₈|💎|0|Esmeralda|Berilio, aluminio, silicio y oxígeno forman esta piedra verde preciosa.|Esmeralda|Berilioak, aluminioak, silizioak eta oxigenoak harri berde baliotsu hau osatzen dute.
Na:2,B:4,O:7|Na₂B₄O₇|🧼|0|Bórax|Sodio, boro y oxígeno. Se usa para limpiar y hacer jabones.|Boraxa|Sodioa, boroa eta oxigenoa. Garbitzeko eta xaboiak egiteko erabiltzen da.
N:1,H:3|NH₃|🧽|0|Amoníaco|Un nitrógeno y tres hidrógenos. Huele fuerte y se usa para limpiar.|Amoniakoa|Nitrogeno bat eta hiru hidrogeno. Usain indartsua du eta garbitzeko erabiltzen da.
N:1,O:1,Ar:1|N₂ + O₂ + Ar|🌬️|1|El aire|El aire que respiras es una mezcla: casi todo nitrógeno, un poco de oxígeno y una pizca de argón.|Airea|Arnasten duzun airea nahastea da: ia dena nitrogenoa, oxigeno pixka bat eta argon apur bat.
Na:1,F:1|NaF|🦷|0|Flúor de la pasta|Sodio y flúor. Protegen tus dientes de las caries.|Hortzetako fluorra|Sodioa eta fluorra. Zure hortzak karieetatik babesten dituzte.
Ne:1,Ar:1|Ne + Ar|💡|1|Tubo de colores|Neón y argón dentro de un tubo brillan cuando pasa la electricidad.|Kolore-hodia|Hodi baten barruko neonak eta argonak distira egiten dute elektrizitatea pasatzean.
Mg:1,O:2,H:2|Mg(OH)₂|🥛|0|Leche de magnesia|Magnesio, oxígeno e hidrógeno. Es una medicina para el dolor de tripa.|Magnesia-esnea|Magnesioa, oxigenoa eta hidrogenoa. Sabeleko minerako sendagaia da.
Al:2,O:3|Al₂O₃|💍|0|Rubí y zafiro|Aluminio y oxígeno. Con un poco de color son piedras preciosas.|Errubia eta zafiroa|Aluminioa eta oxigenoa. Kolore apur batekin harri bitxiak dira.
Ca:3,P:2,O:8|Ca₃(PO₄)₂|🦴|0|Huesos|Calcio, fósforo y oxígeno. ¡Así de fuertes están tus huesos!|Hezurrak|Kaltzioa, fosforoa eta oxigenoa. Horrela daude indartsu zure hezurrak!
H:2,S:1,O:4|H₂SO₄|🔋|0|Ácido de batería|Hidrógeno, azufre y oxígeno. Va dentro de las baterías de los coches. ¡Es muy fuerte, no se toca!|Bateriako azidoa|Hidrogenoa, sufrea eta oxigenoa. Autoen baterien barruan doa. Oso indartsua da, ez da ukitzen!
Fe:1,S:2|FeS₂|✨|0|Oro de los tontos|Hierro y azufre forman la pirita, una piedra dorada que engaña a todo el mundo.|Tontoen urrea|Burdinak eta sufreak pirita sortzen dute, mundu guztia engainatzen duen harri urreztatua.
K:1,Cl:1|KCl|🧂|0|Sal sin sodio|Potasio y cloro. Se parece a la sal de cocina, pero no lleva sodio.|Sodiorik gabeko gatza|Potasioa eta kloroa. Sukaldeko gatzaren antzekoa da, baina ez du sodiorik.
Sc:1,Al:1|Sc + Al|🚲|1|Bicis ligeras|Escandio mezclado con aluminio hace metales muy ligeros y fuertes.|Bizikleta arinak|Aluminioarekin nahastutako eskandioak metal oso arinak eta indartsuak egiten ditu.
Ti:1,O:2|TiO₂|🎨|0|Pintura blanca|Titanio y oxígeno hacen el blanco de muchas pinturas y cremas solares.|Pintura zuria|Titanioak eta oxigenoak pintura eta eguzki-krema askoren zuria egiten dute.
V:1,Fe:1|V + Fe|🔧|1|Acero de herramientas|Vanadio mezclado con hierro hace llaves y herramientas muy duras.|Tresnen altzairua|Burdinarekin nahastutako banadioak giltza eta tresna oso gogorrak egiten ditu.
Fe:1,Cr:1,Ni:1|Fe + Cr + Ni|🍴|1|Acero inoxidable|Hierro, cromo y níquel: los cubiertos que no se oxidan.|Altzairu herdoilgaitza|Burdina, kromoa eta nikela: herdoiltzen ez diren mahai-tresnak.
Mn:1,O:2|MnO₂|🔋|0|Pila|Manganeso y oxígeno dentro de muchas pilas.|Pila|Manganesoa eta oxigenoa pila askoren barruan.
Co:1,Al:2,O:4|CoAl₂O₄|💙|0|Azul cobalto|Cobalto, aluminio y oxígeno hacen un azul precioso para pintar.|Kobalto-urdina|Kobaltoak, aluminioak eta oxigenoak margotzeko urdin ederra egiten dute.
Cu:1,Ni:1|Cu + Ni|🪙|1|Monedas|Cobre y níquel mezclados hacen monedas que duran mucho.|Txanponak|Elkarrekin nahastutako kobreak eta nikelak asko irauten duten txanponak egiten dituzte.
Cu:1,S:1,O:4|CuSO₄|🔵|0|Sulfato de cobre|Cobre, azufre y oxígeno forman cristales azules como piedras de hielo.|Kobre sulfatoa|Kobreak, sufreak eta oxigenoak izotz-harriak bezalako kristal urdinak sortzen dituzte.
Cu:1,Sn:1|Cu + Sn|🔔|1|Bronce|Cobre y estaño mezclados: así se hacían las campanas y las espadas antiguas.|Brontzea|Kobrea eta eztainua nahastuta: horrela egiten ziren kanpaiak eta ezpata zaharrak.
Zn:1,O:1|ZnO|🧴|0|Crema solar|Zinc y oxígeno forman la crema blanca que te protege del sol.|Eguzki-krema|Zinkak eta oxigenoak eguzkitik babesten zaituen krema zuria sortzen dute.
Cu:1,Zn:1|Cu + Zn|🎺|1|Latón|Cobre y zinc mezclados hacen el latón dorado de las trompetas.|Letoia|Kobrea eta zinka nahastuta tronpetetako letoi urre-kolorea egiten dute.
Ga:1,N:1|GaN|💡|0|Luz LED azul|Galio y nitrógeno hacen la luz azul de las bombillas LED. ¡Ganó un premio Nobel!|LED argi urdina|Galioak eta nitrogenoak LED bonbilletako argi urdina egiten dute. Nobel sari bat irabazi zuen!
Ge:1,O:2|GeO₂|🌐|0|Fibra óptica|Germanio y oxígeno ayudan a que la luz viaje por los cables de internet.|Zuntz optikoa|Germanioak eta oxigenoak argia interneteko kableetatik bidaiatzen laguntzen dute.
Ga:1,As:1|GaAs|📡|0|Chips veloces|Galio y arsénico forman chips muy rápidos para móviles y satélites.|Txip azkarrak|Galioak eta artsenikoak mugikorretarako eta sateliteetarako txip oso azkarrak sortzen dituzte.
Cd:1,Se:1|CdSe|📺|0|Pantallas de colores|Cadmio y selenio dan colores muy vivos a algunas teles.|Kolorezko pantailak|Kadmioak eta selenioak kolore bizi-biziak ematen dizkiete telebista batzuei.
Ag:1,Br:1|AgBr|📷|0|Fotos antiguas|Plata y bromo: con luz se oscurece. Así se hacían las fotos antes.|Argazki zaharrak|Zilarra eta bromoa: argiarekin ilundu egiten da. Horrela egiten ziren argazkiak lehen.
Kr:1,F:2|KrF₂|🧪|0|Un caso raro|Kriptón y flúor. Un gas noble que casi nunca se junta, ¡pero en el laboratorio sí!|Kasu arraroa|Kriptona eta fluorra. Ia inoiz elkartzen ez den gas nobleak, baina laborategian bai!
Rb:1,Cl:1|RbCl|🧂|0|Sal de rubidio|Rubidio y cloro. Se parece a la sal de cocina y se usa en laboratorios.|Rubidio gatza|Rubidioa eta kloroa. Sukaldeko gatzaren antzekoa da eta laborategietan erabiltzen da.
Sr:1,N:2,O:6|Sr(NO₃)₂|🎆|0|Fuegos artificiales rojos|Estroncio, nitrógeno y oxígeno: el rojo de los cohetes de fiesta.|Suzko artifizial gorriak|Estrontzioa, nitrogenoa eta oxigenoa: jaietako suziri gorrien kolorea.
Y:1,Ba:2,Cu:3,O:7|YBa₂Cu₃O₇|🧲|0|Imán que flota|Itrio, bario, cobre y oxígeno. Muy frío, ¡hace flotar un imán en el aire!|Hegan egiten duen imana|Itrioa, barioa, kobrea eta oxigenoa. Oso hotz dagoenean, iman bat airean flotatzen jartzen du!
Zr:1,O:2|ZrO₂|💍|0|Diamante de mentira|Circonio y oxígeno brillan casi como un diamante.|Diamante faltsua|Zirkonioak eta oxigenoak ia diamantea bezala distiratzen dute.
Nb:1,Ti:1|Nb + Ti|🏥|1|Imán del hospital|Niobio y titanio mezclados hacen los imanes de los escáneres.|Ospitaleko imana|Nahastutako niobioak eta titanioak eskanerren imanak egiten dituzte.
Mo:1,S:2|MoS₂|⚙️|0|Aceite seco|Molibdeno y azufre ayudan a que las piezas de las máquinas resbalen sin gastarse.|Olio lehorra|Molibdenoak eta sufreak makinen piezak higatu gabe irristatzen laguntzen dute.
Na:1,Tc:1,O:4|NaTcO₄|🏥|0|Ayuda del hospital|Sodio, tecnecio y oxígeno: se usa para hacer fotos del cuerpo por dentro.|Ospitaleko laguntza|Sodioa, teknezioa eta oxigenoa: gorputzaren barrukoaren argazkiak egiteko erabiltzen da.
Ru:1,O:2|RuO₂|🖥️|0|Piezas diminutas|Rutenio y oxígeno se usan en piezas muy pequeñas de ordenadores.|Pieza txikiak|Rutenioa eta oxigenoa ordenagailuetako pieza oso txikietan erabiltzen dira.
Pt:1,Pd:1,Rh:1|Pt + Pd + Rh|🚗|1|Limpiador de humo|Platino, paladio y rodio dentro del tubo de escape limpian el humo del coche.|Kea garbitzailea|Ihes-hodiaren barruko platinoak, paladioak eta rodioak autoaren kea garbitzen dute.
Ag:1,Cu:1|Ag + Cu|🍴|1|Plata de ley|Plata mezclada con un poco de cobre: así se hacen cubiertos y joyas.|Zilar legea|Kobre apur batekin nahastutako zilarra: horrela egiten dira koilarak eta bitxiak.
Cd:1,S:1|CdS|🎨|0|Amarillo de pintores|Cadmio y azufre dan el amarillo brillante que usaban pintores famosos.|Margolarien horia|Kadmioak eta sufreak margolari ezagunek erabiltzen zuten hori distiratsua ematen dute.
In:1,Sn:1,O:2|ITO|📱|0|Pantalla táctil|Indio, estaño y oxígeno: la capa transparente que siente tu dedo.|Ukipen-pantaila|Indioa, eztainua eta oxigenoa: zure hatza sumatzen duen geruza gardena.
Sn:1,Ag:1,Cu:1|Sn + Ag + Cu|🔧|1|Soldadura|Estaño, plata y cobre pegan las piezas de los aparatos electrónicos.|Soldadura|Eztainuak, zilarrak eta kobreak aparatu elektronikoen piezak itsasten dituzte.
Sb:2,S:3|Sb₂S₃|👁️|0|Maquillaje egipcio|Antimonio y azufre: el polvo negro con el que se pintaban los ojos en el antiguo Egipto.|Egiptoko makillajea|Antimonioa eta sufrea: Antzinako Egipton begiak margotzeko hauts beltza.
Cd:1,Te:1|CdTe|☀️|0|Panel solar|Cadmio y telurio están en algunos paneles que convierten el sol en electricidad.|Eguzki-panela|Kadmioa eta telurioa eguzkia elektrizitate bihurtzen duten panel batzuetan daude.
Na:1,I:1|NaI|🧂|0|Sal con yodo|Sodio y yodo: la sal con yodo cuida tu cuerpo.|Iodoa duen gatza|Sodioa eta iodoa: iodoa duen gatzak zure gorputza zaintzen du.
Xe:1,F:4|XeF₄|🧪|0|Un gas noble que se junta|Xenón y flúor. Fue la primera vez que un gas noble se juntó con otro elemento.|Elkartzen den gas nobleak|Xenona eta fluorra. Gas noble bat beste elementu batekin elkartu zen lehen aldia izan zen.
Cs:1,Cl:1|CsCl|🧪|0|Sal de cesio|Cesio y cloro. Es como la sal de cocina, pero para laboratorios.|Zesio gatza|Zesioa eta kloroa. Sukaldeko gatza bezalakoa da, baina laborategietarako.
Ba:1,S:1,O:4|BaSO₄|🩻|0|Papilla de rayos X|Bario, azufre y oxígeno: se bebe para ver la tripa en una radiografía.|Erradiografiako papa|Barioa, sufrea eta oxigenoa: sabela erradiografian ikusteko edaten da.
La:2,O:3|La₂O₃|📷|0|Lentes de cámara|Lantano y oxígeno hacen cristales muy claros para cámaras.|Kamera-lenteak|Lantanoak eta oxigenoak kamerentzako kristal oso argiak egiten dituzte.
Ce:1,O:2|CeO₂|✨|0|Pulidor|Cerio y oxígeno sacan brillo a los cristales y a las lentes.|Leungailua|Zerioak eta oxigenoak kristalei eta lenteei distira ateratzen diete.
Pr:2,O:3|Pr₂O₃|🟢|0|Cristal verde|Praseodimio y oxígeno dan color verde al cristal.|Kristal berdea|Praseodimioak eta oxigenoak kristalari kolore berdea ematen diote.
Nd:2,Fe:14,B:1|Nd₂Fe₁₄B|🧲|0|Imanes fuertes|Neodimio, hierro y boro: los imanes pequeñitos de los auriculares.|Iman indartsuak|Neodimioa, burdina eta boroa: aurikularretako iman txikiak.
Pm:2,O:3|Pm₂O₃|🌌|0|Brillo en la oscuridad|Prometio y oxígeno. Este metal brilla un poquito en la oscuridad.|Ilunpeko distira|Prometioa eta oxigenoa. Metal honek pixka bat distiratzen du ilunpean.
Sm:1,Co:5|SmCo₅|🧲|0|Imán resistente|Samario y cobalto: un imán que aguanta mucho calor.|Iman erresistentea|Samarioa eta kobaltoa: bero handia jasaten duen imana.
Y:2,O:3,Eu:1|Y₂O₃ + Eu|📺|0|Rojo de pantalla|Itrio, oxígeno y europio dan el rojo a las pantallas.|Pantailako gorria|Itrioak, oxigenoak eta europioak pantailei gorria ematen diete.
Gd:2,O:3|Gd₂O₃|🏥|0|Contraste|Gadolinio y oxígeno ayudan a ver mejor dentro del cuerpo en el hospital.|Kontrastea|Gadolinioak eta oxigenoak ospitalean gorputzaren barrua hobeto ikusten laguntzen dute.
Tb:2,O:3|Tb₂O₃|📺|0|Verde de pantalla|Terbio y oxígeno dan el verde a luces y pantallas.|Pantailako berdea|Terbioak eta oxigenoak argiei eta pantailei berdea ematen diete.
Dy:2,O:3|Dy₂O₃|🚙|0|Imanes para coches|Disprosio y oxígeno ayudan a los imanes de los coches eléctricos.|Autoetarako imanak|Disprosioak eta oxigenoak auto elektrikoen imanei laguntzen diete.
Ho:2,O:3|Ho₂O₃|🟡|0|Cristal amarillo|Holmio y oxígeno colorean el cristal de amarillo.|Kristal horia|Holmioak eta oxigenoak kristala horiz margotzen dute.
Er:2,O:3|Er₂O₃|🩷|0|Cristal rosa|Erbio y oxígeno colorean de rosa los cristales.|Kristal arrosa|Erbioak eta oxigenoak kristalak arrosaz margotzen dituzte.
Tm:2,O:3|Tm₂O₃|🔦|0|Láser médico|Tulio y oxígeno se usan en láseres de los médicos.|Mediku-laserra|Tulioak eta oxigenoak medikuen laserretan erabiltzen dira.
Yb:2,O:3|Yb₂O₃|⏱️|0|Relojes ultra exactos|Iterbio y oxígeno ayudan a hacer relojes muy muy exactos.|Erloju ultrazehatzak|Iterbioak eta oxigenoak erloju oso-oso zehatzak egiten laguntzen dute.
Lu:2,Si:1,O:5|Lu₂SiO₅|🏥|0|Cristal de escáner|Lutecio, silicio y oxígeno: un cristal que hace brillar los escáneres médicos.|Eskanerreko kristala|Lutezioa, silizioa eta oxigenoa: eskaner medikuak distiratsu jartzen dituen kristala.
Hf:1,O:2|HfO₂|💻|0|Chip de ordenador|Hafnio y oxígeno: una capa diminuta dentro de los chips.|Ordenagailu-txipa|Hafnioa eta oxigenoa: txipen barruko geruza txikia.
Ta:2,O:5|Ta₂O₅|📱|0|Pieza del móvil|Tántalo y oxígeno guardan la electricidad en los móviles.|Mugikorraren pieza|Tantaloak eta oxigenoak mugikorretan elektrizitatea gordetzen dute.
W:1,C:1|WC|🔨|0|Brocas duras|Wolframio y carbono: casi tan duro como un diamante.|Zulagailu gogorrak|Wolframa eta karbonoa: ia diamantea bezain gogorra.
Re:1,Ni:1|Re + Ni|✈️|1|Motores de avión|Renio y níquel aguantan el calor de los motores de los aviones.|Hegazkin-motorrak|Renioak eta nikelak hegazkin-motorren beroa jasaten dute.
Os:1,O:4|OsO₄|🔬|0|Para microscopios|Osmio y oxígeno se usan para teñir cosas diminutas que se ven al microscopio.|Mikroskopiorako|Osmioa eta oxigenoa mikroskopioan ikusten diren gauza txikiak tintatzeko erabiltzen dira.
Ir:1,Pt:1|Ir + Pt|⚖️|1|El kilo patrón|Iridio y platino: con ellos se hizo el kilo de referencia del mundo.|Kilo patroia|Iridioa eta platinoa: horiekin egin zen munduko erreferentziako kiloa.
Au:3,Cu:1|Au + Cu|💍|1|Oro de joyería|El oro mezclado con cobre se vuelve más duro: es el oro de las joyas.|Bitxietako urrea|Kobrearekin nahastutako urrea gogorrago bihurtzen da: bitxietako urrea da.
Hg:1,S:1|HgS|🔴|0|Cinabrio|Mercurio y azufre forman una piedra roja brillante. ¡No se toca!|Zinabrioa|Merkurioak eta sufreak harri gorri distiratsua sortzen dute. Ez da ukitzen!
Tl:1,Br:1,I:1|TlBrI|🔭|0|Cristales especiales|Talio, bromo y yodo hacen cristales para cámaras que ven el calor.|Kristal bereziak|Talioak, bromoak eta iodoak beroa ikusten duten kamerentzako kristalak egiten dituzte.
Pb:1,O:2|PbO₂|🚗|0|Batería de coche|Plomo y oxígeno dentro de las baterías de los coches.|Auto-bateria|Berunak eta oxigenoak autoen baterien barruan.
Pb:1,S:1|PbS|🪨|0|Galena|Plomo y azufre: una piedra gris y brillante.|Galena|Beruna eta sufrea: harri gris eta distiratsua.
Bi:1,C:7,H:5,O:4|C₇H₅BiO₄|💊|0|Medicina de tripa|Bismuto con carbono, hidrógeno y oxígeno: la medicina rosa para el dolor de tripa.|Sabeleko sendagaia|Bismutoa karbonoarekin, hidrogenoarekin eta oxigenoarekin: sabeleko minerako sendagai arrosa.
Po:1,O:2|PoO₂|☢️|0|Polonio y oxígeno|Marie Curie descubrió el polonio. Con oxígeno forma un polvo que solo se hace en laboratorios.|Polonioa eta oxigenoa|Marie Curiek polonioa aurkitu zuen. Oxigenoarekin laborategietan bakarrik egiten den hautsa sortzen du.
H:1,At:1|HAt|🔬|0|Rarísimo|Hidrógeno y astato. Solo se han podido hacer unos pocos átomos.|Oso arraroa|Hidrogenoa eta astatoa. Atomo gutxi batzuk bakarrik egin ahal izan dira.
Rn:1,F:2|RnF₂|🧪|0|Un gas muy tímido|Radón y flúor. Es un gas noble que casi nunca se junta con nadie.|Gas oso lotsatia|Radona eta fluorra. Ia inorekin elkartzen ez den gas noblea da.
Fr:1,Cl:1|FrCl|🔬|0|Se parece a la sal|Francio y cloro: se cree que se parecería a la sal, pero dura tan poco que casi no se ha visto.|Gatzaren antzekoa|Frantzioa eta kloroa: gatzaren antzekoa izango dela uste da, baina hain gutxi irauten du, ia ez dela ikusi.
Ra:1,Cl:2|RaCl₂|☢️|0|Sal de radio|Marie Curie trabajó con esta sal, que brilla suavemente en la oscuridad.|Radio gatza|Marie Curiek gatz honekin lan egin zuen, ilunpean leun distiratzen duena.
Ac:2,O:3|Ac₂O₃|💙|0|Brillo azul|Actinio y oxígeno brillan con una luz azul en la oscuridad.|Distira urdina|Aktinioak eta oxigenoak argi urdinarekin distiratzen dute ilunpean.
Th:1,O:2|ThO₂|🔦|0|Faroles antiguos|Torio y oxígeno daban luz blanca a los faroles de gas de antes.|Farol zaharrak|Torioak eta oxigenoak gasezko farol zaharrei argi zuria ematen zieten.
Pa:2,O:5|Pa₂O₅|🔬|0|Polvo blanco|Protactinio y oxígeno forman un polvo blanco que se estudia en laboratorios.|Hauts zuria|Protaktinioak eta oxigenoak laborategietan aztertzen den hauts zuria sortzen dute.
U:1,O:2|UO₂|⚡|0|Combustible nuclear|Uranio y oxígeno: las bolitas que dan energía en las centrales nucleares.|Erregai nuklearra|Uranioa eta oxigenoa: zentral nuklearretan energia ematen duten bolatxoak.
Np:1,O:2|NpO₂|🪐|0|Polvo de laboratorio|Neptunio y oxígeno forman un polvo que se estudia en laboratorios nucleares.|Laborategiko hautsa|Neptunioak eta oxigenoak laborategi nuklearretan aztertzen den hautsa sortzen dute.
Pu:1,O:2|PuO₂|🛰️|0|Energía para el espacio|Plutonio y oxígeno dan electricidad a algunas sondas espaciales.|Espazioko energia|Plutonioak eta oxigenoak elektrizitatea ematen diete espazio-zunda batzuei.
Am:1,O:2|AmO₂|🔥|0|Detector de humo|Americio y oxígeno: la piececita que avisa si hay humo en casa.|Kea detektagailua|Amerizioa eta oxigenoa: etxean kea dagoenean abisatzen duen pieza txikia.
Cm:2,O:3|Cm₂O₃|👩‍🔬|0|Homenaje a los Curie|Curio y oxígeno. Se estudia en laboratorios y lleva el nombre de los Curie.|Curieri omenaldia|Kurioa eta oxigenoa. Laborategietan aztertzen da eta Curie senar-emazteen izena du.
Bk:1,O:2|BkO₂|🔬|0|Muy poquito|Berkelio y oxígeno: solo se han hecho cantidades diminutas.|Oso gutxi|Berkelioa eta oxigenoa: kantitate txikiak bakarrik egin dira.
Cf:2,O:3|Cf₂O₃|🌴|0|De California|Californio y oxígeno. Se fabrica en laboratorios de Estados Unidos.|Kaliforniakoa|Kalifornioa eta oxigenoa. Estatu Batuetako laborategietan egiten da.
Es:2,O:3|Es₂O₃|🧠|0|Homenaje a Einstein|Einstenio y oxígeno: apenas se ha podido ver un poquito de este óxido.|Einsteini omenaldia|Einsteinioa eta oxigenoa: oxido honen apur bat bakarrik ikusi ahal izan da.
Rf:1,Cl:4|RfCl₄|🧪|0|Hecho en laboratorio|Rutherfordio y cloro. Se hicieron unos pocos átomos para estudiarlos.|Laborategian egina|Rutherfordioa eta kloroa. Atomo gutxi batzuk egin ziren aztertzeko.
Db:1,Cl:5|DbCl₅|🧪|0|Hecho en laboratorio|Dubnio y cloro. Se hicieron unos pocos átomos para estudiarlos.|Laborategian egina|Dubnioa eta kloroa. Atomo gutxi batzuk egin ziren aztertzeko.
Sg:1,O:2,Cl:2|SgO₂Cl₂|🧪|0|Hecho en laboratorio|Seaborgio, oxígeno y cloro. Se hicieron unos pocos átomos para estudiarlos.|Laborategian egina|Seaborgioa, oxigenoa eta kloroa. Atomo gutxi batzuk egin ziren aztertzeko.
Bh:1,O:3,Cl:1|BhO₃Cl|🧪|0|Hecho en laboratorio|Bohrio, oxígeno y cloro. Se hicieron unos pocos átomos para estudiarlos.|Laborategian egina|Bohrioa, oxigenoa eta kloroa. Atomo gutxi batzuk egin ziren aztertzeko.
Hs:1,O:4|HsO₄|🧪|0|Un gas de laboratorio|Hasio y oxígeno. Con unos pocos átomos vieron que forman un gas.|Laborategiko gasa|Hassioa eta oxigenoa. Atomo gutxi batzuekin gas bat sortzen dutela ikusi zuten.
`.trim().split("\n").map(l=>{
  const [a,f,em,mix,en,et,un,ut] = l.split("|");
  return {f,em,mix:mix==="1",at:a.split(",").map(x=>{const [s,n]=x.split(":");return [s,+n]}),
    es:{t:en,p:et},eu:{t:un,p:ut}};
});
/* Elements too short-lived for any real compound: they borrow the compounds of the element above them. */
const COUSIN = {Fm:"Er",Md:"Tm",No:"Yb",Lr:"Lu",Mt:"Ir",Ds:"Pt",Rg:"Au",Cn:"Hg",Nh:"Tl",Fl:"Pb",Mc:"Bi",Lv:"Po",Ts:"I",Og:"Xe"};
const ALLMOLS = MOLS.concat(COMPS);
