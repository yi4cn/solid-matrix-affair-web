import CatalogsPage from './pages/catalogs-page.vue';
import CatalogPage from './pages/catalog-page.vue';
import DesignPage from './pages/design-page.vue';
import SearchPage from './pages/search-page.vue';

const routes = [
    {
        path: '/catalogs/',
        name: 'catalogs',
        component: CatalogsPage,
    },
    {
        path: '/catalogs/catalog/:catalogId/',
        name: 'catalogs-catalog',
        component: CatalogPage,
        props: true
    },
    {
        path: '/catalogs/design/:designId/',
        name: 'catalogs-design',
        component: DesignPage,
        props: true
    },
    {
        path: '/catalogs/search/:search/',
        name: 'catalogs-search',
        component: SearchPage,
        props: true
    },
];

export default routes;