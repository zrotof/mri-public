
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
    'index.csr.html': {size: 6070, hash: '4e327aae56e0e64bae646bd795c8d09b07c06d42cd1e6a2dc6a0edc982677028', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5804, hash: '3ceb5a42cf92a89ad920bd14b0efc7c9c72007b7cbcc0649f31bd436079cca5c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 45904, hash: 'd5b4d0f25e4a848c56959de2199c8a0e62868987cf9ca8bfcc43e111b93b2e75', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6D6JSZMT.css': {size: 15743, hash: 'ij5BS1UqpNw', text: () => import('./assets-chunks/styles-6D6JSZMT_css.mjs').then(m => m.default)}
  },
};
