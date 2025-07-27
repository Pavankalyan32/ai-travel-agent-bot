// Minimal service worker for GitHub Actions test
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  // Basic fetch handling
  event.respondWith(fetch(event.request));
}); 