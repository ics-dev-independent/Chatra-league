'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c7d69b33991c6f200764d0dfecb1d77a",
".git/config": "86de3a65e7a59ce1f299b6ed1a293368",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "56edf8c9d8169c37afcc39f95a4c77de",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "04b6fa1d1487dbf9490716493368fc5e",
".git/logs/refs/heads/master": "04b6fa1d1487dbf9490716493368fc5e",
".git/logs/refs/remotes/origin/master": "808ff0579be3c394d2434bf46adcda03",
".git/objects/00/0f7f85494d7f00b94ad8b5a967dfbcc41a39cb": "1fac70a5c12a61e435372aabc4f6d758",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/0096b951f4dfa522f8152fb2c22dd76c07c246": "fa27d95b418b0fc96a1bdb09ff4ec970",
".git/objects/07/eee2e3f36af66055e0bc76e75a2dfaf0cd7102": "cf38d043416d03de6ae256e3ff85f818",
".git/objects/1b/7e9d737c1996df7e12982bc56f38725a81cee5": "d46194006416e119fbb8f827dc6098f5",
".git/objects/29/c9e451e1dba384cd86a76971214fd0457eae79": "4e6e37e27c069cb24d810fb3bc57992f",
".git/objects/2f/e621c405aedd2b3e940512c6600191adc05728": "76737572db3e1ef67cd1a1319e6f3303",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/2fd638715a8f890239d7c63c0ec11f95c424c9": "3afde513b2b2ec48c32a3b4bcf7ed962",
".git/objects/39/278d37f528c8bd455a1cbd7868b2ea847ef019": "df802822d8f1ae7a36f9935b9d1f5bee",
".git/objects/45/847df37def999cfa6282e8f17aea5ac904e490": "9a5dd12981683975f203103d81fb8cc2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/87af8d7049c0e6ad292d8b48ee85366b147dce": "3c16f15bd8a800f382af846d3cc2b093",
".git/objects/58/45c418051fb9aa8442dde19da0c01a7fd52caa": "2b8052db3a57beeaf96612edabc110c0",
".git/objects/5c/2952df2efb79fcd88d5902b5ee415ca5f39058": "d7616645ceec481ab60b9b3f593c4201",
".git/objects/63/e643f56a26cfb1332a02c5df698a22a83ec59f": "d1d0f5f038cb4abfdc72db0d1a76a932",
".git/objects/67/6a425bd9e917e7da8a7815818fab29d4bb0290": "6f2a293eb1f0779954e6f3c6e3a9a5a3",
".git/objects/68/ac702032c14c8888ee844c0d9501e1bf94d0e8": "470107e56c9abd4c7e69d577ca726c81",
".git/objects/69/c5e4941dd1be1663e520ca7bdea4aad78bce7a": "a517fa0c922c7eba982184691e247505",
".git/objects/6b/9de0b4bb9887522fe9c349bc3c2c2c44e4abd8": "dc0e3761e82f23532ad45e9eb6b6a683",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/7d402819eebf41949d9fa20821cadd21d78721": "a2e8ca2f8009919532dcb2627fb4d595",
".git/objects/81/a34c2a16bf23d186610ac4043c2ade3b7387c2": "393d473bb67a97fc7e85d6a0cb0bef03",
".git/objects/88/40849834c9e520099821db261878a789c0b41d": "65caf91fa068c27ed1d64853290dfea2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8c32f13af4475b2d4629962926e3e10862e2d1": "ac4cd83d6ec04005675a90cbd8c7904b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/023ffb28638c2cb72c1726a1df198861751ec5": "f40af147101cf3642f449d18963ca046",
".git/objects/8d/5bba383db3661ec07716da39b156770e4ecf9a": "c1d9bf2411d4cd320c37b97927e33358",
".git/objects/91/b9c07a7b1ab594591997237d264a46bfe413da": "43964bae1cae9154400ad11b59782467",
".git/objects/93/dd03fae41f00f2a6a3d6f3fe36778ba8248e84": "c3e2b1e8697ef5170bae98e2c5a22a8d",
".git/objects/97/d1747ef84adadb1632ddb675055781f60115cd": "9b7de8f719a5d2e1dc295556dd587e10",
".git/objects/9e/9fcfc3cc182d5ed4deaf72959b084136540305": "e6d298195f1d2cec44c6d5f02e01a66a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/922462719a78910bc2f6b6540953ff41535572": "3e875ed29e01b4bd6c2c7afd8e3ec398",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/cff7e9a158afcb3783c464d4d88c4ad5028c23": "af40828699c8de94217b46b36429ba96",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/2c5aa889df99de18abad7f821e148849c3da1e": "17f24ca088c5609204994c6eeafcc798",
".git/objects/af/fcbdff7366b750927b8d8146d05f6741b397cb": "939a88f5e961744a5285b7cda39abf06",
".git/objects/b2/c5e0db65eac244422211ba96f2c8e56be3d91f": "0df6fd27c379c0fa982f35dc84133e90",
".git/objects/b3/2f71d922adb354b65cce79904d9522b58e2707": "0c057d3078c675a7634fca3a70c711e3",
".git/objects/b3/cadb8fb96f8cabb0c927c3ad0583d6aba7c35b": "5279e2f64ce57a5fe41eef87ebf7a78d",
".git/objects/b5/553c5b1f149ec261e6989f5dc57e82f903af53": "5ad909c1ee6f0ea0095d60b37ca8c2be",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b47c7f4fdb0450ce066ec6a24e8d68aa9fc2b8": "f3a2fa13cb337e25dba68e1ef146589c",
".git/objects/bb/dca7f9491334a6dc9700c46ea5c335bbbf19db": "59abe76a97cb032bd353dd575ef72909",
".git/objects/bc/848637b00eb6caa74adf7b214b15318b520716": "a814ec3ca8d88c18f3d304811b27fa0f",
".git/objects/c1/d998eb826d11b1829dbec6b90195148013f79e": "56b08a0b05d1628da21b9531d75b6e01",
".git/objects/c5/b3e647e34a92a54c332ce684c9d7e56448f10b": "2925297b50a584e3605387d6c74a36f3",
".git/objects/d2/f9e455c94886d4f3469fb69570e98a578c67b0": "4b4485963b305818cf2f899450aab658",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/cab20c97bba197abe9b9bea1c0c7486c29c5bc": "5916a20958d33724e86f6e6134788cbd",
".git/objects/e2/1191e3425e0747cd5e6e533aacf1cc1846ee95": "3e498b741963c2ed60099a6c0176a1be",
".git/objects/e3/b32b10431ad99c43b4dca0309761b340027b07": "0adbec520aee6b023d74e0255d7418ac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/12b913f68a248ffe34915978b9511f98f49c56": "38e4d1ac7892d5ba6cdc5831358bdaf4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8086d038c552d615b0c703e6b321e2d21996fe": "03e50fab080ce7b033fe6fca74460f01",
".git/objects/fb/aee888586c97a147e09dda9fca13218e7bb832": "862671e1593a1720388cd710bf20e7d1",
".git/objects/fd/3efa2ab6d1946e9898e38914553e58e624bb16": "aedf60b0e100c0bf7f7456721b7291cd",
".git/refs/heads/master": "d41a400e878a48033ccf0f745c726530",
".git/refs/remotes/origin/master": "d41a400e878a48033ccf0f745c726530",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6739f991e683849a43604a689a288092",
"assets/NOTICES.gz": "dcd1d906f728e1c9b53a202ca76c3a60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1dac910f38bb5443763e48d23b44e04f",
"/": "1dac910f38bb5443763e48d23b44e04f",
"main.dart.js": "d37c7f139160e53dc6ebec148c3ea6fd",
"main.dart.js.gz": "221a8b54c9ed4befa97077e500f4fca4",
"main.dart.js.map.gz": "09c9a445e9421c86714a6489e8c76aeb",
"manifest.json": "c748d2d5cf75d6240107611d3d485828",
"version.json": "dd00561e6ca8f89a736c398958db0994"
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
