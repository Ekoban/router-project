import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import ViewProfile from '@/components/ViewProfile'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/profile/:user_id', //route parameter
            name: 'ViewProfile',
            component: ViewProfile
        }
    ]
})