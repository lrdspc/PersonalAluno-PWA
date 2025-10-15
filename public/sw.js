self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('meu-app-pwa').then((cache) => {
      return cache.addAll([
        '/',
        '/_next/static/css/main.css',
        '/_next/static/chunks/main.js',
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});