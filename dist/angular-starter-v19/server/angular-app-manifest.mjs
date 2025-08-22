
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
      "chunk-EUUBMNDG.js"
    ],
    "route": "/agence"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SNZU6FM2.js",
      "chunk-TS73LLPX.js"
    ],
    "route": "/devis-gratuit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4979, hash: '93fe359505583dc2e3fe8ac8c937c89830dd4725e37db940b14286d2459ca803', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4794, hash: '9e393d5bc22ccba66abae915633c6ba1226ac7d64b4c80fca8a9b221f305e788', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'agence/index.html': {size: 70289, hash: 'e651554562f9f92611cc5ec722a929d02d3426633818df68659f4cf47b1ed77f', text: () => import('./assets-chunks/agence_index_html.mjs').then(m => m.default)},
    'devis-gratuit/index.html': {size: 84654, hash: '92875df94bc5befbbeb64a3588f7b9f790bbdfff02f8a5a44b6c3efabb143693', text: () => import('./assets-chunks/devis-gratuit_index_html.mjs').then(m => m.default)},
    'index.html': {size: 120748, hash: '80c8bb3c6b99403f5ca97cd5038873aae5329ef69360a466ed73ab7fbfea9215', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UE4VLJ65.css': {size: 13938, hash: 'N23Qxwmj32Y', text: () => import('./assets-chunks/styles-UE4VLJ65_css.mjs').then(m => m.default)}
  },
};
