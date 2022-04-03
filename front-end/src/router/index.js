import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import PostDetails from '../views/PostDetails.vue'
import Contact from '../views/Contact.vue'
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

export default router
