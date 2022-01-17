const routes = [
    {
        path: '/warehouse/',
        name: 'warehouse-dashboard',
        component: require('./pages/dashboard-page.vue').default,
    },
    {
        path: '/warehouse/in-stock/',
        name: 'warehouse-in-stock',
        component: require('./pages/in-stock-page.vue').default
    },
    {
        path: '/warehouse/out-stock/',
        name: 'warehouse-out-stock',
        component: require('./pages/out-stock-page.vue').default
    },
    {
        path: '/warehouse/query-pattern/',
        name: 'warehouse-query-pattern',
        component: require('./pages/query-pattern-page.vue').default
    },
    {
        path: '/warehouse/query-location/',
        name: 'warehouse-query-location',
        component: require('./pages/query-location-page.vue').default
    },
    {
        path: '/warehouse/query-item/',
        name: 'warehouse-query-item',
        component: require('./pages/query-item-page.vue').default
    },
    {
        path: '/warehouse/category/',
        name: 'warehouse-category',
        component: require('./pages/category-page.vue').default
    }
];

export default routes;