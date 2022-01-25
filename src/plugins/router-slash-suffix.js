import { stringifyQuery } from '@/utils/url';

export default {
    install: (app, router) => {

        router.beforeEach((to) => {
            if (to.path.charAt(to.path.length - 1) == '/') {
                return;
            } else {
                const path = to.path + "/";
                const query = "?" + stringifyQuery(to.query);
                const hash = to.hash;
                return [path, query, hash].join("");
            }
        });
    }
}