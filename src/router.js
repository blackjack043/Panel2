    import Vue from 'vue';
    import VueRouter from 'vue-router';
    
    import AppProducts from './components/AppIndex';
    import AppProducts2 from './components/AppIndex2';

    
    Vue.use(VueRouter);
    
    let routes = [
        {  path: '/', component: AppProducts},
        {  path: '/p2', component: AppProducts2},

    ];
    
    export default new VueRouter({
        mode: 'history',
        routes
    });