import { createStore } from 'vuex';
import CatalogsStoreModule from '@/modules/catalogs/store';
import WarehouseStoreModule from '@/modules/warehouse/store';
import ToolkitsStoreModule from '@/modules/toolkits/store';
import HomeStoreModule from '@/modules/home/store';

const store = createStore({
    modules: {
        [CatalogsStoreModule.namespace]: CatalogsStoreModule,
        [WarehouseStoreModule.namespace]: WarehouseStoreModule,
        [ToolkitsStoreModule.namespace]: ToolkitsStoreModule,
        [HomeStoreModule.namespace]: HomeStoreModule,
    }
});

export default store;