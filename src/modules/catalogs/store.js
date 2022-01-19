import { getMeta, getDesignUrl } from './services/resource-api';

export default {
    namespace: 'catalogs',
    namespaced: true,
    state: () => {
        return {
            ready: false,
            loading: false,
            caption: "",
            title: "",
            subTitle: "",
            catalogs: [],
            designs: [],
            catalogMap: {},
            designMap: {},
        }
    },
    getters: {
        getReady: (state) => () => {
            return state.ready;
        },
        getHomeMeta: (state) => () => {
            const { caption, title, subTitle } = state;
            return { caption, title, subTitle };
        },
        getCatalogs: (state) => () => {
            return state.catalogs;
        },
        getCatalog: (state) => (id) => {
            return state.catalogMap[id];
        },
        getDesign: (state) => (id) => {
            return state.designMap[id];
        },
        searchDesigns: (state) => (search) => {
            return state.designs.filter(d => d.name.includes(search));
        }
    },
    mutations: {
        loadMeta: (state) => {
            if (state.ready || state.loading) return;
            state.loading = true;

            getMeta().then(metaData => {

                if (metaData == null) {
                    state.loading = false;
                    return;
                }
                const { caption, title, subTitle, catalogs } = metaData;
                const catalogMap = {};
                const designMap = {};

                for (let i = 0; i < catalogs.length; i++) {
                    const catalog = catalogs[i];
                    catalog.title ||= catalog.name;
                    catalog.subTitle ||= catalog.name;
                    for (let j = 0; j < catalog.designs.length; j++) {
                        const design = catalog.designs[j];

                        // initial url with style;
                        const styleNames = ['thumbnail', 'small', 'medium', 'large'];
                        design.url = {};
                        for (let k = 0; k < styleNames.length; k++) {
                            const styleName = styleNames[k];
                            design.url[styleName] = getDesignUrl(design, styleName);
                        }

                        design.catalog = catalogMap[design.catalogId];
                        designMap[design.id] = design;
                    }
                    catalogMap[catalog.id] = catalog;
                }

                state.caption = caption;
                state.title = title;
                state.subTitle = subTitle;
                state.catalogs = catalogs;
                state.designs = catalogs.reduce((arr, catalog) => arr.concat(catalog.designs), []);
                state.catalogMap = catalogMap;
                state.designMap = designMap;
                state.ready = true;
                state.loading = false;
            })
        }
    },
    actions: {
        loadMeta: (ctx) => {
            ctx.commit('loadMeta');
        }
    }
};

