import DashboardPage from './pages/dashboard-page.vue';
import InStockPage from './pages/in-stock-page.vue';
import OutStockPage from './pages/out-stock-page.vue';
import QueryStockPage from './pages/query-stock-page.vue';
import QueryLocationPage from './pages/query-location-page.vue';
import CategoryPage from './pages/category-page.vue';

import TestPage from './pages/test-page.vue';

const routes = [
    {
        path: '/warehouse/',
        name: 'warehouse-dashboard',
        component: DashboardPage,
    },
    {
        path: '/warehouse/in-stock/',
        name: 'warehouse-in-stock',
        component: InStockPage
    },
    {
        path: '/warehouse/out-stock/',
        name: 'warehouse-out-stock',
        component: OutStockPage
    },
    {
        path: '/warehouse/query-stock/',
        name: 'warehouse-query-stock',
        component: QueryStockPage
    },
    {
        path: '/warehouse/query-location/',
        name: 'warehouse-query-location',
        component: QueryLocationPage
    },
    {
        path: '/warehouse/category/',
        name: 'warehouse-category',
        component: CategoryPage
    },
    {
        path: '/test/',
        name: 'test',
        component: TestPage,
    }
];

export default routes;