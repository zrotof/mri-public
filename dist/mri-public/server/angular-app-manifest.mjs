
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
    'index.csr.html': {size: 5860, hash: '60313639dfef5be2091fe152012c3c513b3e9e196a5459711e0f510310d75775', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5594, hash: '6130c1762ee0ad5930f60c6184ccd7f709750a020e25edb044f3173a780d9a99', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 45147, hash: 'c7ad55438d629a791bf0ad4c2663f9db8d5150616802d1130fc151bf72c4d5cb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6D6JSZMT.css': {size: 15743, hash: 'ij5BS1UqpNw', text: () => import('./assets-chunks/styles-6D6JSZMT_css.mjs').then(m => m.default)}
  },
};
