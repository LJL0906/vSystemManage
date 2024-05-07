import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from './store';
import { setupRouter } from './router';
import Lazyload from 'vue3-lazyload';
import './style.css';

const app = createApp(App);

setupStore(app);
setupRouter(app);

app
  .use(Lazyload, {
    observerOptions: {
      rootMargin: '0px',
      threshold: 0.1
    }
  })
  .mount('#app');
