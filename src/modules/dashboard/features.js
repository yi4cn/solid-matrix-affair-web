export default [
  {
    name: 'admin',
    caption: '管理',
    icon: 'admin',
    path: '/admin/',
    component: require('./features/admin-page.vue').default,
    requireRoles: ["Admin", "Manager"],
  }, {
    name: 'test',
    caption: '测试',
    icon: 'test',
    path: '/test/',
    component: require('../home/pages/test-home-page.vue').default,
    requireRoles: ["Admin"],
  },
  {
    name: 'warehouse-in-store',
    caption: '快速入仓',
    icon: 'import',
    path: '/warehouse/in-store/',
    component: require('./features/in-store-page.vue').default,
    requireRoles: ["Admin", "Manager", "Operator"],
  },
  {
    name: 'warehouse-out-store',
    caption: '快速出仓',
    icon: 'export',
    path: '/warehouse/out-store/',
    component: require('./features/out-store-page.vue').default,
    requireRoles: ["Admin", "Manager", "Operator"],
  },
  {
    name: 'warehouse-query-pattern',
    caption: '花型查询',
    icon: 'query-pattern',
    path: '/warehouse/query-pattern/',
    component: require('./features/query-pattern-page.vue').default,
    requireRoles: ["Admin", "Manager", "Operator"],
  },
  {
    name: 'warehouse-query-location',
    caption: '仓位查询',
    icon: 'query-location',
    path: '/warehouse/query-location/',
    component: require('./features/query-location-page.vue').default,
    requireRoles: ["Admin", "Manager", "Operator"],
  },
  {
    name: 'warehouse-query-item',
    caption: '商品查询',
    icon: 'query-item',
    path: '/warehouse/query-item/',
    component: require('./features/query-item-page.vue').default,
    requireRoles: ["Admin", "Manager", "Operator"],
  },
  {
    name: 'warehouse-category',
    caption: '品类管理',
    icon: 'category',
    path: '/warehouse/category/',
    component: require('./features/category-page.vue').default,
    requireRoles: ["Admin", "Manager"],
  }
];