import { getCategories, getItemsByPattern, getItemsByLocation } from './services/warehouse-service';

export default {
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
        clearItems({ commit }) {
            commit('updateItems', [])
        },
        queryByPattern({ commit }, search) {
            commit('startLoad');
            getItemsByPattern(search).then(items => {
                commit('updateItems', items)
                commit('stopLoad');
            })

        },
        queryByLocation({ commit }, search) {
            commit('startLoad');
            getItemsByLocation(search).then(items => {
                commit('updateItems', items)
                commit('stopLoad');
            })

        },
    }
};