const CACHE_NAME = "app_v1";
const cache_assets = [
  "./",
  "./manifest.json",
  "./logo.png",
  "./static/js/bundle.js",
  "./static/js/vendors~main.chunk.js",
  "./static/js/main.chunk.js",
];

// installing sw
self.addEventListener("install", (e) => {
  console.log("Service Worker is Installed");
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        cache.addAll(cache_assets);
      })
      .then(() => self.skipWaiting())
  );
});

// activate sw
self.addEventListener("activate", (e) => {
  console.log("service Worker is Activate Sucessfully");
  e.waitUntil(
    caches.keys().then((cachenames) => {
      return Promise.all(
        cachenames.map((res) => {
          if (res !== CACHE_NAME) {
            return caches.delete(res);
          }
        })
      );
    })
  );
});

// fetch sw
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
