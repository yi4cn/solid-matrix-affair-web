import { createRouter, createWebHistory } from 'vue-router';

import CatalogsRoutes from '@/modules/catalogs/routes';
import WarehouseRoutes from '@/modules/warehouse/routes';
import ToolkitsRoutes from '@/modules/toolkits/routes';
import HomeRoutes from '@/modules/home/routes';

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: { name: 'catalogs' }
    },
    ...CatalogsRoutes,
    ...WarehouseRoutes,
    ...ToolkitsRoutes,
    ...HomeRoutes,
];


const router = createRouter({ history: createWebHistory(), routes });


export default router;