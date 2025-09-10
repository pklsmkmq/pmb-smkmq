import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'

// Views Umum
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'

// Views Admin
import Dashboard from '@/views/Dashboard.vue'
import Pendaftaran from '@/views/Pendaftaran.vue'
import JadwalTes from '@/views/JadwalTes.vue'
import Setting from '@/views/Setting.vue'

// Views Santri
import SantriHome from '@/views/santri/Home.vue'
import SantriPendaftaran from '@/views/santri/Pendaftaran.vue'
import SantriTes from '@/views/santri/Tes.vue'
import SantriHasil from '@/views/santri/Hasil.vue'
import SantriBerita from '@/views/santri/Berita.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/register', name: 'register', component: RegisterView },
    
    // Rute Admin
    { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/pendaftaran', name: 'pendaftaran', component: Pendaftaran, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/jadwaltes', name: 'jadwaltes', component: JadwalTes, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/setting', name: 'setting', component: Setting, meta: { requiresAuth: true, role: 'admin' } },

    // Rute Santri
    { path: '/santri/home', name: 'santri-home', component: SantriHome, meta: { requiresAuth: true, role: 'santri' } },
    { path: '/santri/pendaftaran', name: 'santri-pendaftaran', component: SantriPendaftaran, meta: { requiresAuth: true, role: 'santri' } },
    { path: '/santri/tes', name: 'santri-tes', component: SantriTes, meta: { requiresAuth: true, role: 'santri' } },
    { path: '/santri/hasil', name: 'santri-hasil', component: SantriHasil, meta: { requiresAuth: true, role: 'santri' } },
    { path: '/santri/berita', name: 'santri-berita', component: SantriBerita, meta: { requiresAuth: true, role: 'santri' } }
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = Cookies.get('pmbsmkmq_token');
  const userRole = localStorage.getItem('user_role');

  if (to.meta.requiresAuth) {
    if (!isAuthenticated) {
      // Jika tidak login, arahkan ke halaman login
      next({ name: 'login' });
    } else {
      // Jika sudah login, cek role
      if (to.meta.role && to.meta.role !== userRole) {
        // Jika role tidak sesuai, arahkan ke halaman yang sesuai
        if (userRole === 'admin') {
          next({ name: 'dashboard' });
        } else {
          next({ name: 'santri-home' });
        }
      } else {
        // Jika role sesuai atau tidak ada role spesifik, lanjutkan
        next();
      }
    }
  } else {
     // Untuk halaman publik seperti login & register
    if (isAuthenticated && (to.name === 'login' || to.name === 'register')) {
      // Jika sudah login, jangan biarkan akses halaman login/register
      if (userRole === 'admin') {
        next({ name: 'dashboard' });
      } else {
        next({ name: 'santri-home' });
      }
    } else {
      next();
    }
  }
});

export default router