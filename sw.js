const CACHE = 'oraciones-v4-9';
const FILES = [
  './',
  'index.html',
  'styles.css?v=4.9',
  'enhancements.css?v=4.9',
  'contenido.js?v=4.9',
  'contenidoSB.js?v=4.9',
  'contenidoOraciones.js?v=4.9',
  'contenidoRosario.js?v=4.9',
  'contenidoRosario46.js?v=4.9',
  'contenidoRosarioDifuntos.js?v=4.9',
  'app.js?v=4.9',
  'manifest.webmanifest',
  'icons/icon.svg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => clients.forEach((client) => client.navigate(client.url)))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (new URL(event.request.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./')))
  );
});
