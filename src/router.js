import { createRouter, createWebHistory } from 'vue-router';
import CatalogsRoutes from '@/modules/catalogs/routes';
import HomeRoutes from '@/modules/home/routes';
import { stringifyQuery } from '@/utils/url';
const routes = [
    {
        path: '/',
        name: 'index',
        redirect: { name: 'home' }
    },
    ...CatalogsRoutes,
    ...HomeRoutes
];


const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to) => {
    // append / at the end of path if no have
    // to make ali-oss static html work fine
    if (to.path.charAt(to.path.length - 1) == '/') {
        return;
    } else {
        const path = to.path + "/";
        const query = "?" + stringifyQuery(to.query);
        const hash = to.hash;
        return [path, query, hash].join("");
    }
});

export default router;