<template>
    <button @click="isSidebarOpen = !isSidebarOpen"
        class="lg:hidden fixed bottom-5 right-5 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg border-white border-2 focus:outline-none hover:bg-purple-900 transition-colors">
        <svg v-if="!isSidebarOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>

    <div v-if="isSidebarOpen" @click="isSidebarOpen = false" class="lg:hidden fixed inset-0 bg-black opacity-50 z-30">
    </div>

    <div :class="[
        'w-64 bg-primary text-white flex flex-col justify-between shadow-lg min-h-screen fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out',
        { '-translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen },
        'lg:translate-x-0'
    ]">
        <div>
            <div class="p-4 text-2xl font-bold border-b border-white/20 tracking-wide">
                Admin PMB
            </div>
            <nav class="flex flex-col p-4 space-y-2">
                <RouterLink v-for="item in menuItems" :key="item.to" :to="item.to" @click="isSidebarOpen = false"
                    class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 font-semibold"
                    active-class="router-link-active-custom">
                    <component :is="item.icon" class="w-5 h-5" />
                    {{ item.label }}
                </RouterLink>
            </nav>
        </div>
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
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { HomeIcon, ClipboardListIcon, CalendarIcon, CogIcon } from '@heroicons/vue/outline';

const router = useRouter();
const isSidebarOpen = ref(false);

const handleResize = () => {
    if (window.innerWidth >= 1024) {
        isSidebarOpen.value = false;
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

const menuItems = [
    { to: '/dashboard', label: 'Dashboard', icon: HomeIcon },
    { to: '/pendaftaran', label: 'Pendaftaran', icon: ClipboardListIcon },
    { to: '/jadwaltes', label: 'Jadwal Tes', icon: CalendarIcon },
    { to: '/setting', label: 'Setting', icon: CogIcon },
];

const logout = () => {
    Swal.fire({
        title: 'Apakah Anda yakin?',
        text: 'Anda akan keluar dari sesi ini.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, logout!',
        cancelButtonText: 'Tidak',
    }).then((result) => {
        if (result.isConfirmed) {
            Cookies.remove('pmbsmkmq_token');
            localStorage.clear();
            router.push({ name: 'login' });

            Swal.fire(
                'Berhasil!',
                'Anda telah berhasil logout.',
                'success'
            );
        }
    });
};
</script>

<style scoped>
.bg-primary {
    background-color: #1E046C;
}

.router-link-active-custom {
    background-color: #ffffff;
    color: #1E046C;
}
</style>