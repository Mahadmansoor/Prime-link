
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Mahadmansoor.github.io/Prime-link/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Prime-link"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 844, hash: '8488a2d11620a657da740f8ed68d6ae106a70e2e0772f405cb25c6bde87ed614', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1049, hash: '964e618f617a170a0ee70d526f8e2bace00c9d55ce4003c0310a3eb7da11a105', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12583, hash: 'fe0da92b358833ad91e3381720468ea34576b739a1eca785cd4651f92f480e78', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OHRZH6N6.css': {size: 1477, hash: 'yXMadeD4dDs', text: () => import('./assets-chunks/styles-OHRZH6N6_css.mjs').then(m => m.default)}
  },
};
