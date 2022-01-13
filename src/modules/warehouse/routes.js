import DashboardPage from './pages/dashboard-page.vue';
import InStockPage from './pages/in-stock-page.vue';
import OutStockPage from './pages/out-stock-page.vue';
import QueryPage from './pages/query-stock-page.vue';
import CategoryPage from './pages/category-page.vue';

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
        component: QueryPage
    },
    {
        path: '/warehouse/category/',
        name: 'warehouse-category',
        component: CategoryPage
    },
];

export default routes;