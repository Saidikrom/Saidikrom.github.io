'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7bc75d408ace0ae3a9247e02bb5b75c6",
".git/config": "6f33dcec170fc04156a1a67b207a551c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8462fed3845046b73ed8bc09e18b85fd",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "2b3dd81ed0c65e4ef626444f5e66d504",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "debd38d01ccbae78dd5ed8547460baf3",
".git/logs/refs/heads/master": "debd38d01ccbae78dd5ed8547460baf3",
".git/logs/refs/remotes/origin/master": "ce6aebe1eab5ed346d9c11703f230696",
".git/logs/refs/remotes/origin/Saidikrom": "50996086390efa551eb1acea82c4d123",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/21/53fe04ec1cb78d7b774c7c0ea88d9140a15b82": "281eceb94fdc0f09051ae0688489774b",
".git/objects/22/025583ad63919a8998096f1379b5aba8d5cb28": "0131daf3d12c5d7f4f33acc5f43ecd7c",
".git/objects/2b/d51a1f6d25247d932facc406a42b5975ea0f39": "b70836b37c2bd9f6e8b21bb70f39d450",
".git/objects/2c/5d3917b0986920346f38e2e1ae9fda360c140d": "35264c44e785db76cb571fa777a34f0c",
".git/objects/31/a39ea0cdecaa8045939087dc0593c440228b8b": "3b98a4b2a23ed90c9fbc4d22e9a32cc2",
".git/objects/3a/c7e51b8feaa03643121da1af7fde8b69aa155b": "16f778c21983ad541b0ff0200be43371",
".git/objects/3b/cc561cc9982eb9dd28adcdcbe080299dd2626d": "2d908e35c8b7be73d90277c173c1b2a7",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/df7e0bc260afb50fd3e921d7967137d38ff2cd": "aed9b2d37dfb88b2e29e56ca71628e7a",
".git/objects/42/d66f667c30cfe81468eeabd8e6d43dadab435f": "8bd0ae568fc20e5bae7ccfcbecd08b3c",
".git/objects/46/22c7c83e7f2dac3eda31b28687396eed45a7e8": "6b1d356a7673aadf79992b19cf9b4a31",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/66845e1ed48305c9cfcf4de516912cff438d50": "635b4da304e968255524c7457aecf226",
".git/objects/54/0804f16474f7bd5e4bbe54b5c3ffbf1ba7c44d": "c968fd909cf117ab8af3174d80bd343b",
".git/objects/56/84a7eefa9e10d1e18511ac58a33e1fd3427929": "92fae4d15c11d3b4d1c01aa87c07563c",
".git/objects/5b/bfd8ee76841a8a233627cc44551d3fcd168e57": "b8fcbfb5d4d8fb7dc4b844145cc8eb36",
".git/objects/62/109410888efd8a02e1981f0c97f878b0dad01d": "6d069838d108de782366e7172ba8691b",
".git/objects/6d/6ccb5fab98049b7b097be0c3e8e62fa70a89e1": "743f8e3811cfb3de67c4edf6b68725c5",
".git/objects/74/dac8e70dcb9050f9215962378cdc26a65cb331": "d2598d3ae6f633202bde9c1129e13302",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/a8aea0b558a37c007d4a8ba35222a35e101ceb": "0c3712eb7d8a487692042746a780c785",
".git/objects/90/fb7bb23c796692a97018dc714bf9344e908483": "c6b1ca993232eb29279f1c4497963baa",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a0/97ac255a735da59a444f51deec54181e3b3b9b": "8b0fa026425fdd1d272be30dbe2c64ba",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/f510d10ee4f337c38e0f6966a102c65fe48d14": "6d59d9dad11010bff17f91d3d7a06872",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/272a3a540d80061856cada0b433a03f678739f": "15e4988184c56a72c2ed70a249c8b87c",
".git/objects/b0/800345ba9410149a2b816c662e51e361acac13": "429305f7a9765e2dd2348f77e328be8d",
".git/objects/b1/9b4eea55d9d34ab276b0d1f0f2aa0065f1f6ee": "b4a2cdd095c7555b90a3e90ce756c09a",
".git/objects/b2/544f8d45779725ccfc7fc66cc25b875a963ec5": "fcdc2f3146afbc5cbf8c7666c43fda4f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/0d6a88e5679775735ca0da167a4e3814984585": "a9a777c668c183b48dc442f8603146cb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/7527408776e5250eeb8007958d1e1cc55285f1": "135376b8344e6b4c3b269f72d1825bd7",
".git/objects/c3/be98167105e785f96061dd06e28461c40fd055": "8d5f70f7ec98c9e0ec6634daf3044460",
".git/objects/c4/a6118df6408fb3b565c1a6ef5a1a311a03f1b4": "db96ca9dc65e7e71bb8276c495b4f122",
".git/objects/c6/72cfbb2cdf9e6c831f7f12004df44dcbfa6b68": "96cbdfb9f24cc46e83d0714f597100f1",
".git/objects/c8/153d9235dee30c02f0d5ceacf3683d2550c339": "0fd520f006225d130b46bacd00094ea8",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/9b324b1cbfd6288c258fcd5642fc034deefc64": "1b0a63534a2722e60d0fc086579a037c",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/3788f8bdcd76ef7cd0249536360cc5a31172cd": "499d6f06032d98c5cde4c161c415abe9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/54e0154911128db8a3bfb732f17e7d3e1d6f72": "34a9a6872a7abbfe127248c4b5f74855",
".git/objects/f6/4d45fe36e9dc05c400dac36410614a93d0eb44": "c99682114465ff3bd3354767dbaae660",
".git/refs/heads/master": "0fc2c4e2ba57663738972c1e7640abde",
".git/refs/remotes/origin/master": "0fc2c4e2ba57663738972c1e7640abde",
".git/refs/remotes/origin/Saidikrom": "29ebfaa52bfd0334bb6ae05a359b5d14",
"assets/AssetManifest.bin": "ea574af91d33bdf8d4033e8702337931",
"assets/AssetManifest.bin.json": "60ee9af862fb368a9f4ef038a673e541",
"assets/AssetManifest.json": "a7350266a90d3b6176cd5df843f02de5",
"assets/assets/icons/instagram_icon.svg": "b1bd33f8cb4440f50847d43a390eb3da",
"assets/assets/icons/linkedin_icon.svg": "a6b33be8c5fc8f0c37e4d9117af5d988",
"assets/assets/icons/telegram_icon.svg": "d08301c2de6cdd3ddde7e50dc96098e3",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9e6e54ae2652fe1f0df6a4158d32c215",
"/": "9e6e54ae2652fe1f0df6a4158d32c215",
"main.dart.js": "72ae1d5a0b09ccf0f8c8d8373f261de5",
"manifest.json": "af229c0fc5a0c177fba2f46658024ae9",
"Saidikrom.github.io/.git/config": "6ff9cdbc908ab3f7e1c15ada130ade11",
"Saidikrom.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Saidikrom.github.io/.git/HEAD": "2975fba26cacafb201843b533a75f925",
"Saidikrom.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Saidikrom.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Saidikrom.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"Saidikrom.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Saidikrom.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Saidikrom.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"Saidikrom.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Saidikrom.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Saidikrom.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Saidikrom.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Saidikrom.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Saidikrom.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Saidikrom.github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"Saidikrom.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Saidikrom.github.io/.git/index": "32e8bf22d56b3becc71773c56cfa9e39",
"Saidikrom.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Saidikrom.github.io/.git/logs/HEAD": "2786f9077c4f33f34955fff7e0e70a5e",
"Saidikrom.github.io/.git/logs/refs/heads/Saidikrom": "2786f9077c4f33f34955fff7e0e70a5e",
"Saidikrom.github.io/.git/logs/refs/remotes/origin/HEAD": "2786f9077c4f33f34955fff7e0e70a5e",
"Saidikrom.github.io/.git/objects/pack/pack-4e5ff762c2a4c3cd9ad7dff56f914c29629db4b7.idx": "b3be8b587ace56a3a4b3999aa57e5fc3",
"Saidikrom.github.io/.git/objects/pack/pack-4e5ff762c2a4c3cd9ad7dff56f914c29629db4b7.pack": "e844511d89e11e3d98c3322058216215",
"Saidikrom.github.io/.git/objects/pack/pack-4e5ff762c2a4c3cd9ad7dff56f914c29629db4b7.rev": "c426b64df81cbfd16fab39e44ebe80c6",
"Saidikrom.github.io/.git/packed-refs": "dcc4ddaa4b827dcfe39a71806797bf30",
"Saidikrom.github.io/.git/refs/heads/Saidikrom": "29ebfaa52bfd0334bb6ae05a359b5d14",
"Saidikrom.github.io/.git/refs/remotes/origin/HEAD": "d2107bbf92637dac1f2b96744c110375",
"Saidikrom.github.io/assets/AssetManifest.json": "a7350266a90d3b6176cd5df843f02de5",
"Saidikrom.github.io/assets/assets/icons/instagram_icon.svg": "a99db2b08c9b2b6f323fe5449a796754",
"Saidikrom.github.io/assets/assets/icons/linkedin_icon.svg": "09a6cf545197e24d17c5af65b44fa6b7",
"Saidikrom.github.io/assets/assets/icons/telegram_icon.svg": "bccaa61d462b1da7dcfa135d07ce8c9a",
"Saidikrom.github.io/assets/assets/logo/saidikrom_logo.png": "94e201b3cc42067f6c528fc3e32d2aba",
"Saidikrom.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"Saidikrom.github.io/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"Saidikrom.github.io/assets/NOTICES": "e7eea20fe3b01379906d9e81b21d4043",
"Saidikrom.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"Saidikrom.github.io/assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"Saidikrom.github.io/canvaskit/canvaskit.js": "cf51f0145ed508c7203981a6297dfb6c",
"Saidikrom.github.io/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"Saidikrom.github.io/canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"Saidikrom.github.io/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"Saidikrom.github.io/CNAME": "a17b591b426d4c194411c2711b56ed1c",
"Saidikrom.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Saidikrom.github.io/flutter.js": "bf9db029eba4e7f72660e1f24c9ced15",
"Saidikrom.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Saidikrom.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Saidikrom.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Saidikrom.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"Saidikrom.github.io/index.html": "b057c81fe04ccbf88170730ffe1726ae",
"Saidikrom.github.io/main.dart.js": "3ac918b3756b8ca6f55b05cef1a2736e",
"Saidikrom.github.io/manifest.json": "af229c0fc5a0c177fba2f46658024ae9",
"Saidikrom.github.io/README.md": "0e719d6cdab31dc311972452f3b46041",
"Saidikrom.github.io/version.json": "c8f567faf272aa37d1307d3b6f2fb2ea",
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
