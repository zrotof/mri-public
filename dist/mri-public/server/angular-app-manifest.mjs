
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
      "chunk-CF56D5AW.js"
    ],
    "route": "/agence"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4LDIJDHF.js"
    ],
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B756IY2Y.js",
      "chunk-BBUT356J.js"
    ],
    "route": "/contactez-nous"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UUHYLYRN.js",
      "chunk-TS73LLPX.js",
      "chunk-BBUT356J.js"
    ],
    "route": "/devis-gratuit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E5PWEVMJ.js"
    ],
    "route": "/nos-realisations"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YUHQA2BA.js"
    ],
    "route": "/nos-realisations/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6470, hash: '54e66d126de66884d1662b84c575ca114bc03f7e5d18b31d8f27da00abeec9e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6161, hash: 'b433eb3e7d083099b32958dc1a16555ad542425969d5cc4ae1fea525259d5adc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'agence/index.html': {size: 129861, hash: '05ec33ffd3fc1cc09a8bb7c0acdc353fdf963b0e7a58da88c8ca4bf62099bb7a', text: () => import('./assets-chunks/agence_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 106615, hash: '391c4cac578235f53655e1a96606a6792bc0710047fffdc94136c26f27148c60', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 195886, hash: '249bd5ba26aee00d8ba7c0572f69a7f29addc9eacd0b0e3d6ef4c61914073637', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contactez-nous/index.html': {size: 112244, hash: '1553f31038b078f9fa8c5593685bb6534bc7b3898da1ed4bada55a61ecb3b775', text: () => import('./assets-chunks/contactez-nous_index_html.mjs').then(m => m.default)},
    'nos-realisations/index.html': {size: 92188, hash: '65a3ed8aae0156bb049b4c19ac2b86e2b3bc55547f2300112f74d3cf5d42033f', text: () => import('./assets-chunks/nos-realisations_index_html.mjs').then(m => m.default)},
    'devis-gratuit/index.html': {size: 205582, hash: '648f2013a47dc834101c65acf9d9306b7410ea8ea8737f2dae87e039bf67d33a', text: () => import('./assets-chunks/devis-gratuit_index_html.mjs').then(m => m.default)},
    'styles-VHB47GOZ.css': {size: 14904, hash: 'GP/Ex1MGUug', text: () => import('./assets-chunks/styles-VHB47GOZ_css.mjs').then(m => m.default)}
  },
};
