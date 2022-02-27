import { createRouter, createWebHistory } from 'vue-router';

import CatalogsRoutes from '@/modules/catalogs/routes';
import DashboardRoutes from '@/modules/dashboard/routes';
import HomeRoutes from '@/modules/home/routes'

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: { name: 'catalogs' }
    },
    ...CatalogsRoutes,
    ...DashboardRoutes,
    ...HomeRoutes,
];


const router = createRouter({ history: createWebHistory(), routes });


export default router;