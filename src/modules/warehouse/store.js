const WarehouseStoreModule = {
    namespace: 'warehouse',
    namespaced: true,

    state: () => {
        return {
            ready: false,
        }
    },
    getters: {
        getReady: (state) => () => {
            return state.ready;
        }
    },
    mutations: {
        startLoad: (state) => state.ready = false,
        stopLoad: (state) => state.ready = true,
    },
    actions: {

    }
}
export default WarehouseStoreModule;