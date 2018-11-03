import Vue from 'vue'
import Router from 'vue-router'

import Login from './../components/Login.vue'
import Home from './../components/Home.vue'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '*',
            redirect: '/home'
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        }
    ]
});

export default router