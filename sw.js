// ============================================================
// SERVICE WORKER - Makes the app work offline
// ============================================================
// A service worker is a script that runs in the background.
// It intercepts network requests and can serve cached files
// when the user is offline. This is what makes a PWA work
// without an internet connection.
// ============================================================

const CACHE_NAME = 'fertility-tracker-v1';

// List of files to cache when the app first loads
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

// INSTALL EVENT - runs once when the service worker is first registered
// This is where we cache all our app files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  // Skip waiting means this service worker activates immediately
  self.skipWaiting();
});

// ACTIVATE EVENT - runs when the service worker takes control
// This is where we clean up old caches if we update the app
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          // Delete any old caches that don't match our current version
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  // Take control of all pages immediately
  self.clients.claim();
});

// FETCH EVENT - runs every time the app requests a file
// Strategy: Try cache first, fall back to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If we have a cached version, return it
      if (response) {
        return response;
      }
      // Otherwise, try to fetch from the network
      return fetch(event.request);
    })
  );
});
