import DefaultTheme from 'vitepress/theme';
import NotFound from './NotFound.vue';
import type { App } from 'vue';
import './styles/vars.css';

export default {
  ...DefaultTheme,
  NotFound,
  enhanceApp({ app }: { app: App }) {},
};
