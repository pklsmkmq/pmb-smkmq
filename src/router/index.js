import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import Dashboard from '@/views/Dashboard.vue'
import Pendaftaran from '@/views/Pendaftaran.vue'
import JadwalTes from '@/views/JadwalTes.vue'
import Setting from '@/views/Setting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/pendaftaran',
      name: 'pendaftaran',
      component: Pendaftaran,
    },
    {
      path: '/jadwaltes',
      name: 'jadwaltes',
      component: JadwalTes,
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
    }
  ],
})

export default router
