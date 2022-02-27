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
        createCategory({ commit, dispatch }, { data }) {
            commit('startLoad');
            return CategoryService.create(data)
                .then(() => {
                    commit('stopLoad');
                })
                .catch(e => {
                    commit('stopLoad');
                    throw e;
                })
                .then(() => dispatch('fetchCategories'))

        },
        updateCategory({ commit, dispatch }, { id, data }) {
            commit('startLoad');
            return CategoryService.update(id, data)
                .then(() => {
                    commit('stopLoad');
                })
                .catch(e => {
                    commit('stopLoad');
                    throw e;
                })
                .then(() => dispatch('fetchCategories'))

        },
        deleteCategory({ commit, dispatch }, { id }) {
            commit('startLoad');
            return CategoryService.delete(id)
                .then(() => {
                    commit('stopLoad');
                })
                .catch(e => {
                    commit('stopLoad');
                    throw e;
                })
                .then(() => dispatch('fetchCategories'))

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