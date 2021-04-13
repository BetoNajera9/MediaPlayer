const VERSION = 'v1'

self.addEventListener('install', (event) => {
	event.waitUntil(precache())
})

self.addEventListener('fetch', (event) => {
	const req = event.request
	if (req.method !== 'GET') {
		return
	}

	event.respondWith(cachedResponse(req))
	event.waitUntil(updateCache(req))
})

async function precache() {
	const cache = await caches.open(VERSION)
	return cache.addAll([
		// '/',
		// '/index.html',
		// '/assets/index.js',
		// '/assets/mediaPlayer.js',
		// '/assets/plugin/autoPlay.js',
		// '/assets/plugin/autoPause.ts',
		// '/assets/index.css',
		// '/assets/BigBuckBunny.mp4',
	])
}

async function cachedResponse(req) {
	const cache = await caches.open(VERSION)
	const res = await cache.match(req)
	return res ?? fetch(req)
}
async function updateCache(req) {
	const cache = await caches.open(VERSION)
	const res = await fetch(req)
	return cache.put(req, res)
}
