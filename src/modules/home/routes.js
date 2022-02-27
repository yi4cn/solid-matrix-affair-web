export default [
  {
    name: 'login',
    path: '/login/',
    component: require('./pages/login-page.vue').default
  },
  {
    name: 'weixin-auth',
    path: '/weixin-auth/',
    component: require('./pages/weixin-auth-page.vue').default
  },


  // TESTS
  {
    name: 'test-home',
    path: '/test/',
    component: require('./pages/test-home-page.vue').default
  },
  {
    name: 'test-1',
    path: '/test/1',
    component: require('./pages/test-1-page.vue').default
  },
  {
    name: 'test-2',
    path: '/test/2',
    component: require('./pages/test-2-page.vue').default
  }
]