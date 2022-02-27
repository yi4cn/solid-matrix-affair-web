import { createStore } from 'vuex';
import CatalogsStoreModule from '@/modules/catalogs/store';
import DashboardStoreModule from '@/modules/dashboard/store';
import { JsonRpcClient } from './utils/json-rpc';

const identityJrpcUrl = process.env['VUE_APP_IDENTITY_RPC_URL'];
const identityJrpc = new JsonRpcClient(identityJrpcUrl);

const store = createStore({
    modules: {
        [CatalogsStoreModule.namespace]: CatalogsStoreModule,
        [DashboardStoreModule.namespace]: DashboardStoreModule,
    },
    state: {
        loading: 0,
        user: null,
        authorization: null,
    },
    getters: {
        authorization: state => state.authorization,
        user: state => state.user,
        userRoles: state => state.user?.roles.split(';') || [],
        isLoading: state => state.loading != 0,
        isLoggedIn: state => state.user != null,
    },
    mutations: {
        setUser: (state, user) => {
            state.user = user;
        },
        setAuthorization: (state, token) => {
            state.authorization = token;
        },
        loadingUp: (state) => {
            state.loading++;
        },
        loadingDown: (state) => {
            state.loading--;
        }
    },
    actions: {
        accountLogin: async ({ commit }, { username, password }) => {
            try {
                commit('loadingUp');
                const { jwt, user } = await identityJrpc.request('auth.accountLogin', { username, password });
                commit('setAuthorization', jwt);
                commit('setUser', user);
                JsonRpcClient.setGlobalHeader('Authorization', jwt);
            } finally {
                commit('loadingDown');
            }

        },
        weixinLogin: async ({ commit }, { code }) => {
            try {
                commit('loadingUp');
                const { jwt, user } = await identityJrpc.request('auth.weixinLogin', { code });
                commit('setAuthorization', jwt);
                commit('setUser', user);
                JsonRpcClient.setGlobalHeader('Authorization', jwt);
            } finally {
                commit('loadingDown');
            }
        },
        weixinRegister: async ({ commit }, { nickname, code }) => {
            try {
                commit('loadingUp');
                const user = await identityJrpc.request('auth.weixinRegister', { nickname, code });
            } finally {
                commit('loadingDown');
            }

        },

    }
});

export default store;