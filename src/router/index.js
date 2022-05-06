import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CartView.vue')
  },
  {
    path: '/final',
    name: 'final',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FinalView.vue')
  },
  {
    path: '/every',
    name: 'every',

    component: () => import(/* webpackChunkName: "about" */ '../views/EverydayView.vue')
  },
  {
    path: '/sometimes',
    name: 'sometimes',

    component: () => import(/* webpackChunkName: "about" */ '../views/SometimesView.vue')
  },
  {
    path: '/manytimes',
    name: 'manytimes',

    component: () => import(/* webpackChunkName: "about" */ '../views/ManytimesView.vue')
  }          
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
