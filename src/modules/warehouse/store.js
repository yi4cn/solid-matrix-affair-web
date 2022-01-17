import { getCategories, getItemByPattern } from './services/warehouse-service';

const WarehouseStoreModule = {
    namespace: 'warehouse',
    namespaced: true,

    state: () => ({
        ready: false,
        categories: [],
        items: [],
    }),

    getters: {
    },

    mutations: {
        startLoad: (state) => state.ready = false,
        stopLoad: (state) => state.ready = true,
        updateCategories: (state, categories) => {
            state.categories = categories;
        },
        updateItems: (state, items) => {
            state.items = items;
        }
    },
    actions: {
        fetchCategories({ commit }) {
            commit('startLoad');
            getCategories().then(categories => {
                commit('updateCategories', categories)
                commit('stopLoad');
            })
        },
        queryByPattern({ commit }, search) {
            commit('startLoad');
            getItemByPattern(search).then(items => {
                commit('updateItems', items)
                commit('stopLoad');
            })

        }
    }
}
export default WarehouseStoreModule;