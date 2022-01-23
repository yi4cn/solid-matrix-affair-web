import { createApp } from 'vue';
import SmRouterLayout from '@/components/sm-router-layout.vue';

import router from '@/router';
import store from '@/store';
import register from './register';

// app
const app = createApp(SmRouterLayout);
app.use(router);
app.use(store);

// register global components
register(app);

// mount
app.mount('#app');

// init
import '@/assets/global.scss';