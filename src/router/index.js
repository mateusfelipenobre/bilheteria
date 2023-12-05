import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue';
import LoginForm from '../components/LoginForm';
import Login from '../views/Login';
import TelaUsuario from '../views/TelaUsuario';

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
