'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "33b903262e02f6ca574c2090cad092e8",
".git/config": "2c4d84b6334fe160fefd36eba99da32f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ccbfdd3263d51a988928e843017e3bc7",
".git/HEAD": "2975fba26cacafb201843b533a75f925",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b8ea41b9eb475624d199130c7bb77c0a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a455dae0d739b4ca13d55065f0f94b1f",
".git/logs/refs/heads/master": "98d1ca03faa917d42b85507c7e4d0748",
".git/logs/refs/heads/Saidikrom": "ca53d86cf36bcffef15eb35709c6874e",
".git/logs/refs/remotes/origin/Saidikrom": "8e933145e415cb263fb7a2b456029957",
".git/objects/07/ac0ff1e94296b3c17b3d8cf05fa49d30ae9f70": "d79ec4dac39e7d04c4c0b565c43cebb4",
".git/objects/14/e396cfbf4b67e739f3fc8d0dae1a7a49fe02df": "ab779a812895b2dc18f12ee8f9ee9f74",
".git/objects/1c/1b472a8b6cd7716b9a573397fdb03aa572a461": "cabe009d7f19a891816a86cf5450a09d",
".git/objects/1e/b3d91906baddc31a641d6307eec1857d0843c8": "6e6772d4195a8709d349d2750f754768",
".git/objects/1f/377434c59a64d5667d754ca88bebed1a71768e": "895209a90e5adc87b938d660ccf80c1e",
".git/objects/1f/5b3ee47f4f3c65ac1abbaacfe5a2e2468bb4fd": "6a83c479322697e8d075f48d0c128c27",
".git/objects/22/3b313ae02438036366538b1cf5ba6221f2376b": "02306715a5c6ea67b246a8313de73f2d",
".git/objects/31/495df0258c3a86101c11908a720ad76d37742c": "5d5f2d35bba5914210d9de96418548c4",
".git/objects/33/3cd11d457965dcc172f617bedcb65d120adf98": "7a25a4c122f6013ec174066d8bde613f",
".git/objects/43/de101dd67390a4e83173c4d8673619bc2ea5c0": "a51fd28d66a506ccb5e33cb5ee45a30a",
".git/objects/47/5d0e25f72aefd956fbc267f2924d6d6fa59d27": "a7de1035c778d5fedf604d46a90850a4",
".git/objects/49/8a947306dead016cbf188ad84c4fc5cc727a79": "825f427bb23e534323416b48437f1110",
".git/objects/56/68b16217d89c8c1529ceff6fe0b4f726d559d0": "c186f75ac090983386d836bda4118893",
".git/objects/5a/3bdbcdc2b59f0449aa140c044fcf75870a904a": "e81afea120c02d6e84c3aae0177bc8c1",
".git/objects/5c/fe0e440e203ace21654b42be829c2f8cf92e37": "26fee1402c9bba8cf53b94e5f620abe8",
".git/objects/68/9f465584c88680ee658e7ed0bca38d5bd4bf9c": "796886902330a7399d752d526cb305e0",
".git/objects/6b/a4b4e8e3eae74504d9395aa1c2e35fccf9e6df": "258a92a749f06efc8bc47644a62407ce",
".git/objects/78/b9cb156be5e1594edbc75b29b63a925001d56c": "a68e9053b06614d9bcd24de9f2887062",
".git/objects/79/ffb29f426d74093dd1b2573c2517baa422a0b4": "314a787f1815f8793c24b2eb8a52ad5f",
".git/objects/7a/109baed8c7de49b20c4e9b6605cd86df1eaa2c": "22c86ccc64f3ef9872bedd883f70b06b",
".git/objects/82/897d7e8f3b4038b1abbc4a7f82ae93d3f2ef4d": "187fb6e97f6701f3ffc6ba2c52d57dcb",
".git/objects/8d/ce7d66421b851e38cfbe63b2d3f28db021a550": "4e76f714ba6ec5d1e94466e18f480eb5",
".git/objects/96/52e62f055934cf05cf10b82797e85223a3189c": "eee8749d9d1913866eb8879452d849b0",
".git/objects/98/dc128509390bc0b6527a087145117ddce4f7b1": "6b9582c16ee784125fb3b8e5e27696db",
".git/objects/ba/d5f956c1d3baa5181678c348ceed68c7e60a12": "43a9e1aa3c2b34aaf0d943796659532e",
".git/objects/ce/c2c51b7e9c3d7dc0a2e06b6bea7ef8e7b45608": "96379476e402de5567655a856d6fae3b",
".git/objects/da/660ab11c4afa00b9c37bd05c2b5bf3a7a262d2": "8b30b6c808a9d62b2123f91761d766b8",
".git/objects/e2/14f00190aa45ce700434501c2bbc6fa3ec6e36": "87340421ff09124309ef76c398fdd8f7",
".git/objects/e8/6ab219a5367360a76d852f6cff99009cc48db1": "5e2ad2ca75371ca12073d853197db1b1",
".git/objects/ef/99c879ed650b6f989d7d3c6b291f2fad0d3d46": "626fbdfa30b598d762210f512157c5d6",
".git/objects/f2/45a5e92d97ce9a2c395d037ac8a4c38023a69b": "c524c9afe493835e5c7bab4ad98a2425",
".git/objects/f6/48f4fae828a3e515a93c383420a07cf9bb2550": "652e4728546906c50cd8cb741b6072ad",
".git/objects/pack/pack-065e62134699b8dd73d600537ea412a555f8d073.idx": "b57880c5de7649d68d47b0303032898b",
".git/objects/pack/pack-065e62134699b8dd73d600537ea412a555f8d073.pack": "be57287501a5f7f4e3e547560f80eae9",
".git/objects/pack/pack-065e62134699b8dd73d600537ea412a555f8d073.rev": "ed360d92ca642fa19bde47de25151de5",
".git/ORIG_HEAD": "ed857f973c448df801785fc6fdd22ae8",
".git/refs/heads/master": "5340ed094115e6015a737bc50db8c262",
".git/refs/heads/Saidikrom": "7672ca59aa6b2ee9635807fe45ac71e0",
".git/refs/remotes/origin/Saidikrom": "7672ca59aa6b2ee9635807fe45ac71e0",
"assets/AssetManifest.bin": "6daf01f3d7b941a2348ac8103b7adb2f",
"assets/AssetManifest.bin.json": "8270aaa25b65835699ae04a5afbd3cce",
"assets/AssetManifest.json": "1badc4f1492929b84fd4e19cc4302482",
"assets/assets/icons/instagram_icon.svg": "b1bd33f8cb4440f50847d43a390eb3da",
"assets/assets/icons/linkedin_icon.svg": "a6b33be8c5fc8f0c37e4d9117af5d988",
"assets/assets/icons/telegram_icon.svg": "d08301c2de6cdd3ddde7e50dc96098e3",
"assets/assets/images/background_image.png": "d21cd84d72f2ca247e9506fee7194215",
"assets/assets/images/myself.png": "9c0b684e31fca7c3497516623f23cdf2",
"assets/assets/logo/saidikrom_logo.png": "94e201b3cc42067f6c528fc3e32d2aba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "6d35df33e21a6ee150319aceb9da845d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "0fb989584ec4c3f64c89374e391ca0e1",
"canvaskit/canvaskit.wasm": "2e9079f28060e150b8fd564b4a1b87b4",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "5211c3c527e0344eda667a9d95b6fe63",
"canvaskit/chromium/canvaskit.wasm": "fc03619aa20a677797b5b3c58d8d63bd",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "119c0357191585396ffe9276dfd48068",
"canvaskit/skwasm.wasm": "dad6d3f95be38a3519ddef4a0ef3bdde",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "a17b591b426d4c194411c2711b56ed1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "339968a4d6948e418d139deab138b31c",
"/": "339968a4d6948e418d139deab138b31c",
"main.dart.js": "70f79b64d10d06d545bfe727f9b867a8",
"manifest.json": "af229c0fc5a0c177fba2f46658024ae9",
"README.md": "0e719d6cdab31dc311972452f3b46041",
"version.json": "c8f567faf272aa37d1307d3b6f2fb2ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
