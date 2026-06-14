// =======================================================
// KUB Cafe - Service Worker (PWA Requirement)
// ========================================================
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activated');
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // สำหรับเวอร์ชันนี้ ให้ดึงข้อมูลออนไลน์ตลอดเวลา (ยังไม่ทำ Offline Mode เพื่อความชัวร์ของข้อมูลแต้ม)
  e.respondWith(fetch(e.request));
});
