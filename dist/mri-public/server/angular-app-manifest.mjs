
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
      "chunk-BQAGDX3P.js"
    ],
    "route": "/agence"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SZBCSQ53.js"
    ],
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X25EVXN4.js"
    ],
    "route": "/contactez-nous"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7AGZI3RA.js"
    ],
    "route": "/devis-gratuit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-W63MPQHD.js"
    ],
    "route": "/nos-realisations"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6470, hash: '4fa13e795b57a0d30beb02213c63fc623e84fad2ed6a5efab5f44296749cc834', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6161, hash: 'e9acda00ec855078d60598ebd9f7a16cd88bfd12e0d713591d2e4da944226126', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'agence/index.html': {size: 86583, hash: '631e1c091ac262cbb7e72c565dcd58c27c0bb99a041e039478ac5934b67ef031', text: () => import('./assets-chunks/agence_index_html.mjs').then(m => m.default)},
    'index.html': {size: 128469, hash: 'a3c18ac6a7843b50a315fa686ba0e4d1b69479beb771f8320f77e2ff594b3cfd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contactez-nous/index.html': {size: 73347, hash: '4d74f3beb487e7793fc9bdd34926500a51a4f75bc0f12adf2adaa52171dae2ad', text: () => import('./assets-chunks/contactez-nous_index_html.mjs').then(m => m.default)},
    'devis-gratuit/index.html': {size: 59781, hash: '94ac6e34cadd8af5ddf10d611110e899ca0703e948a8dfd33ed5ff63cabcd574', text: () => import('./assets-chunks/devis-gratuit_index_html.mjs').then(m => m.default)},
    'nos-realisations/index.html': {size: 59035, hash: '8fe6059b8138e9777834eae52ce543c44987686022a1cc99039f83cfa0c6fc0e', text: () => import('./assets-chunks/nos-realisations_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 73519, hash: '7dd274ff834856f1d6ebe41083b7829666c88c81aec4c88142d22f9fc0631edf', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'styles-JLOULKRJ.css': {size: 15786, hash: 'BwPfxMT80hU', text: () => import('./assets-chunks/styles-JLOULKRJ_css.mjs').then(m => m.default)}
  },
};
