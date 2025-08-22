
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
      "chunk-7OHDS2A4.js"
    ],
    "route": "/agence"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7GBY5IU.js",
      "chunk-TS73LLPX.js"
    ],
    "route": "/devis-gratuit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4910, hash: 'e1fceedf271ba06fa077d1e19bfc849f24b72cf15c4648310aa6e5878dda60b9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4725, hash: '119b717935e7e61623e98c8d6905a7c039a22fd85ee6996cbafcbd8e6b11981f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'agence/index.html': {size: 68491, hash: 'ebb7fcebc2c6a5d0fa63574174d743ee1020084998b1715aee4d213eb6ccfde6', text: () => import('./assets-chunks/agence_index_html.mjs').then(m => m.default)},
    'index.html': {size: 120230, hash: '1c17baeb8d0886c8f5c7b70f6e681f5afa707e38f8f99bdb8e6e444c4327e592', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'devis-gratuit/index.html': {size: 84323, hash: '5107672f9ba2fed5b17c54802fdd411786359452d3b43be7f364753154e71c1e', text: () => import('./assets-chunks/devis-gratuit_index_html.mjs').then(m => m.default)},
    'styles-UE4VLJ65.css': {size: 13938, hash: 'N23Qxwmj32Y', text: () => import('./assets-chunks/styles-UE4VLJ65_css.mjs').then(m => m.default)}
  },
};
