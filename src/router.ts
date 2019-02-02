import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
        },
        {
            path: '/search',
            name: 'search',
            component: () => import(/* webpackChunkName: "about" */ './views/Search.vue'),
        },
        {
            path: '/details',
            name: 'details',
            component: () => import(/* webpackChunkName: "about" */ './views/Tournament.vue'),
        },
        {
            path: '/create',
            name: 'create',
            component: () => import(/* webpackChunkName: "about" */ './views/TournamentCreate.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue'),
        },
    ],
});
