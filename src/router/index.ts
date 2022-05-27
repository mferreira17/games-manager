import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import CompradosView from '../views/CompradosView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home', name: 'home', component: HomeView
  },
  {
    path: '/comprados',
    name: 'comprados',
    component: CompradosView,
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
