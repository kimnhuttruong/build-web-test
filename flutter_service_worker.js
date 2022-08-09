'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "338bc46204123635a7b86d3252e39a9b",
"index.html": "c77dfb383af7f2eacbd03283610e1de8",
"/": "c77dfb383af7f2eacbd03283610e1de8",
"main.dart.js": "2136e867e0863064fbb8c8aa5f281317",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4f27430c54e1955f1ae0335e1b0ae544",
"assets/AssetManifest.json": "7d23b9dd0a80e1f0f5dcbaa4e98ad1df",
"assets/NOTICES": "a524599b594950728e435ea6165f0be3",
"assets/FontManifest.json": "912604327f903eadb66740bc7450e391",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/svg/background.svg": "9a5ad220af12046a9c63491dc1750be5",
"assets/assets/svg/cb_checked.svg": "6254d5c7fece1d7b6b37a9948c72296d",
"assets/assets/svg/information.svg": "68e5267b92a5e90c48620054d240370e",
"assets/assets/svg/nav_profile.svg": "06531411333566937370047105427c50",
"assets/assets/svg/home.svg": "af4ec8d054d94254865e2042c4aec9a3",
"assets/assets/svg/alert.svg": "5ed053062e7f3d2a4e55fb6972e969bd",
"assets/assets/svg/medical.svg": "d603736795ba0aa56f71d66918523108",
"assets/assets/svg/arrow_left.svg": "5568a524a725c89927bea54a1ff362c6",
"assets/assets/svg/nav_appointments.svg": "8edb3f39dfdea716f04daff7e8332d20",
"assets/assets/svg/background3.svg": "81d5ae35db3c29cb7c26130ad3df5902",
"assets/assets/svg/background2.svg": "3313b9cc7c29b2762e46e6d9a802858b",
"assets/assets/svg/complete.svg": "fedf54876e9389b9d9452b23a4da4580",
"assets/assets/svg/background6.svg": "3c8bfcb6bcccb0c7427a7491be4325c4",
"assets/assets/svg/bell.svg": "81565ad6cc31c56e1bcbbe097d420604",
"assets/assets/svg/chevron_right.svg": "bf26530816554ca79bac7d02e79d4b2d",
"assets/assets/svg/tick.svg": "7f944020ef07877ce555721534cc65e2",
"assets/assets/svg/background7.svg": "8d86487e03fd8375f3198b62c624a5db",
"assets/assets/svg/booking.svg": "acfe7694ea2536129d56f26cb420b15c",
"assets/assets/svg/arrow_right.svg": "b46eab7466a91ce353fe4c7929ce7484",
"assets/assets/svg/background5.svg": "67c1b432a919bf93046db113bb5dbfe5",
"assets/assets/svg/plus.svg": "a37613a1ba7936d4c4c44856b451f09e",
"assets/assets/svg/background4.svg": "028f7b2bba0607a0375a9ed23a48a5d0",
"assets/assets/svg/close.svg": "b88afd0c7ab540a9c9c5cd6fdc2d3e53",
"assets/assets/svg/launch.svg": "e9882582cde72444ca44a35585a4bb39",
"assets/assets/svg/quiz.svg": "289e197afb6d38dc8d1eedbd46bde4a9",
"assets/assets/svg/cb_uncheck.svg": "70423bb1b078d80615b355316f20a3e8",
"assets/assets/svg/nav_membership.svg": "ef1117935c6674c2bfb69f6af5afa4bf",
"assets/assets/svg/premium.svg": "ef9bd92fad69a34cc738ffa00ceefd30",
"assets/assets/svg/bill.svg": "4091b03dbd715f2f97542bcf39fab894",
"assets/assets/svg/my.svg": "6b7f562b98690c6c9b251d970114575e",
"assets/assets/svg/nav_home.svg": "5916af5fe5c6dfaa1b2b5d35f903385a",
"assets/assets/svg/star.svg": "63fc2f549bcdb24fd5ab14c94fd18943",
"assets/assets/svg/edit.svg": "6bf5b7671f3a2164bd75003bc9032d76",
"assets/assets/svg/map_pin.svg": "20846a280e553dda16b0c3ddfb2f19ba",
"assets/assets/svg/profile.svg": "605d682076e70fbb2e9c2515508bc07d",
"assets/assets/svg/remove.svg": "095b8a50f671577490ccb59400a56a15",
"assets/assets/svg/nav_book.svg": "5c8fa6e8f57b63835c59607850d56a13",
"assets/assets/svg/my_health_care.svg": "10df762f91d695026c3cb44de0a24969",
"assets/assets/svg/dental.svg": "7898d532dc2d51cfffe4dfed80ea38ec",
"assets/assets/svg/remove-circle.svg": "4f327aa3bab1208450ea8110c6f62763",
"assets/assets/svg/history.svg": "b3b6fe839a96a056616880a7fe41a249",
"assets/assets/images/medical_gradient.png": "8e94cf5178d6d5c11580504d9f919946",
"assets/assets/images/3x/medical_gradient.png": "e9644e110a3ac439197ac1c2bc9beaa4",
"assets/assets/images/3x/dental_gradient.png": "f31e858eeb1c2a8dfdd1bc829814897c",
"assets/assets/images/dental_gradient.png": "97837546c07ee8eb6f228039045e4c6f",
"assets/assets/images/lottie/loading.json": "e679da8ed72bdbef97fc92e496dc1dcf",
"assets/assets/images/2x/medical_gradient.png": "7d8007b2b64bb05e897de51c2724ece2",
"assets/assets/images/2x/dental_gradient.png": "31794fee4e6a5aa2793b66988c9d25a6",
"assets/assets/langs/en.json": "3a59fe7d0a17adfd2915f579d715a651",
"assets/assets/fonts/MuseoSans_500.otf": "62c0135163427c652ae397f327f85010",
"assets/assets/fonts/MuseoSans_700.otf": "10aaa353d22c131091d217c83f558343",
"assets/assets/fonts/MuseoSans_300.otf": "bdb59b808cfc4fb88f3963fa06e6c79b",
"assets/assets/fonts/MuseoSans_100.otf": "f685618a57314edf0b910a2a8a572cd7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
