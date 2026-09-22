const CACHE='sigap-v1';
const ASSETS=['./','./index.html','./data.js','./manifest.json','./assets/paspor.jpg','./assets/latar.png','./assets/logo-sigap.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
