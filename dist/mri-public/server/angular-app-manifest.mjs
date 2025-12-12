
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
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5860, hash: 'bbb25482872df3c25331b678ecc6a5fc84ff532625b3fea1502f41a08f9ce5a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5594, hash: 'c4acf92a218066ea631034cb24bd59c95b74d4da4df5baad38ab4a8a45372f78', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49742, hash: 'ae31d547bf93f531b196310831c45332e95a8b89c1309fd05e38ae541bac8563', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6D6JSZMT.css': {size: 15743, hash: 'ij5BS1UqpNw', text: () => import('./assets-chunks/styles-6D6JSZMT_css.mjs').then(m => m.default)}
  },
};
