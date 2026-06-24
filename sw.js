// نسخة بسيطة من service worker — الحد الأدنى المطلوب لتفعيل ميزة "تثبيت التطبيق"
const CACHE_NAME = 'tasmee-cache-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
