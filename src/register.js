import SmGrid from '@/components/sm-grid';
import SmRow from '@/components/sm-row';
import SmCol from '@/components/sm-col';
import SmIcon from '@/components/sm-icon';
import SmTitle from '@/components/sm-title';
import SmCard from '@/components/sm-card';
import SmFooter from '@/components/sm-footer';
import SmLoadingIcon from '@/components/sm-loading-icon';
import SmLoadingPage from '@/components/sm-loading-page';
import SmImg from '@/components/sm-img';
import SmList from '@/components/sm-list';
import SmListItem from '@/components/sm-list-item';
import SmTag from '@/components/sm-tag';
import SmModal from '@/components/sm-modal';
import SmVcenter from '@/components/sm-vcenter';

import SmInputGroup from '@/components/sm-input-group';
import SmInputLabel from '@/components/sm-input-label';
import SmInputText from '@/components/sm-input-text';
import SmInputButton from '@/components/sm-input-button';
import SmInputHidden from '@/components/sm-input-hidden';

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
    app.component('sm-list', SmList);
    app.component('sm-list-item', SmListItem);
    app.component('sm-tag', SmTag);
    app.component('sm-modal', SmModal);
    app.component('sm-vcenter', SmVcenter);

    app.component('sm-input-group', SmInputGroup);
    app.component('sm-input-label', SmInputLabel)
    app.component('sm-input-text', SmInputText);
    app.component('sm-input-button', SmInputButton);
    app.component('sm-input-hidden', SmInputHidden);
}