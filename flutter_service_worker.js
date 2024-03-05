'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb1a3227cdc3fedbaec2fe38bf6c044a",
".git/config": "8f1208e38cc0cb0f9cedd2b5184a8846",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "960bea3ca1c3408e48a40fce3d776b17",
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
".git/index": "c338e41ba477c3c9a22fe85963fc47f6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4553a9b2fc42d4a72b779a4493877329",
".git/logs/refs/heads/main": "b0a0f49f3218f69129c85fde0abc82da",
".git/logs/refs/heads/master": "debd38d01ccbae78dd5ed8547460baf3",
".git/logs/refs/heads/Saidikrom": "251b68b2fa33dfb8dabe520e270475e7",
".git/logs/refs/remotes/origin/main": "cdbda33deb4b3ad749cd0a4e0ab21859",
".git/logs/refs/remotes/origin/master": "504591e578adc3033d9f38e2f0c80d36",
".git/logs/refs/remotes/origin/Saidikrom": "9ec29470e425ff4cd0ceb0555391fcec",
".git/objects/00/71e3165ffb79697e772bc002d355b80baff501": "6167b9047f3872e01f7077e72a561910",
".git/objects/07/573461180633204d681c25b7c9cb53072a77c5": "d610a0f2d001ad2ef80ea0e1ff485b96",
".git/objects/0b/e76972048827aea5656ef8abadf44039c81b36": "765c54047da6fb0054a422eeb4f23ef8",
".git/objects/0d/d97688535f4457ce2b614498148bedcea0b229": "6e897e25deecf1ec9b0a8227af33f24f",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/dafc43d5da26d999d32ab224282a4ae58db655": "59152d5a5f8d4080f6fcf1a6c2e37ded",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/53fe04ec1cb78d7b774c7c0ea88d9140a15b82": "281eceb94fdc0f09051ae0688489774b",
".git/objects/22/025583ad63919a8998096f1379b5aba8d5cb28": "0131daf3d12c5d7f4f33acc5f43ecd7c",
".git/objects/22/45bf06e6c1ec3728ab7206e376faa805da924c": "717ae3c9b32b6ac5a9acd38c084d07fe",
".git/objects/24/375a772631cdacb19c1c4e7db17bc7836a6bef": "a7147ff15fbfabf381144a29439b8bfd",
".git/objects/2b/d51a1f6d25247d932facc406a42b5975ea0f39": "b70836b37c2bd9f6e8b21bb70f39d450",
".git/objects/2c/5d3917b0986920346f38e2e1ae9fda360c140d": "35264c44e785db76cb571fa777a34f0c",
".git/objects/2d/31b083f9ec386c1a7a133a6bd64aecfdde4ce2": "d641d53e36d81a62421a557c50823e7b",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/31/02558d2b9141a987a6d2586e536052471d23cc": "0feb93574c830b8339cbbaf20d5bb0d2",
".git/objects/31/a39ea0cdecaa8045939087dc0593c440228b8b": "3b98a4b2a23ed90c9fbc4d22e9a32cc2",
".git/objects/33/5aad5e0669f23bd3ce2d72865a6d7d613d9395": "32262786854a700a328605740cccf971",
".git/objects/34/75d7d08b58f4f5902bdea689cd083f66f6c3f3": "22444b50c213a8ed9af45818c8c90415",
".git/objects/36/4320e7ee00dc7cf270676614b1d2a729223881": "d7102b3776e5d89b471eb398a5ac947a",
".git/objects/3a/c7e51b8feaa03643121da1af7fde8b69aa155b": "16f778c21983ad541b0ff0200be43371",
".git/objects/3b/cc561cc9982eb9dd28adcdcbe080299dd2626d": "2d908e35c8b7be73d90277c173c1b2a7",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/df7e0bc260afb50fd3e921d7967137d38ff2cd": "aed9b2d37dfb88b2e29e56ca71628e7a",
".git/objects/42/d66f667c30cfe81468eeabd8e6d43dadab435f": "8bd0ae568fc20e5bae7ccfcbecd08b3c",
".git/objects/45/a3f8d2df1526b09b7c04d0a865cccea97b719b": "6c433e45dde8fbf3fb13d4984ebf7985",
".git/objects/46/22c7c83e7f2dac3eda31b28687396eed45a7e8": "6b1d356a7673aadf79992b19cf9b4a31",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/66845e1ed48305c9cfcf4de516912cff438d50": "635b4da304e968255524c7457aecf226",
".git/objects/4f/8bc5c4af83cdb2a197c807c40cdc3f9f56c235": "3b7e4df29f5be4eb354fb2a220a2b680",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/0804f16474f7bd5e4bbe54b5c3ffbf1ba7c44d": "c968fd909cf117ab8af3174d80bd343b",
".git/objects/54/46f78d0b5a58237cfbb09762006419f62ad2e6": "b95cf85e43777fae77008305a77f8107",
".git/objects/56/84a7eefa9e10d1e18511ac58a33e1fd3427929": "92fae4d15c11d3b4d1c01aa87c07563c",
".git/objects/5b/001d9c968f1ccd39ce0941486960d81c66223d": "58b47f2e1b2a7325759424bd2efd7d9f",
".git/objects/5b/bfd8ee76841a8a233627cc44551d3fcd168e57": "b8fcbfb5d4d8fb7dc4b844145cc8eb36",
".git/objects/5e/164e798676da6fe1d41b9c0d827169f9f67326": "34f6911c8f112d9595afc47291b9ce45",
".git/objects/62/109410888efd8a02e1981f0c97f878b0dad01d": "6d069838d108de782366e7172ba8691b",
".git/objects/63/530f8d6d38bf8780d28a5285a01816269812b3": "11219a97d9fe842716db5932fdedae03",
".git/objects/6d/28da52771c6e74545663d4cfb29496bdecdbac": "cf39ad320495d5f2ca2f09d73242c07d",
".git/objects/6d/6ccb5fab98049b7b097be0c3e8e62fa70a89e1": "743f8e3811cfb3de67c4edf6b68725c5",
".git/objects/74/dac8e70dcb9050f9215962378cdc26a65cb331": "d2598d3ae6f633202bde9c1129e13302",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/0eeb6165613e7b459abf59b588e9d9e6ffa148": "b059224aa82bceb6b0795402381f7ef9",
".git/objects/81/03c6e08e93a7e8dab82b2b66ec5c9b50402359": "568b1cdee143d75585d98cfa264656b7",
".git/objects/86/2a094aad6c9288a3e2747e6744877e6cf6485b": "9758f58e3d268397dff80671877549d1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/861925cff44a5ecb83c2a2122ea498a0e5e2f4": "c1c6a5fd25ed5c7971c5c0e314fdfbc0",
".git/objects/8f/a8aea0b558a37c007d4a8ba35222a35e101ceb": "0c3712eb7d8a487692042746a780c785",
".git/objects/90/fb7bb23c796692a97018dc714bf9344e908483": "c6b1ca993232eb29279f1c4497963baa",
".git/objects/92/a8eb0773df76622904ce933d9d586433f92e20": "ff45897ce2c156d320f1fab023fa1bb6",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a0/97ac255a735da59a444f51deec54181e3b3b9b": "8b0fa026425fdd1d272be30dbe2c64ba",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/f510d10ee4f337c38e0f6966a102c65fe48d14": "6d59d9dad11010bff17f91d3d7a06872",
".git/objects/a7/dd7d927fe343cf9489e26b147c7af2158c3867": "3f1d114444c6ccf727a644014d77546d",
".git/objects/a9/33fab93f74fe2f2c3853611a5581b24d39ff30": "997683cc2190453ed59c06a7c3280c8b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/272a3a540d80061856cada0b433a03f678739f": "15e4988184c56a72c2ed70a249c8b87c",
".git/objects/b0/800345ba9410149a2b816c662e51e361acac13": "429305f7a9765e2dd2348f77e328be8d",
".git/objects/b1/9b4eea55d9d34ab276b0d1f0f2aa0065f1f6ee": "b4a2cdd095c7555b90a3e90ce756c09a",
".git/objects/b1/ef937ae5958dfb16b3013de6c38b53c2b26963": "cfa8628c65b5e49f24fedc16b3941704",
".git/objects/b2/544f8d45779725ccfc7fc66cc25b875a963ec5": "fcdc2f3146afbc5cbf8c7666c43fda4f",
".git/objects/b3/9f5d12baf5b14b48cbe051a258abe9d39a12a2": "eb208fc46c152a52b8fefe2b59d0df58",
".git/objects/b4/4b8f545b0a433b011d7e70b25c2d527e567e42": "0ad7a078b686be93a7d8e3681cbc89ab",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/0d6a88e5679775735ca0da167a4e3814984585": "a9a777c668c183b48dc442f8603146cb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/7527408776e5250eeb8007958d1e1cc55285f1": "135376b8344e6b4c3b269f72d1825bd7",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/c3/be98167105e785f96061dd06e28461c40fd055": "8d5f70f7ec98c9e0ec6634daf3044460",
".git/objects/c4/a6118df6408fb3b565c1a6ef5a1a311a03f1b4": "db96ca9dc65e7e71bb8276c495b4f122",
".git/objects/c6/72cfbb2cdf9e6c831f7f12004df44dcbfa6b68": "96cbdfb9f24cc46e83d0714f597100f1",
".git/objects/c6/c7c17cc0beee4a153d788f6e467abebfe3483b": "bae1882748de4d2529724ed67973b0ac",
".git/objects/c8/153d9235dee30c02f0d5ceacf3683d2550c339": "0fd520f006225d130b46bacd00094ea8",
".git/objects/ca/752f059a6bf52793d82b97ec991d4abbc17cdd": "aeb191d8d007181bf0c8a9aac8a8a55a",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/786a8e57dfb823105388398dd1b1a9503ce87b": "f9e93de491b4479ac4e5042a5b5b5007",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/9b324b1cbfd6288c258fcd5642fc034deefc64": "1b0a63534a2722e60d0fc086579a037c",
".git/objects/dd/bf9d86472c7b1c7809bdcfed6c3ad40e19f89b": "562fc3d0e28f3ba1ee951f464615b5d7",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/3788f8bdcd76ef7cd0249536360cc5a31172cd": "499d6f06032d98c5cde4c161c415abe9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/a54920fa87002ccf5c8e7e369a68a2bd5b79bd": "194acfda1ea5c1210497771d92afbb20",
".git/objects/eb/9393ade20c1c4d0f429afb5d9b97e85c526517": "a91c195239b9b99be90c41efffbd76ac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/54e0154911128db8a3bfb732f17e7d3e1d6f72": "34a9a6872a7abbfe127248c4b5f74855",
".git/objects/f1/990ab64152aa2d2b2bce9209074afada54ec24": "d94f1a27913b85028b264ccaf81debb2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/4d45fe36e9dc05c400dac36410614a93d0eb44": "c99682114465ff3bd3354767dbaae660",
".git/objects/fa/fd212f31b961cdc130a2a753dbcc8879b879c2": "033ddb275d4a83090a5981305d71c1b2",
".git/ORIG_HEAD": "f6ff9f52a78cd153a53fc98105c8db55",
".git/refs/heads/main": "0fc2c4e2ba57663738972c1e7640abde",
".git/refs/heads/master": "0fc2c4e2ba57663738972c1e7640abde",
".git/refs/heads/Saidikrom": "f7d165b1b31a70a775a702264da22cd3",
".git/refs/remotes/origin/main": "0fc2c4e2ba57663738972c1e7640abde",
".git/refs/remotes/origin/master": "f6ff9f52a78cd153a53fc98105c8db55",
".git/refs/remotes/origin/Saidikrom": "f7d165b1b31a70a775a702264da22cd3",
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
"canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
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
"index.html": "b8d42771e32c116e815a3a9f69169772",
"/": "b8d42771e32c116e815a3a9f69169772",
"main.dart.js": "7998cddd6e591c60d27544f888fdd901",
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
