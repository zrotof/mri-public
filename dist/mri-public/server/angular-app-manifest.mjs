
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P22LYQWQ.js"
    ],
    "route": "/agence"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6GT3G5V.js",
      "chunk-DVFMYGPG.js"
    ],
    "route": "/contactez-nous"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JFJIWV5B.js",
      "chunk-TS73LLPX.js",
      "chunk-DVFMYGPG.js"
    ],
    "route": "/devis-gratuit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UQTKDE3O.js"
    ],
    "route": "/nos-realisations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VLMDHFGG.js"
    ],
    "route": "/nos-realisations/villa-contemporaine-saint-cloud"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VLMDHFGG.js"
    ],
    "route": "/nos-realisations/appartement-haussmann-paris"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VLMDHFGG.js"
    ],
    "route": "/nos-realisations/renovation-extension-maison-saint-germain-en-laye"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VLMDHFGG.js"
    ],
    "route": "/nos-realisations/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GHKLGWQV.js"
    ],
    "route": "/mentions-legales"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OVZ3EFSN.js"
    ],
    "route": "/politique-de-confidentialite"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6572, hash: '12aae2363fa025fe08b5f9de0c70a0f7fe254daa91fd1175c68f4b652609c667', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6263, hash: '11738ced7087ffb0df33123f2d1f236fd19cd90b1e67d3ef1684a1eb8fbb0003', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'agence/index.html': {size: 135151, hash: 'b8b859b6622926b3776dd3bfe89e5b7045e9d730ec51ae378306ac5ca36ad8b9', text: () => import('./assets-chunks/agence_index_html.mjs').then(m => m.default)},
    'index.html': {size: 217722, hash: '2e539c8999652db05a743a7e9892d2ee1148dec34a3657c5ec322ccf3cfaab15', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contactez-nous/index.html': {size: 178540, hash: '79fcc0f41b382378af7eb57a04026c0476a4a17d1fc99f15f6ebc8e3a762b3a5', text: () => import('./assets-chunks/contactez-nous_index_html.mjs').then(m => m.default)},
    'nos-realisations/index.html': {size: 103435, hash: 'f756371c570209c548c2e9c4007fc1cbaf33fc18fb97846f4b92d82a2b70a188', text: () => import('./assets-chunks/nos-realisations_index_html.mjs').then(m => m.default)},
    'nos-realisations/appartement-haussmann-paris/index.html': {size: 155793, hash: 'bc0398a880a8bb591cd7d377a64b369522b413f801363b32bae3e14a7acd644f', text: () => import('./assets-chunks/nos-realisations_appartement-haussmann-paris_index_html.mjs').then(m => m.default)},
    'nos-realisations/villa-contemporaine-saint-cloud/index.html': {size: 190194, hash: '70e1e2aa11e75888d8ab7f62c4c13061e3fa9639d3f657363a20b198d0e9cb2b', text: () => import('./assets-chunks/nos-realisations_villa-contemporaine-saint-cloud_index_html.mjs').then(m => m.default)},
    'devis-gratuit/index.html': {size: 213586, hash: '5b0dbaea6bc926f11e702c91062278d827c6f83edcdf9bc07ecb0859882240e6', text: () => import('./assets-chunks/devis-gratuit_index_html.mjs').then(m => m.default)},
    'nos-realisations/renovation-extension-maison-saint-germain-en-laye/index.html': {size: 171498, hash: '5412ddf3d80432862b229ff011616ba948710b7ade2450ab737e93bb3e4292b6', text: () => import('./assets-chunks/nos-realisations_renovation-extension-maison-saint-germain-en-laye_index_html.mjs').then(m => m.default)},
    'mentions-legales/index.html': {size: 106324, hash: 'ebd31d854c3e4c13ab17c9a6db9522c3425b5ee861844cb8486347d79c4c04de', text: () => import('./assets-chunks/mentions-legales_index_html.mjs').then(m => m.default)},
    'politique-de-confidentialite/index.html': {size: 113261, hash: 'f0cc7291fd686dd5f3cd4aa0036b2e0404cca7c74c3bc8698444d2a068dd2f0e', text: () => import('./assets-chunks/politique-de-confidentialite_index_html.mjs').then(m => m.default)},
    'styles-VHB47GOZ.css': {size: 14904, hash: 'GP/Ex1MGUug', text: () => import('./assets-chunks/styles-VHB47GOZ_css.mjs').then(m => m.default)}
  },
};
