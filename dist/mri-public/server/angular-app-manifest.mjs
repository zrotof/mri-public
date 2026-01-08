
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
      "chunk-FIIVWD7J.js"
    ],
    "route": "/agence"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q66XLVHI.js"
    ],
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NRBUZT55.js"
    ],
    "route": "/contactez-nous"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YPXREJPG.js"
    ],
    "route": "/devis-gratuit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SUM2M4OP.js"
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
    'index.csr.html': {size: 6427, hash: 'ee9d6a6c69309cde79c29e93ea9685f5700b65a8f687c700b6e80a5bf50f3896', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6161, hash: '4452d0a4b70fcc64c73e3a2428a002784551b688dff9ec88d5a4a9f8a8c491c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46261, hash: '794e324f76ade3f2f44d6305017630b667eb39912c9fadb2c88d50601d317149', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'agence/index.html': {size: 46314, hash: '288fab6765e7d367a3951dd7ad3699bb6694467b954b2c2bcf2e587a549ebfe7', text: () => import('./assets-chunks/agence_index_html.mjs').then(m => m.default)},
    'contactez-nous/index.html': {size: 46314, hash: 'a88819e71fb766c18ccde5f5a6992def6a5f059ba93dfc7382c82ee1db059f35', text: () => import('./assets-chunks/contactez-nous_index_html.mjs').then(m => m.default)},
    'nos-realisations/index.html': {size: 46314, hash: '35b1f05572d5706275782dc05904fd277f613e4bbd74dd9d230a2711399c942e', text: () => import('./assets-chunks/nos-realisations_index_html.mjs').then(m => m.default)},
    'devis-gratuit/index.html': {size: 46314, hash: 'fbda6616286c74e7df2167b82ff4490b3d8224abe6f305a23e16d2ed3713c4a4', text: () => import('./assets-chunks/devis-gratuit_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 46314, hash: '748de99d1ba90f22f4bcd50be5ae483b96448132565d3807bc15a4a068d0f4bf', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'styles-6D6JSZMT.css': {size: 15743, hash: 'ij5BS1UqpNw', text: () => import('./assets-chunks/styles-6D6JSZMT_css.mjs').then(m => m.default)}
  },
};
