<template>
    <div class="w-64 bg-primary text-white flex flex-col justify-between shadow-lg min-h-screen">
        <!-- Bagian atas: Logo & Menu -->
        <div>
            <!-- Logo / Judul -->
            <div class="p-4 text-2xl font-bold border-b border-white/20 tracking-wide">
                Admin PMB
            </div>

            <!-- Menu Navigasi -->
            <nav class="flex flex-col p-4 space-y-2">
                <RouterLink v-for="item in menuItems" :key="item.to" :to="item.to"
                    class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-primary">
                    <component :is="item.icon" class="w-5 h-5" />
                    {{ item.label }}
                </RouterLink>
            </nav>
        </div>

        <!-- Bagian bawah: Logout -->
        <div class="p-4 border-t border-white/20">
            <button @click="logout"
                class="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5m0 6H3" />
                </svg>
                Logout
            </button>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { HomeIcon, ClipboardListIcon, CalendarIcon, CogIcon } from '@heroicons/vue/outline';

const menuItems = [
    { to: '/', label: 'Dashboard', icon: HomeIcon },
    { to: '/pendaftaran', label: 'Pendaftaran', icon: ClipboardListIcon },
    { to: '/jadwal-tes', label: 'Jadwal Tes', icon: CalendarIcon },
    { to: '/setting', label: 'Setting', icon: CogIcon },
];

function logout() {
    alert("Logout berhasil!"); // nanti diganti logic auth
}
</script>

<style scoped>
.bg-primary {
    background-color: #1E046C;
}
</style>