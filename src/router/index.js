import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/TelaUsuario',
    name: 'TelaUsuario',
    
    component: () => import(/* webpackChunkName: "Login" */ '../views/TelaUsuario.vue')
  },
  {
    path: '/TelaAdm',
    name: 'TelaAdm',
    
    component: () => import(/* webpackChunkName: "Login" */ '../views/TelaAdm.vue')
  },
  {
    path: '/Ingressos',
    name: 'Ingressos',
    
    component: () => import(/* webpackChunkName: "Ingressos" */ '../views/Ingressos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
