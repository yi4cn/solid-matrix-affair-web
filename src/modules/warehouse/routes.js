const routes = [
    {
        path: '/warehouse/',
        name: 'warehouse-dashboard',
        component: require('./pages/dashboard-page.vue').default,
    },
    {
        path: '/warehouse/in-store/',
        name: 'warehouse-in-store',
        component: require('./pages/in-store-page.vue').default
    },
    {
        path: '/warehouse/out-store/',
        name: 'warehouse-out-store',
        component: require('./pages/out-store-page.vue').default
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