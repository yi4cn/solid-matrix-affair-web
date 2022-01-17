export default app => {
    app.component('sm-grid', require('@/components/sm-grid').default);
    app.component('sm-row', require('@/components/sm-row').default);
    app.component('sm-col', require('@/components/sm-col').default);
    app.component('sm-icon', require('@/components/sm-icon').default);
    app.component('sm-title', require('@/components/sm-title').default);
    app.component('sm-card', require('@/components/sm-card').default);
    app.component('sm-footer', require('@/components/sm-footer').default);
    app.component('sm-loading-icon', require('@/components/sm-loading-icon').default);
    app.component('sm-loading-page', require('@/components/sm-loading-page').default);
    app.component('sm-img', require('@/components/sm-img').default);
    app.component('sm-list', require('@/components/sm-list').default);
    app.component('sm-list-item', require('@/components/sm-list-item').default);
    app.component('sm-tag', require('@/components/sm-tag').default);
    app.component('sm-modal', require('@/components/sm-modal').default);
    app.component('sm-vcenter', require('@/components/sm-vcenter').default);
    app.component('sm-blank', require('@/components/sm-blank').default);
    app.component('sm-tree', require('@/components/sm-tree').default);

    app.component('sm-input-group', require('@/components/sm-input-group').default);
    app.component('sm-input-label', require('@/components/sm-input-label').default)
    app.component('sm-input-text', require('@/components/sm-input-text').default);
    app.component('sm-input-button', require('@/components/sm-input-button').default);
    app.component('sm-input-hidden', require('@/components/sm-input-hidden').default);
}