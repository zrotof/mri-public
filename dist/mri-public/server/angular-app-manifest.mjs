
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
      "chunk-3NY36J5K.js"
    ],
    "route": "/agence"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B7DSOGHU.js",
      "chunk-FJIZLKQA.js"
    ],
    "route": "/contactez-nous"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MMSRVUSC.js",
      "chunk-TS73LLPX.js",
      "chunk-FJIZLKQA.js"
    ],
    "route": "/devis-gratuit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P5IKZTYZ.js"
    ],
    "route": "/nos-realisations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V7BVUKVC.js"
    ],
    "route": "/nos-realisations/villa-contemporaine-saint-cloud"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V7BVUKVC.js"
    ],
    "route": "/nos-realisations/appartement-haussmann-paris"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V7BVUKVC.js"
    ],
    "route": "/nos-realisations/renovation-extension-maison-saint-germain-en-laye"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-V7BVUKVC.js"
    ],
    "route": "/nos-realisations/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RHN676IW.js"
    ],
    "route": "/mentions-legales"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q67CJIXO.js"
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
    'index.csr.html': {size: 6560, hash: '663da92d43f5fdd20143d0918023450395ceace44dc872d386070dcf73a1e2fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6212, hash: 'f688da908a1b54670b70c934e08da9a59431ad658624b0ee67d1bb6b406fb758', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'agence/index.html': {size: 134393, hash: '3774dc223109628bc94d398620c3915decbfff7ca0ac4e34b7e38a5f461dfd0d', text: () => import('./assets-chunks/agence_index_html.mjs').then(m => m.default)},
    'index.html': {size: 221470, hash: '20519d3154d50d7e20fdb62be1f6b4c4ef66cc195ddc72384a57cc06a7d65892', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contactez-nous/index.html': {size: 181475, hash: '26490626d1c1cb6daad4da86f5bf12e947030c4350b0ec4a5494f5e68df2fcc6', text: () => import('./assets-chunks/contactez-nous_index_html.mjs').then(m => m.default)},
    'nos-realisations/index.html': {size: 102473, hash: '20226b75205c858d5cda0b620e8539ae95e49a0b5594985ad7b3b96ef69221b7', text: () => import('./assets-chunks/nos-realisations_index_html.mjs').then(m => m.default)},
    'nos-realisations/villa-contemporaine-saint-cloud/index.html': {size: 190518, hash: '168aec6b28dd69e366b7000562e4eba69e8509df3c9ec5f52deda8650d1f400c', text: () => import('./assets-chunks/nos-realisations_villa-contemporaine-saint-cloud_index_html.mjs').then(m => m.default)},
    'nos-realisations/appartement-haussmann-paris/index.html': {size: 155375, hash: '7f9ac73b4ec9b97c6390360befa81ca4efcd896a92cc3bb0dfde10a12fde93e2', text: () => import('./assets-chunks/nos-realisations_appartement-haussmann-paris_index_html.mjs').then(m => m.default)},
    'devis-gratuit/index.html': {size: 213152, hash: 'da761cfe8a65729112d4f89f5790a90ab8b10c89021c81ba7458c14bd4a867be', text: () => import('./assets-chunks/devis-gratuit_index_html.mjs').then(m => m.default)},
    'nos-realisations/renovation-extension-maison-saint-germain-en-laye/index.html': {size: 171361, hash: 'ca058d87d014b13686ce27c97ebdd6f3f0642588d75a1a6a9a81ef2ffb29dd2f', text: () => import('./assets-chunks/nos-realisations_renovation-extension-maison-saint-germain-en-laye_index_html.mjs').then(m => m.default)},
    'mentions-legales/index.html': {size: 105290, hash: 'f9b8723bd572ee7754e332d6729e262df55338a0a797fee7840d619d3648c836', text: () => import('./assets-chunks/mentions-legales_index_html.mjs').then(m => m.default)},
    'politique-de-confidentialite/index.html': {size: 112227, hash: '2b2360e541224b3d463a727ec0117fce3c0bb5f75ff3ebbf252738c9201f6a79', text: () => import('./assets-chunks/politique-de-confidentialite_index_html.mjs').then(m => m.default)},
    'styles-5AJ3NEMF.css': {size: 14944, hash: 'FDJxZCJsIWo', text: () => import('./assets-chunks/styles-5AJ3NEMF_css.mjs').then(m => m.default)}
  },
};
