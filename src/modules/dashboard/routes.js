import features from './features';
const routes = features.map(({ name, path, component }) => ({ name, path, component }))
export default [
  ...routes,
  {
    name: 'dashboard',
    path: '/dashboard/',
    component: require('./pages/dashboard-page.vue').default
  },
];