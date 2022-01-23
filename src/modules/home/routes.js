const routes = [
    {
        path: '/admin/',
        name: 'admin',
        component: require('./pages/admin-page.vue').default,
    },
    {
        path: '/test/',
        name: 'test',
        component: require('./pages/test-page.vue').default,
    },
];

export default routes;