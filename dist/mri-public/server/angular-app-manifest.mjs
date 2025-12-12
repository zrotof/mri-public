
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
    'index.csr.html': {size: 5860, hash: '706edfee07ac180b2548aa6a1997a63ad33e86be59fd85d98ff7882806cb8f46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5594, hash: '4f0814cc14b594d11ff3c8b9cb90b88b22a1e45b121a96d293d42e10b95a92bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49689, hash: '59cc399326e234f759609e3f31c4f8ab0f5028e3c7f8e19f2e8091e3ccad7ce4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6D6JSZMT.css': {size: 15743, hash: 'ij5BS1UqpNw', text: () => import('./assets-chunks/styles-6D6JSZMT_css.mjs').then(m => m.default)}
  },
};
