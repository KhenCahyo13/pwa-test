const staticMyPwa = "my-pwa-site-v1"
const assets = [
    "/",
    "/index.html",
    "/styles.css",
    "/img/icon.png"
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(staticMyPwa).then((cache) => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => {
            return res || fetch(event.request)
        })
    )
})