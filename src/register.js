import SmGrid from '@/components/sm-grid.vue';
import SmRow from '@/components/sm-row.vue';
import SmCol from '@/components/sm-col.vue';
import SmIcon from '@/components/sm-icon.vue';
import SmTitle from '@/components/sm-title.vue';
import SmCard from '@/components/sm-card.vue';
import SmFooter from '@/components/sm-footer.vue';
import SmLoadingIcon from '@/components/sm-loading-icon.vue';
import SmLoadingPage from '@/components/sm-loading-page.vue';
import SmImg from '@/components/sm-img.vue';


export default app => {
    app.component('sm-grid', SmGrid);
    app.component('sm-row', SmRow);
    app.component('sm-col', SmCol);
    app.component('sm-icon', SmIcon);
    app.component('sm-title', SmTitle);
    app.component('sm-card', SmCard);
    app.component('sm-footer', SmFooter);
    app.component('sm-loading-icon', SmLoadingIcon);
    app.component('sm-loading-page', SmLoadingPage);
    app.component('sm-img', SmImg);
}