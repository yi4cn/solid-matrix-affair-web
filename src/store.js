import { createStore } from 'vuex';
import CatalogsStoreModule from '@/modules/catalogs/store';
import WarehouseStoreModule from '@/modules/warehouse/store';

const store = createStore({
    modules: {
        [CatalogsStoreModule.namespace]: CatalogsStoreModule,
        [WarehouseStoreModule.namespace]: WarehouseStoreModule,
    }
});

export default store;