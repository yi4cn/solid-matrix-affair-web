import { createApp } from 'vue';
import SmRouterLayout from '@/components/sm-router-layout.vue';

import Router from '@/router';
import Store from '@/store';

import RouterSlashSuffix from './plugins/router-slash-suffix';
import SmComponents from './plugins/sm-components';

// app
const app = createApp(SmRouterLayout);

app.use(SmComponents);
app.use(Router);
app.use(Store);
app.use(RouterSlashSuffix, Router);

// mount
app.mount('#app');

// init
import '@/assets/global.scss';