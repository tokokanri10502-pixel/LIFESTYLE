const CACHE_NAME = 'life-trend-monitor-v2';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './icon-life.png',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
  // skipWaiting() はページ側のユーザー操作で呼ぶため、ここでは呼ばない
});

// 古いキャッシュの削除 + 即座にページを制御下に置く
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// ページからの「今すぐ更新」メッセージを受け取り skipWaiting を実行
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // script.js は毎回ネットワークから取得（データ更新を確実に反映）
  if (url.pathname.endsWith('script.js')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // それ以外はキャッシュ優先（従来通り）
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
