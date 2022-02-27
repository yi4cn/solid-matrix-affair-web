export default {
    install: (app) => {
        app.component('sm-grid', require('./sm-grid').default);
        app.component('sm-row', require('./sm-row').default);
        app.component('sm-col', require('./sm-col').default);
        app.component('sm-icon', require('./sm-icon').default);
        app.component('sm-title', require('./sm-title').default);
        app.component('sm-card', require('./sm-card').default);
        app.component('sm-footer', require('./sm-footer').default);
        app.component('sm-loading-icon', require('./sm-loading-icon').default);
        app.component('sm-loading-page', require('./sm-loading-page').default);
        app.component('sm-img', require('./sm-img').default);
        app.component('sm-list', require('./sm-list').default);
        app.component('sm-list-item', require('./sm-list-item').default);
        app.component('sm-tag', require('./sm-tag').default);
        app.component('sm-modal', require('./sm-modal').default);
        app.component('sm-vcenter', require('./sm-vcenter').default);
        app.component('sm-blank', require('./sm-blank').default);
        app.component('sm-tree', require('./sm-tree').default);
        app.component('sm-alert', require('./sm-alert').default);
        app.component('sm-alert-container', require('./sm-alert-container').default);

        app.component('sm-hr', require('./sm-hr').default);

        app.component('sm-input-group', require('./sm-input-group').default);
        app.component('sm-input-label', require('./sm-input-label').default)
        app.component('sm-input-text', require('./sm-input-text').default);
        app.component('sm-input-button', require('./sm-input-button').default);
        app.component('sm-input-hidden', require('./sm-input-hidden').default);
    }
}