import { createApp } from 'vue';
import RouterLayout from './components/router-layout.vue';
import SmComponents from './plugins/sm-components/plugin';
import Router from '@/router';
import Store from '@/store';


const app = createApp(RouterLayout);
app.use(SmComponents);
app.use(Router);
app.use(Store);
app.mount('#app');

// init
import '@/assets/global.scss';