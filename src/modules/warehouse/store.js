import { getCategories } from './services/warehouse-service';

const WarehouseStoreModule = {
    namespace: 'warehouse',
    namespaced: true,

    state: () => ({
        ready: false,
        categories: [],
        queryItems: [],
    }),

    getters: {
    },

    mutations: {
        startLoad: (state) => state.ready = false,
        stopLoad: (state) => state.ready = true,
        updateCategories: (state, categories) => {
            state.categories = categories;
        }
    },
    actions: {
        fetchCategories({ commit }) {
            commit('startLoad');
            getCategories().then(categories => {
                commit('updateCategories', categories)
                commit('stopLoad');
            })
        }
    }
}
export default WarehouseStoreModule;