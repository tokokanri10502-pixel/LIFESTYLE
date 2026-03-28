// ========================================
// Service Worker - 完全ネットワーク優先版 (v9)
// キャッシュを使わず、毎回最新ファイルを取得する
// ========================================

// 古いキャッシュを全て削除しつつ、即座にアクティブになる
self.addEventListener('install', event => {
    // 待機せず即座にアクティブへ
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        // 全てのキャッシュを削除
        caches.keys().then(cacheNames =>
            Promise.all(cacheNames.map(name => {
                console.log('[SW] Deleting cache:', name);
                return caches.delete(name);
            }))
        ).then(() => {
            console.log('[SW] All caches deleted. Taking control.');
            return self.clients.claim();
        }).then(() => {
            // 全クライアントをリロードして最新版を反映
            return self.clients.matchAll({ type: 'window', includeUncontrolled: true });
        }).then(clients => {
            clients.forEach(client => client.navigate(client.url));
        })
    );
});

// フェッチは全てネットワーク優先（キャッシュ不使用）
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            // オフライン時のみフォールバック（それ以外はキャッシュ不使用）
            return new Response('<h1>オフラインです</h1>', {
                headers: { 'Content-Type': 'text/html; charset=utf-8' }
            });
        })
    );
});

// ページからのメッセージを受け取る
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
