import DefaultTheme from 'vitepress/theme';
import NotFound from './NotFound.vue';
import HomeView from './components/HomeView.vue';
import SponsorView from './components/SponsorView.vue';
import LeagueToolDownload from './components/LeagueToolDownload.vue';
import VSCodeDownload from './components/VSCodeDownload.vue';
import './styles/vars.css';
import type { App } from 'vue';

export default {
  ...DefaultTheme,
  NotFound,
  enhanceApp({ app }: { app: App }) {
    app
      .component('HomeView', HomeView)
      .component('SponsorView', SponsorView)
      .component('LeagueToolDownload', LeagueToolDownload)
      .component('VSCodeDownload', VSCodeDownload);
  },
};
