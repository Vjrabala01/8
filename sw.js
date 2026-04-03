// Ito ang nagpapatakbo sa NYXEN App sa background
self.addEventListener('install', (e) => {
  console.log('NYXEN Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // Pinapayagan nito ang app na mag-load ng mabilis
  e.respondWith(fetch(e.request));
});