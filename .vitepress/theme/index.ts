import type { Theme } from 'vitepress';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import './styles/custom.css';

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
  },

  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  },
};
export default theme;
