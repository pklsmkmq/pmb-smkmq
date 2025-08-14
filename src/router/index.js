import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
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
      meta: { requiresAuth: true } // Halaman ini memerlukan otentikasi
    },
    {
      path: '/pendaftaran',
      name: 'pendaftaran',
      component: Pendaftaran,
      meta: { requiresAuth: true } // Halaman ini memerlukan otentikasi
    },
    {
      path: '/jadwaltes',
      name: 'jadwaltes',
      component: JadwalTes,
      meta: { requiresAuth: true } // Halaman ini memerlukan otentikasi
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      meta: { requiresAuth: true } // Halaman ini memerlukan otentikasi
    }
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = Cookies.get('pmbsmkmq_token');

  // Kondisi untuk halaman yang memerlukan otentikasi
  if (!isAuthenticated && to.meta.requiresAuth) {
    next({ name: 'login' });
  }
  // Kondisi untuk halaman login (yang tidak boleh diakses jika sudah login)
  else if (isAuthenticated && (to.name === 'login' || to.name === 'register')) {
    next({ name: 'dashboard' });
  }  
  // Kondisi untuk halaman publik (landing page, about, dll)
  else {
    next();
  }
});


export default router
