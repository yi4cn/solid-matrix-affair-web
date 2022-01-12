import { createApp } from 'vue';
import router from '@/router';
import RouterLayout from '@/components/router-layout.vue';


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