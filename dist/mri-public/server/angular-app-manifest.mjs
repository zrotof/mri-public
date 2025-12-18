
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
    'index.csr.html': {size: 5860, hash: '869e37c5ba13888ea11ffe48eb20c8d8d166f841da6c39c44b1c9b58c64cdd3e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5594, hash: '0b499d9cf311b1fa4570d0db98ed40672b59a4a4117938ad83f13c7845a01cf2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 45612, hash: '96366a2854b94a093d61a19680f69dfda49ffc61ce4ba556c3e4d4719fc399c0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6D6JSZMT.css': {size: 15743, hash: 'ij5BS1UqpNw', text: () => import('./assets-chunks/styles-6D6JSZMT_css.mjs').then(m => m.default)}
  },
};
