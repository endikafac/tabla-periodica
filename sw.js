/* Offline support: precache the app shell, then serve from cache and refresh in the background. */
const CACHE = "tp-v2";
const PAGES = ["tabla","aprende","secretos","fichas","quiz","elemento"];
const SHELL = [
  "index.html", "manifest.webmanifest", "assets/icon.svg", "assets/icon-192.png", "assets/css/site.css",
  ...["data","content","ui","facts","rich","molecules","comps","quiz-more","quiz","learn","site"].map(n=>`assets/js/${n}.js`),
  ...["fredoka-1","fredoka-2","fredoka-3","quicksand-1","quicksand-2"].map(n=>`assets/fonts/${n}.ttf`),
  ...["es","eu"].flatMap(l=>PAGES.map(p=>`${l}/${p}.html`))
];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request;
  if(r.method!=="GET" || new URL(r.url).origin!==location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(r, {ignoreSearch:true});
    const net = fetch(r).then(res => { if(res.ok) c.put(r,res.clone()); return res; }).catch(()=>hit);
    return hit || net;
  }));
});
