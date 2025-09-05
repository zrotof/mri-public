
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
      "chunk-D7Z2ZMNV.js"
    ],
    "route": "/agence"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7M6LQQXD.js",
      "chunk-TS73LLPX.js",
      "chunk-5AN57CVD.js"
    ],
    "route": "/devis-gratuit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FYYZKRKK.js",
      "chunk-5AN57CVD.js"
    ],
    "route": "/contactez-nous"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ONZ27VJU.js"
    ],
    "route": "/nos-realisations"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5070, hash: 'ce46264913d0f0a242afe42a332069ec2c0f6ffc6598624016c4fbaa5d9427d2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4845, hash: '97e9680df877b6ad70cd8be95e9b46b4fceed904f2aa2513953435c706e96801', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'agence/index.html': {size: 71381, hash: '03e4b1cc2eceab2b7d381c524f51636f7fea46d29256e52e5b95ff2dd7ea2302', text: () => import('./assets-chunks/agence_index_html.mjs').then(m => m.default)},
    'contactez-nous/index.html': {size: 70947, hash: '86ae7bb3df480c71ffa912de41219dedab72c4431d318f9f539181120950cba6', text: () => import('./assets-chunks/contactez-nous_index_html.mjs').then(m => m.default)},
    'index.html': {size: 121702, hash: 'a280d823754ae1377a65422485609dabb699ef6fb6f8c5e2579a68191e38cade', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'nos-realisations/index.html': {size: 62496, hash: '060266e1141bae7b0e3474dda30a2ed30cbaf30db57e46f5c1a88b6196972cff', text: () => import('./assets-chunks/nos-realisations_index_html.mjs').then(m => m.default)},
    'devis-gratuit/index.html': {size: 85203, hash: '616c74b4e9449d7d62374de041013503631b3020b1fe67d31e65bd5fc98c4c8e', text: () => import('./assets-chunks/devis-gratuit_index_html.mjs').then(m => m.default)},
    'styles-T4G5IPTJ.css': {size: 13979, hash: 'E1dOweogTNA', text: () => import('./assets-chunks/styles-T4G5IPTJ_css.mjs').then(m => m.default)}
  },
};
