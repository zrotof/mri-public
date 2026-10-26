
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
      "chunk-ZUHTDAP4.js",
      "chunk-OHF3ZIZP.js"
    ],
    "route": "/agence"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TAEW7DB4.js",
      "chunk-7BPONMVC.js",
      "chunk-WYLU3PM3.js",
      "chunk-AFLOYEBH.js",
      "chunk-OHF3ZIZP.js"
    ],
    "route": "/contactez-nous"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L4FQ6VAR.js",
      "chunk-7BPONMVC.js",
      "chunk-TS73LLPX.js",
      "chunk-77FJJZL2.js",
      "chunk-WYLU3PM3.js",
      "chunk-OHF3ZIZP.js"
    ],
    "route": "/devis-gratuit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UITZS3OZ.js",
      "chunk-RUDMID2U.js",
      "chunk-AFLOYEBH.js",
      "chunk-OHF3ZIZP.js"
    ],
    "route": "/nos-realisations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TP2QTXFC.js",
      "chunk-46IRDTKB.js",
      "chunk-RUDMID2U.js",
      "chunk-AFLOYEBH.js",
      "chunk-OHF3ZIZP.js"
    ],
    "route": "/nos-realisations/villa-contemporaine-saint-cloud"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TP2QTXFC.js",
      "chunk-46IRDTKB.js",
      "chunk-RUDMID2U.js",
      "chunk-AFLOYEBH.js",
      "chunk-OHF3ZIZP.js"
    ],
    "route": "/nos-realisations/appartement-haussmann-paris"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TP2QTXFC.js",
      "chunk-46IRDTKB.js",
      "chunk-RUDMID2U.js",
      "chunk-AFLOYEBH.js",
      "chunk-OHF3ZIZP.js"
    ],
    "route": "/nos-realisations/renovation-extension-maison-saint-germain-en-laye"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TP2QTXFC.js",
      "chunk-46IRDTKB.js",
      "chunk-RUDMID2U.js",
      "chunk-AFLOYEBH.js",
      "chunk-OHF3ZIZP.js"
    ],
    "route": "/nos-realisations/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G2ITGXSN.js",
      "chunk-OHF3ZIZP.js"
    ],
    "route": "/mentions-legales"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y5S6FETR.js",
      "chunk-OHF3ZIZP.js"
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
    'index.csr.html': {size: 6560, hash: 'd6129ed63f1840d454466cee0e831bb87f6f3d97a1a36e8ecb1bf0674b7aa658', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6212, hash: 'c07e743d2e432da7babb6d6dca92b6d61b0cfa71d644e837799e5dc137b3df50', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'agence/index.html': {size: 143479, hash: '598b0ef27aae662b95f1f10c85e4c0769615bbc70550c3ce2cd52c4b25cbf04d', text: () => import('./assets-chunks/agence_index_html.mjs').then(m => m.default)},
    'index.html': {size: 117302, hash: '3cee76fe7731b5e38c0661494b161c62de60a75be6f8da04c66ef9ad73ecc380', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contactez-nous/index.html': {size: 191390, hash: 'd2d669e27f90f7783841edb986702d9be7b2035160d0e4a449235c594e857174', text: () => import('./assets-chunks/contactez-nous_index_html.mjs').then(m => m.default)},
    'nos-realisations/index.html': {size: 112342, hash: 'bca5660423e9461f6ab3a4644dce1b56701c622f711d67db781ed9dda6fbb549', text: () => import('./assets-chunks/nos-realisations_index_html.mjs').then(m => m.default)},
    'nos-realisations/villa-contemporaine-saint-cloud/index.html': {size: 200545, hash: '04c84bd4268ba81cecbb2447ad7a995d267c580d96edb6564fa68f537b549bc5', text: () => import('./assets-chunks/nos-realisations_villa-contemporaine-saint-cloud_index_html.mjs').then(m => m.default)},
    'devis-gratuit/index.html': {size: 222760, hash: 'b9f5a8fe735f64654ba6679909133cad1065762c3641739207ac3c907f9d199b', text: () => import('./assets-chunks/devis-gratuit_index_html.mjs').then(m => m.default)},
    'nos-realisations/renovation-extension-maison-saint-germain-en-laye/index.html': {size: 181307, hash: 'e1f8e50fba5dda1bd5f97990108b90232d069d756a1ca45e7071048f7753fa14', text: () => import('./assets-chunks/nos-realisations_renovation-extension-maison-saint-germain-en-laye_index_html.mjs').then(m => m.default)},
    'nos-realisations/appartement-haussmann-paris/index.html': {size: 165272, hash: 'bbae84be6787c751b9677a234073ea1c9e2df69918c8877ecca5f5a42ebff049', text: () => import('./assets-chunks/nos-realisations_appartement-haussmann-paris_index_html.mjs').then(m => m.default)},
    'politique-de-confidentialite/index.html': {size: 121762, hash: 'f1a18834c7804bb3fa68c00a917b6ed68bbbb6c232c9bb3e255847f36bc11b5f', text: () => import('./assets-chunks/politique-de-confidentialite_index_html.mjs').then(m => m.default)},
    'mentions-legales/index.html': {size: 114813, hash: '4089fc6d9a626e51342bf91dfc3e867ceade65331f65c37dd3602a403c00d339', text: () => import('./assets-chunks/mentions-legales_index_html.mjs').then(m => m.default)},
    'styles-6O3ZCRKE.css': {size: 14984, hash: 'Z8PqwfaxHs0', text: () => import('./assets-chunks/styles-6O3ZCRKE_css.mjs').then(m => m.default)}
  },
};
