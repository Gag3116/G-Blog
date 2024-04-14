// src/router/index.js
import { createRouter, createWebHistory } from
        'vue-router'
import store from "@/store/index.js";
import Home from '../views/Home.vue'
import About from '../views/About.vue'

import Contact from '../views/Contact.vue'
import UserProfile from '../views/UserProfile.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import EditProfile from "@/views/EditPfofile.vue";



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/userprofile',
        name: 'UserProfile',
        component: UserProfile,
        meta:{requiresAuth:true}
    },
    {
        path:'/edit-profile',
        name:'EditProfile',
        component: EditProfile,
        meta:{requiresAuth:true}

    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    // 检查路由是否需要认证
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 这里检查用户的登录状态
        if (!store.state.isLoggedIn) {
            // 未登录，重定向到首页或登录页面
            next({path:'/'})
        } else {
            // 已登录，允许访问
            next();
        }
    } else {
        // 不需要登录认证的路由，直接放行
        next();
    }
});



export default router
