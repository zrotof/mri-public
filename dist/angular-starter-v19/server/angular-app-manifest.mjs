
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
      "chunk-B55PALIA.js"
    ],
    "route": "/agence"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EL2BMCW4.js",
      "chunk-TS73LLPX.js",
      "chunk-4LJXKEBV.js"
    ],
    "route": "/devis-gratuit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IK6XOKAA.js",
      "chunk-4LJXKEBV.js"
    ],
    "route": "/contactez-nous"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IWUTRG6O.js"
    ],
    "route": "/nos-realisations"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5972, hash: '4d7926bd7c709695f2ba34b48243a89f180787e4f53a149f0f633a3e082c7ec9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5747, hash: '9586d2dbb417e7d157672d95316e88617fde768d57b94ed6d633ba00e16175f2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'agence/index.html': {size: 42328, hash: '44a6c9a99649de510a430e411cbd587fe249ed567a606a4d493f2bff91e3d1cc', text: () => import('./assets-chunks/agence_index_html.mjs').then(m => m.default)},
    'index.html': {size: 42275, hash: 'a71cf3222ff45c5da40b64dabc85573470209e8677682f516580570870ae18cf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contactez-nous/index.html': {size: 42380, hash: 'd0ea92daeda30d6fee1e956c2254986f392cd681fbfba873b84c250580390cae', text: () => import('./assets-chunks/contactez-nous_index_html.mjs').then(m => m.default)},
    'devis-gratuit/index.html': {size: 42432, hash: 'db8e10e032705c0a884224169e8ad7f08522452ae8d627ed4930280a4824c2cf', text: () => import('./assets-chunks/devis-gratuit_index_html.mjs').then(m => m.default)},
    'nos-realisations/index.html': {size: 42328, hash: '9e67fbdf461171a28ce501ec1a6abfea7334308fbef65094489df014c0cb6a4a', text: () => import('./assets-chunks/nos-realisations_index_html.mjs').then(m => m.default)},
    'styles-T4G5IPTJ.css': {size: 13979, hash: 'E1dOweogTNA', text: () => import('./assets-chunks/styles-T4G5IPTJ_css.mjs').then(m => m.default)}
  },
};
