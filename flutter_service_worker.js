'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "11dc88c42c74f6d7c705806018c2c9c4",
".git/config": "2c4d84b6334fe160fefd36eba99da32f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7dbbbacc84f3ae435da2137e205a1055",
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
".git/index": "c9c54b365da9daceb8df08cc037b6e53",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c77cc35f3dd23ff1414d5006b463b31c",
".git/logs/refs/heads/master": "98d1ca03faa917d42b85507c7e4d0748",
".git/logs/refs/heads/Saidikrom": "c37219df227fa7c76acfd1b1125f37d6",
".git/logs/refs/remotes/origin/Saidikrom": "61efa96e7df96cab1fd8fb63bdd270c5",
".git/objects/00/a4dbeff1ef659ecc3f98686a26799feba6f0c9": "0b121c9e045bcd80c87d644ddfc08f0d",
".git/objects/06/7cccc0cba7f74fffde6c99287c2c0b630d23be": "01b3c08eed5c4e5db41a5b51c63e1e7b",
".git/objects/07/ac0ff1e94296b3c17b3d8cf05fa49d30ae9f70": "d79ec4dac39e7d04c4c0b565c43cebb4",
".git/objects/0d/fc6f629712e460910a9c2f1a3c1ca06bd8b308": "5ae9dcfa372bbbea4b35c246cdeb3909",
".git/objects/0e/71a77e4eea2b1a86c1704750df19034a6c9db7": "21051ac4a811b4624ddfc8ac5e3379cd",
".git/objects/0f/9482ad61b3ba685960f86e50ac2511de423d8b": "52ebba16bbf05502beb247046fcf36fe",
".git/objects/10/ad36061aa5b65e7f5e3f90a7b98091c3647cf6": "dcbe8d7f053118510269edbe20cf6288",
".git/objects/12/466edb86b0309e37ae637f2d28285c5e3224a1": "2f807c1f3cd1b7373a0dd74fc33b5b87",
".git/objects/14/e396cfbf4b67e739f3fc8d0dae1a7a49fe02df": "ab779a812895b2dc18f12ee8f9ee9f74",
".git/objects/16/c3c6dc4f1a443a63cb05e6854f4cf65dc94b09": "53118c84cddf57c6dbd5a880b0a4cb97",
".git/objects/18/4d75aa4ceb03688261cddddf742a1e0f2a609d": "a4d71a4c770bcfd4b834013c0ff94ad0",
".git/objects/18/7b8fb99f4bd0e2b6d718317e58c3b7bd61b4e9": "6e1fc6c628639d9cea92244a782ba9f1",
".git/objects/1c/1b472a8b6cd7716b9a573397fdb03aa572a461": "cabe009d7f19a891816a86cf5450a09d",
".git/objects/1e/b3d91906baddc31a641d6307eec1857d0843c8": "6e6772d4195a8709d349d2750f754768",
".git/objects/1f/377434c59a64d5667d754ca88bebed1a71768e": "895209a90e5adc87b938d660ccf80c1e",
".git/objects/1f/5b3ee47f4f3c65ac1abbaacfe5a2e2468bb4fd": "6a83c479322697e8d075f48d0c128c27",
".git/objects/20/f956e024c39a85979af09a20996b96475b1518": "965c124b27ee35d1161091d7edf0c070",
".git/objects/22/3b313ae02438036366538b1cf5ba6221f2376b": "02306715a5c6ea67b246a8313de73f2d",
".git/objects/22/b6d7b980f80e1d8de7d0af7771b2262d40d0f7": "f56ebbed1ed90811482bd7447a2753e2",
".git/objects/25/778f804bcc9c1b9e51345854c09f08fd7f4553": "6b9278ee2d8b810aa44fd54fd0d70a8e",
".git/objects/25/fe47c2e6e39547e3956fe84cdcc780aff7aa9e": "2cc472b2a6c88b1747849b566eb25e85",
".git/objects/26/af9adf3c3332fa08b2d3856bb6f7c864c9ebf6": "b37d43997c109a9c98a17cc629b0b318",
".git/objects/2a/0b06022920e2217414c44984dac5334b9879db": "27200842f7996b579acde446478a4763",
".git/objects/2c/64598ebf88a0e7b74b579f8d02f84952ebc884": "587e9354ff22ed14066a447a17a96cdc",
".git/objects/31/495df0258c3a86101c11908a720ad76d37742c": "5d5f2d35bba5914210d9de96418548c4",
".git/objects/33/05d6b7b0bbd66645ae10785f96ee9ec33b884b": "e706d889ec0715dc488aaf575277895b",
".git/objects/33/3cd11d457965dcc172f617bedcb65d120adf98": "7a25a4c122f6013ec174066d8bde613f",
".git/objects/33/62379949f3ff52e34c534241fc090d38b7a047": "5b5cd29bbd86a76682cb6d1d0bca03cc",
".git/objects/39/937495ce2e4caf5a68ab37671125c0ab9f3800": "8c3c3f45a0a007da04469f73d2d4de5a",
".git/objects/41/56ac224ad28db72837b142d5a2df8b2a9bccde": "81508ae241abd7c1c27fc4a24b708912",
".git/objects/42/7d1d47e9aa900a5a0753a955ea0c4b3c385b5d": "78d492791b603d68efd9c1076c90b772",
".git/objects/42/ca4226797937b595fb653ba9b7e91d1c5d3dc7": "81efc8ef46a4c040af164dcb72be528a",
".git/objects/43/de101dd67390a4e83173c4d8673619bc2ea5c0": "a51fd28d66a506ccb5e33cb5ee45a30a",
".git/objects/47/5d0e25f72aefd956fbc267f2924d6d6fa59d27": "a7de1035c778d5fedf604d46a90850a4",
".git/objects/49/82cb588701e1dd073debcabf31ad703b09d26c": "b8c37a864ff4ed08386676a4c6264f7a",
".git/objects/49/8a947306dead016cbf188ad84c4fc5cc727a79": "825f427bb23e534323416b48437f1110",
".git/objects/4f/3104a01a8bc9b89e2c425d8f55b76642a4808b": "6781bf1babc20042b4e98b9886c1adb3",
".git/objects/51/c7c7dd750eb364aa7d13b1664efbf66285930a": "189bb10c9d52e13e230dc14fddcba7b2",
".git/objects/56/68b16217d89c8c1529ceff6fe0b4f726d559d0": "c186f75ac090983386d836bda4118893",
".git/objects/59/72c420460813dc95960c631d0b831f67420742": "c3257049d4ff3b84e4f06d86b6f606b4",
".git/objects/5a/3bdbcdc2b59f0449aa140c044fcf75870a904a": "e81afea120c02d6e84c3aae0177bc8c1",
".git/objects/5c/fe0e440e203ace21654b42be829c2f8cf92e37": "26fee1402c9bba8cf53b94e5f620abe8",
".git/objects/61/23eaaa027d93f337f2646c892948a0a086fc49": "a6a9a20921f797feb5d07a82e0ca946c",
".git/objects/61/de01d78088754e9d6ccd001426dcaab250c3b6": "338301b248ab4f767a2513d32dbb612c",
".git/objects/68/9f465584c88680ee658e7ed0bca38d5bd4bf9c": "796886902330a7399d752d526cb305e0",
".git/objects/6a/f9737cacba970e4efc13d3e4389453b0cef2a3": "e82af29f25a06a5c884d3674109c879a",
".git/objects/6b/a4b4e8e3eae74504d9395aa1c2e35fccf9e6df": "258a92a749f06efc8bc47644a62407ce",
".git/objects/76/fbb67e8e529103bb1630b67c17e7224adecbe2": "afddbea8f7658d0c8e650d2306b83175",
".git/objects/77/216dd5e5b07ff1254d335e488a80d95f7bd75a": "f810bb67b01b8af859dc55172cedfa41",
".git/objects/77/871fa08c4e74a2cb332a482cfc02694f8322b8": "e25a406c58586e7e3c21996da5235283",
".git/objects/78/6e45906aad985ffc43e0cd1baa396c5ec987ae": "2094ea5e5b2772cf3766e0daa85a4462",
".git/objects/78/b9cb156be5e1594edbc75b29b63a925001d56c": "a68e9053b06614d9bcd24de9f2887062",
".git/objects/79/ffb29f426d74093dd1b2573c2517baa422a0b4": "314a787f1815f8793c24b2eb8a52ad5f",
".git/objects/7a/109baed8c7de49b20c4e9b6605cd86df1eaa2c": "22c86ccc64f3ef9872bedd883f70b06b",
".git/objects/7f/e5351ac0e776a7dd980db561a3a898cf1ce849": "11d01f27fe9212c1d6ddcf58b13f1199",
".git/objects/82/897d7e8f3b4038b1abbc4a7f82ae93d3f2ef4d": "187fb6e97f6701f3ffc6ba2c52d57dcb",
".git/objects/8d/ce7d66421b851e38cfbe63b2d3f28db021a550": "4e76f714ba6ec5d1e94466e18f480eb5",
".git/objects/8f/80bbba1d1f8d44e8b1dcafcf6e7a3b87515cd9": "a5de5e70872f92f5bf17502d18488826",
".git/objects/8f/eaee0de91513a45ddf8a5e3aa3d67b598afeec": "7d637346a5b2cb337f9daf58d68f2068",
".git/objects/91/2949e40b9f1da3fb1fd077836703dd84610adf": "dec25a0703f6780fa69c93ec5be5149f",
".git/objects/91/a874e6d1142ec7987d788cdb7211346ab7fbb9": "7a4d62b761576b2136593ad213b0bd89",
".git/objects/95/86fa2660fbc310ef82879b9bc5ec780255eedf": "4131e8066cc9b0169babb6dadb8c22d2",
".git/objects/96/52e62f055934cf05cf10b82797e85223a3189c": "eee8749d9d1913866eb8879452d849b0",
".git/objects/98/dc128509390bc0b6527a087145117ddce4f7b1": "6b9582c16ee784125fb3b8e5e27696db",
".git/objects/9a/f117f08ae522095ce221c04860a76a69bf9c48": "3cac8ee16d4e947e38154c010c791e54",
".git/objects/9c/895d142bc97e0890666731dc8fe2f430ccc6d8": "5bdc8e1f49c5557e08d98a1d425635cc",
".git/objects/9d/1f3fdb5b9cf9a2093ec5559ba1576d4598a4a8": "5cf5daeaa1f3543b82550c620b8e11b6",
".git/objects/9f/002536a83dd7b5db4be0c89dba36232a44c856": "f2db42fb939833ce4783ff1aae9efd4f",
".git/objects/9f/1242589e7956036a07923f1002680ca5f115ef": "5e30c0a638b6bd88b3d183d7cece8087",
".git/objects/a2/3ed76de687989179d75e9fe048fb6cb94fbd62": "e525feb16e032ca72d2d68b323826b60",
".git/objects/a2/8c0f27305624c64cdff26dc2c1a8bd39d4e4a6": "e54c96f6f847eeb4e030f27cf18ba3d9",
".git/objects/a4/2f53dcd47dea3c06c26345438590fd32ad9b14": "3497d6b2d18c308de9d5d455a4e7bfd3",
".git/objects/a4/35b64dbc867207eae85a9b7bc7348abc030cf4": "0be9fd765ee11beb464e0ac7344ba452",
".git/objects/a7/518292fa9a75aa27fba5db6a3a0a1d99c1b4e4": "a09fae2be887d856435e33854fa48cdd",
".git/objects/a9/4e802429b6ac90a8def12cc71da6cd472e4d32": "2a207d7a959643896b229b94bc181edb",
".git/objects/af/18ac8d7b558e76999d01515c8f1f3e27d20e40": "87814a98281dcb46efb27fd970f56236",
".git/objects/b0/ac694a364b671c6847a1e0363b54e7527db105": "185d4577d628dfaa3e25d026b5823b67",
".git/objects/b1/1a9c28b2a356e8cc9a233d74a84028b3a88d82": "7b8f4603e2327c359d780435334ba845",
".git/objects/b1/d3dcac2d75cdfdf322c4bbc64d2e04e171e194": "6b40550f07579faeb0cc3fd713f13ea3",
".git/objects/b3/b70a83d4559c3eea3a36ac08a2079051b8de61": "b666abc58d25bd65f6fcdaacb5b3706e",
".git/objects/ba/d5f956c1d3baa5181678c348ceed68c7e60a12": "43a9e1aa3c2b34aaf0d943796659532e",
".git/objects/bd/0205d85df92fd8c7055b8b0defac97ce19ca2a": "74289e1276495a17864d6d77038e6676",
".git/objects/be/8ed8cb51db90c579d37215374ab3945811e775": "48b1ad4518866359132892d60581ad83",
".git/objects/be/dbd9477ebd52ede424cedd3e9e0a736c8829b0": "bc7aec6b58e115744d4c0109979d30c9",
".git/objects/c2/57e5ce77c6e5d8c74a98b952181e3687f6e74f": "05fc183352a08199be838d1a1ae283f5",
".git/objects/c7/071e209efbdfa31cc3dd9c05c61b1149331408": "f1bd5e2e7b36782d92c972bacec7e854",
".git/objects/c7/4993d518dc68a54f37f7ee151ffb195dfaee6c": "7c5a7005563689f6fbb80f5802a2b5c9",
".git/objects/c7/f388256423bee3bcf1ffe954e52cb5438f7d8e": "24538cdb53bc38caee5270c230bd8f43",
".git/objects/ca/3e49608e93c26277d0de18b4500c8d31b158ed": "b66b5631e6ba3eb317de78de0176260b",
".git/objects/ce/c2c51b7e9c3d7dc0a2e06b6bea7ef8e7b45608": "96379476e402de5567655a856d6fae3b",
".git/objects/cf/ebea86fbdd1d6e26a656eefa2baaad3d0125ea": "8584e2eb39e66750742b58b2dd658e86",
".git/objects/d4/457a4ccf0a6e00a1026837acfe45b483186919": "a99b8ccb6f265917fb8d8573ae9c1826",
".git/objects/d6/15e3d9999f94464116e320dc9ef05977b69c12": "f3423696fe38cbc51e9cd8405d51f01a",
".git/objects/d6/5a99992f8c324e57129a5aa5737e02326886bf": "e34c6c1d4fe948b709e28a39210c5ded",
".git/objects/d8/6a5cadd84d08978a485b35d186faf30b7bb896": "072c23273dd1fe10ec22d2f642f9dd3d",
".git/objects/d9/a07ec79153ea77db92e434b3ceb62b42d9993b": "dc534b5daa2c05978558a51bbdb9f87b",
".git/objects/da/660ab11c4afa00b9c37bd05c2b5bf3a7a262d2": "8b30b6c808a9d62b2123f91761d766b8",
".git/objects/dc/d73b2efb6c8261e16f383cd23b7b39a81f1d65": "251ef8311841c20c8b060609cf3eca77",
".git/objects/dd/051d58711d9070aadf9335f105ddd98a6149d8": "a9d912d34186dcc329b2bf7b6e9e861c",
".git/objects/dd/5654e73804d04d5c7459ca5a6b8fcb6f6bf6fe": "55e3d80cc864b7fbd19e146413c12c67",
".git/objects/de/85e16c231a4616c2dacb226892a21942775bfa": "965495c4ed9b744ecbd9a116f5768f8a",
".git/objects/e2/14f00190aa45ce700434501c2bbc6fa3ec6e36": "87340421ff09124309ef76c398fdd8f7",
".git/objects/e2/7b590fda7f0e2c011fd4bbb65011f7f26e2acb": "d875ef9c1293f98946c9e149205d44a1",
".git/objects/e3/35aa85b38ee9afa7ad7a06875ec2c1669c5046": "56d305fab45c2903de2582fa11d12a05",
".git/objects/e3/e5d52a05c0846301a2760cfee5a763f7e45abb": "ff62ef3e7d64753cc7a53333b41b0edf",
".git/objects/e4/463a3061c069cbdcd437eb621c36849de1db0b": "6dd3095ffded9b4cdefeafd36bb80df8",
".git/objects/e8/6ab219a5367360a76d852f6cff99009cc48db1": "5e2ad2ca75371ca12073d853197db1b1",
".git/objects/eb/e9b8331a99e9b879309b1576faef6c7164002b": "c51f73aa5a1bb21929ef8a312476436c",
".git/objects/ec/0072ff606c69ebbf1bbf4fcdc20b81faa19c2a": "fe83fa695544023fac289b93c88f95ef",
".git/objects/ee/e7a3d7fddd4e2823f0532e78278dcd9b478da6": "4b2c356263cb941b62bf0fa47eda7b8e",
".git/objects/ef/99c879ed650b6f989d7d3c6b291f2fad0d3d46": "626fbdfa30b598d762210f512157c5d6",
".git/objects/f2/45a5e92d97ce9a2c395d037ac8a4c38023a69b": "c524c9afe493835e5c7bab4ad98a2425",
".git/objects/f6/48f4fae828a3e515a93c383420a07cf9bb2550": "652e4728546906c50cd8cb741b6072ad",
".git/objects/ff/1501478edc70117ddf98b18d5b1226782e12f5": "fba50479151d01d04b37462410189293",
".git/objects/pack/pack-065e62134699b8dd73d600537ea412a555f8d073.idx": "b57880c5de7649d68d47b0303032898b",
".git/objects/pack/pack-065e62134699b8dd73d600537ea412a555f8d073.pack": "be57287501a5f7f4e3e547560f80eae9",
".git/objects/pack/pack-065e62134699b8dd73d600537ea412a555f8d073.rev": "ed360d92ca642fa19bde47de25151de5",
".git/ORIG_HEAD": "2b998e4664db5c3088c90ef04311bc07",
".git/refs/heads/master": "5340ed094115e6015a737bc50db8c262",
".git/refs/heads/Saidikrom": "cc7c1fabd41353e6c2101a19fe909701",
".git/refs/remotes/origin/Saidikrom": "cc7c1fabd41353e6c2101a19fe909701",
"assets/AssetManifest.bin": "b2728df6036bf3fbbb8fe316fd599da7",
"assets/AssetManifest.bin.json": "8ac77cce9b2b69be3376ff8f8b5a4dd2",
"assets/AssetManifest.json": "b4bf8de0ab4141e36fca9a8ff23d1651",
"assets/assets/fonts/SF-Pro-Text-Medium.otf": "9491854a8b6ec3a0c915668083f18fde",
"assets/assets/icons/angular_icon.png": "c07bfcfccfaf1c0c8acdae2ac9195428",
"assets/assets/icons/arrow_right.svg": "f19ca1f9ba4b3981569e4d6fe61af585",
"assets/assets/icons/AR_icon.png": "4a7f417cc9b8b86db1ef18ea78db1781",
"assets/assets/icons/Blender_icon.png": "8274ed8aca5a44ccaa80bc9a362db44f",
"assets/assets/icons/c%2523_icon.png": "a7d8c4a4dd65e6ac9835b3734e21cbea",
"assets/assets/icons/django_icon.png": "a3347e07457e83c0f558c05da14b73d3",
"assets/assets/icons/figma_icon.png": "583c5b03ad3c6aee8e50e172c6ad3876",
"assets/assets/icons/flutter_icon.png": "a7012e352d5988689a4a7168c17c0ca2",
"assets/assets/icons/github_icon.svg": "ae8c2bf4ef4e657152efcb300ef7b877",
"assets/assets/icons/Git_icon.png": "791d47ad3b7541f7295ec2e861f290ec",
"assets/assets/icons/instagram_icon.svg": "b1bd33f8cb4440f50847d43a390eb3da",
"assets/assets/icons/JavaScript_icon.png": "12bc039c630fb5827752def868e04b8d",
"assets/assets/icons/Java_icon.png": "6bcf03076c560c4a7183c64c0b0f0248",
"assets/assets/icons/linkedin_icon.svg": "a6b33be8c5fc8f0c37e4d9117af5d988",
"assets/assets/icons/moony_icon.png": "e42b2899523c86d16e93e3c8108e2a67",
"assets/assets/icons/mysql_icon.png": "2667ce7b5055fe608d9d134db71f1e31",
"assets/assets/icons/Optimedia_icon.png": "1dce677517c746b8c1c8581516a6691d",
"assets/assets/icons/photoshop_icon.png": "c0669786a54722d950687b3e7f5f728c",
"assets/assets/icons/Python_icon.png": "96533d5eeb69597493b29506baea7506",
"assets/assets/icons/SOFF_icon.png": "24e7dfed634f5ecca076583bc271a227",
"assets/assets/icons/telegram_icon.svg": "d08301c2de6cdd3ddde7e50dc96098e3",
"assets/assets/icons/unity_icon.png": "bf62ea81fed7656927aa96abb4fa7101",
"assets/assets/icons/UZTV_icon.png": "3ca339cb331b14204179a28a6d7a9e0f",
"assets/assets/images/background_image.png": "d21cd84d72f2ca247e9506fee7194215",
"assets/assets/images/channel_image.jpg": "7d51acee281170306bf74998c65afd6d",
"assets/assets/images/moony_image.png": "01cdfe54ef38d56db8ea893b19acbae6",
"assets/assets/images/myself.png": "356f7e0bfe47765aea6d03f5c4b989fc",
"assets/assets/images/optimedia_image.png": "3ef9cdea27fde96a4c5f218523338bb8",
"assets/assets/images/soff_image.png": "696636081c3e732fdf41bac08f8bbc1c",
"assets/assets/images/telegramBg_image.png": "3cef9363c50fb8122c97e442943b0a2f",
"assets/assets/logo/saidikrom_logo.png": "94e201b3cc42067f6c528fc3e32d2aba",
"assets/FontManifest.json": "c0dfa67698b6617faa17dd31a8345ee7",
"assets/fonts/MaterialIcons-Regular.otf": "e4715cc60c7131566767111ac3dea8fb",
"assets/NOTICES": "23251e22342d10b7e94a358b107130ff",
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
"index.html": "27dc27ceebddace953f1af09622b5bfd",
"/": "27dc27ceebddace953f1af09622b5bfd",
"main.dart.js": "07ac99ec8f700e80b6a9a51f2a682889",
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
