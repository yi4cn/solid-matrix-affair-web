import { createApp } from 'vue';

// router
import { createRouter, createWebHashHistory } from 'vue-router';
import RouterLayout from '@/components/router-layout.vue';
import CatalogsRoutes from '@/modules/catalogs/routes';
import HomeRoutes from '@/modules/home/routes';
const routes = [
    {
        path: '/',
        name: 'index',
        redirect: { name: 'home' }
    },
    ...CatalogsRoutes,
    ...HomeRoutes
];
const router = createRouter({ history: createWebHashHistory(), routes });


// store
import { createStore } from 'vuex';
import CatalogsStoreModule from '@/modules/catalogs/store';
const store = createStore({
    modules: { [CatalogsStoreModule.namespace]: CatalogsStoreModule }
});


// app
const app = createApp(RouterLayout);
app.use(router);
app.use(store);
app.mount('#app');

// init
import '@/assets/global.scss';