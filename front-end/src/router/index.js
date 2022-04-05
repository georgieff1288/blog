import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import PostDetails from '../views/PostDetails.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Protected from '../views/Protected.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/blog/post-details/:id',
        name: 'PostDetails',
        component: PostDetails
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            disableIfLoggedIn: true
        }
    },
    {
        path: '/signup',
        name: 'Register',
        component: Register,
        meta: {
            disableIfLoggedIn: true
        }
    },
    {
        path: '/protected',
        name: 'Protected',
        component: Protected,
        meta: {
            needsAuth: true
        }
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
    scrollBehavior() {
        return { top: 0 }
    },
})

router.beforeEach((to, from, next) => {
    if (to.meta.disableIfLoggedIn) {
        if (!localStorage.getItem('token')) {
            next();
        }
        else {
            next('/')
        }
    }
    else {
        next();
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta.needsAuth) {
        if (localStorage.getItem('token')) {
            next();
        }
        else {
            next('/')
        }
    }
    else {
        next();
    }
})

export default router
