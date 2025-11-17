// sw.js
self.addEventListener('install', event => {
  self.skipWaiting(); // активирует сразу
});

self.addEventListener('fetch', event => {
  // Пока просто логируем запросы
  console.log('Fetched:', event.request.url);
});
