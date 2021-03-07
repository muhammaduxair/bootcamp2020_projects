const CACHE_NAME = "app_v1";
const cache_assets = [
  "./",
  "./static/css/main.fc4014ac.chunk.css",
  "./static/js/2.1b7dc346.chunk.js",
  "./static/js/main.9ddcf4ff.chunk.js",
  "https://fonts.googleapis.com/css2?family=Bitter&family=Do+Hyeon&family=Lobster&display=swap",
  "./manifest.json",
  "./logo.png",
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
