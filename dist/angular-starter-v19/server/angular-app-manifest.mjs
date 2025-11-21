
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
      "chunk-H5QE6DRZ.js"
    ],
    "route": "/agence"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AO3YQOCH.js"
    ],
    "route": "/devis-gratuit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-57PVSQ2Q.js"
    ],
    "route": "/contactez-nous"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZMNFMTQM.js"
    ],
    "route": "/nos-realisations"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6243, hash: 'b3334f665c631f8280a14cc0034964b0ff0d4ef9be995850e94b8742f0dcbf38', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6002, hash: 'ba71abc328a4ced9454f3515e9c2b356cc093492740d32a99fad12d73c7cbc66', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'agence/index.html': {size: 70730, hash: '243c1b52dcfca7dac4ee2a3e1b91d05cc6e0fa88a5760ebd939eb1169e6437db', text: () => import('./assets-chunks/agence_index_html.mjs').then(m => m.default)},
    'devis-gratuit/index.html': {size: 58237, hash: '9f420ead2d8797b6e3104f6e2a5512698c8a3e1fc0779ed4b0ffa9a19ad5fe11', text: () => import('./assets-chunks/devis-gratuit_index_html.mjs').then(m => m.default)},
    'contactez-nous/index.html': {size: 71807, hash: '3c0bdd53dad1963eb0f3f179a68d895038b7ab6fec62321b6ae13ee5ae5b9887', text: () => import('./assets-chunks/contactez-nous_index_html.mjs').then(m => m.default)},
    'index.html': {size: 122435, hash: 'fff42c877f1ffb09f8e4dcdc5232a3af020a38016b52f86ff64364a32ea585c4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'nos-realisations/index.html': {size: 57445, hash: '168f41a743a045fbebd87db473af264496bdebc91ade62c1b803fa41a9d960a9', text: () => import('./assets-chunks/nos-realisations_index_html.mjs').then(m => m.default)},
    'styles-CRQTCRLM.css': {size: 15718, hash: 'OOxzIHH8UvI', text: () => import('./assets-chunks/styles-CRQTCRLM_css.mjs').then(m => m.default)}
  },
};
