import { createApp } from 'vue';
import RouterLayout from '@/components/router-layout.vue';

import router from '@/router';
import store from '@/store';
import register from './register';

// app
const app = createApp(RouterLayout);
app.use(router);
app.use(store);

// register global components
register(app);

// mount
app.mount('#app');

// init
import '@/assets/global.scss';