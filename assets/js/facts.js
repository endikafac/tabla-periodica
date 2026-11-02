/* n|state(s,l,g,?)|atomic mass (empty if no stable isotope)|year (a = antiquity)|discoverer(s) */
const FACTS = `
1|g|1.008|1766|Henry Cavendish
2|g|4.0026|1868|Janssen y Lockyer (en el Sol)
3|s|6.94|1817|Johan Arfwedson
4|s|9.0122|1798|Louis Vauquelin
5|s|10.81|1808|Gay-Lussac, Thénard y Davy
6|s|12.011|a|
7|g|14.007|1772|Daniel Rutherford
8|g|15.999|1774|Priestley y Scheele
9|g|18.998|1886|Henri Moissan
10|g|20.180|1898|Ramsay y Travers
11|s|22.990|1807|Humphry Davy
12|s|24.305|1808|Humphry Davy
13|s|26.982|1825|Hans Ørsted
14|s|28.085|1824|Jöns Berzelius
15|s|30.974|1669|Hennig Brand
16|s|32.06|a|
17|g|35.45|1774|Carl Scheele
18|g|39.948|1894|Rayleigh y Ramsay
19|s|39.098|1807|Humphry Davy
20|s|40.078|1808|Humphry Davy
21|s|44.956|1879|Lars Nilson
22|s|47.867|1791|William Gregor
23|s|50.942|1801|Andrés Manuel del Río
24|s|51.996|1797|Louis Vauquelin
25|s|54.938|1774|Johan Gahn
26|s|55.845|a|
27|s|58.933|1735|Georg Brandt
28|s|58.693|1751|Axel Cronstedt
29|s|63.546|a|
30|s|65.38|1746|Andreas Marggraf
31|s|69.723|1875|Lecoq de Boisbaudran
32|s|72.630|1886|Clemens Winkler
33|s|74.922|a|
34|s|78.971|1817|Jöns Berzelius
35|l|79.904|1826|Antoine Balard
36|g|83.798|1898|Ramsay y Travers
37|s|85.468|1861|Bunsen y Kirchhoff
38|s|87.62|1790|Adair Crawford
39|s|88.906|1794|Johan Gadolin
40|s|91.224|1789|Martin Klaproth
41|s|92.906|1801|Charles Hatchett
42|s|95.95|1778|Carl Scheele
43|s||1937|Perrier y Segrè
44|s|101.07|1844|Karl Claus
45|s|102.91|1803|William Wollaston
46|s|106.42|1803|William Wollaston
47|s|107.87|a|
48|s|112.41|1817|Friedrich Stromeyer
49|s|114.82|1863|Reich y Richter
50|s|118.71|a|
51|s|121.76|a|
52|s|127.60|1782|Franz von Reichenstein
53|s|126.90|1811|Bernard Courtois
54|g|131.29|1898|Ramsay y Travers
55|s|132.91|1860|Bunsen y Kirchhoff
56|s|137.33|1808|Humphry Davy
57|s|138.91|1839|Carl Mosander
58|s|140.12|1803|Berzelius, Hisinger y Klaproth
59|s|140.91|1885|Carl Auer von Welsbach
60|s|144.24|1885|Carl Auer von Welsbach
61|s||1945|Marinsky, Glendenin y Coryell
62|s|150.36|1879|Lecoq de Boisbaudran
63|s|151.96|1901|Eugène Demarçay
64|s|157.25|1880|Jean de Marignac
65|s|158.93|1843|Carl Mosander
66|s|162.50|1886|Lecoq de Boisbaudran
67|s|164.93|1878|Per Teodor Cleve
68|s|167.26|1843|Carl Mosander
69|s|168.93|1879|Per Teodor Cleve
70|s|173.05|1878|Jean de Marignac
71|s|174.97|1907|Georges Urbain
72|s|178.49|1923|Coster y von Hevesy
73|s|180.95|1802|Anders Ekeberg
74|s|183.84|1783|Hermanos Elhuyar
75|s|186.21|1925|Noddack, Tacke y Berg
76|s|190.23|1803|Smithson Tennant
77|s|192.22|1803|Smithson Tennant
78|s|195.08|1735|Antonio de Ulloa
79|s|196.97|a|
80|l|200.59|a|
81|s|204.38|1861|William Crookes
82|s|207.2|a|
83|s|208.98|a|
84|s||1898|Marie y Pierre Curie
85|?||1940|Corson, MacKenzie y Segrè
86|g||1900|Friedrich Dorn
87|?||1939|Marguerite Perey
88|s||1898|Marie y Pierre Curie
89|s||1899|André Debierne
90|s|232.04|1828|Jöns Berzelius
91|s|231.04|1913|Fajans y Göhring
92|s|238.03|1789|Martin Klaproth
93|s||1940|McMillan y Abelson
94|s||1940|Glenn Seaborg y su equipo
95|s||1944|Glenn Seaborg y su equipo
96|s||1944|Glenn Seaborg y su equipo
97|s||1949|Thompson, Ghiorso y Seaborg
98|s||1950|Thompson, Street, Ghiorso y Seaborg
99|s||1952|Albert Ghiorso y su equipo
100|s||1952|Albert Ghiorso y su equipo
101|s||1955|Albert Ghiorso y su equipo
102|s||1958|Albert Ghiorso y su equipo
103|s||1961|Albert Ghiorso y su equipo
104|?||1969|Laboratorios de Dubna y Berkeley
105|?||1968|Laboratorio de Dubna
106|?||1974|Laboratorio de Berkeley
107|?||1981|Laboratorio de Darmstadt
108|?||1984|Laboratorio de Darmstadt
109|?||1982|Laboratorio de Darmstadt
110|?||1994|Laboratorio de Darmstadt
111|?||1994|Laboratorio de Darmstadt
112|?||1996|Laboratorio de Darmstadt
113|?||2004|Laboratorio RIKEN (Japón)
114|?||1999|Laboratorio de Dubna
115|?||2003|Laboratorio de Dubna
116|?||2000|Laboratorio de Dubna
117|?||2010|Laboratorios de Dubna y Oak Ridge
118|?||2002|Laboratorio de Dubna
`.trim().split("\n").map(l=>{const [n,st,m,y,w]=l.split("|");return{n:+n,st,m,y,w}});
