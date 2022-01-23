import { getItemsByPattern, getItemsByLocation } from './services/warehouse-service';
import CategoryService from './services/category-service';

export default {
    namespace: 'warehouse',
    namespaced: true,

    state: () => ({
        ready: true,
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
            return CategoryService.index()
                .then(categories => {
                    commit('updateCategories', categories)
                    commit('stopLoad');
                })
                .catch(e => {
                    commit('stopLoad');
                    throw e;
                })
        },

        updateCategory({ commit }, id, data) {
            commit('startLoad');
            return CategoryService.update(id, data)
                .then(category => {
                    console.log(category);
                    commit('stopLoad');
                })
                .catch(e => {
                    commit('stopLoad');
                    throw e;
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