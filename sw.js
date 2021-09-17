const version = "test"

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== "GET") {
        return;
    }
    event.respondWith(cachedResponse(request))
})

async function precache() {
    const cache = await caches.open(version)
    return cache.addAll([
        "./src/index.js"        
    ])
}

async function cachedResponse(request){
    const cache = await caches.open(version)
    const response = await cache.match(request)
    console.log(response);
    console.log(cache);
    return response || fetch(request)
}

