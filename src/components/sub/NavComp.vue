<template>
    <div :class="[
        'fixed py-7 z-50 transition-all duration-300 ease-in-out w-full', // w-full agar selalu membentang
        { 'bg-[#f5f5f5] shadow-md': scrolled },
        scrolled ? 'px-4 lg:px-10' : 'px-4 lg:px-10' // Padding responsif untuk konsistensi
    ]">
        <div class="flex items-center justify-between w-full">
            <div class="flex items-center gap-0 lg:gap-4 flex-shrink-0">
                <img src="/assets/img/logo_smk_mq.png" alt="Logo SMK MQ" class="w-12 h-12 lg:w-20 lg:h-20">
                <p
                    :class="['font-bold text-[16px] !w-[50%] lg:text-[40px] ml-3 lg:ml-0 leading-[20px] lg:leading-[40px] tracking-[2px] lg:tracking-[5px]', logoTextColorClass, 'lg:w-[250px] w-auto text-wrap']">
                    PMB SMK MADINATULQURAN
                </p>
            </div>

            <div class="lg:hidden">
                <button @click="toggleMobileMenu" :class="['text-3xl focus:outline-none', navLinkTextColorClass]">
                    <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
                </button>
            </div>

            <div
                :class="['lg:pt-3 lg:block', mobileMenuOpen ? 'block absolute top-full left-0 w-full bg-[#f5f5f5] lg:bg-transparent py-4 shadow-lg lg:shadow-none' : 'hidden']">
                <ul
                    :class="['flex gap-7 font-semibold text-[19px] items-center', mobileMenuOpen ? 'flex-col text-center' : 'flex-row']">
                    <li v-for="item in navItems" :key="item.id" :class="{ 'w-full': mobileMenuOpen }">
                        <a :href="item.href" @click="closeMobileMenu" class="relative group py-2 block"
                            :class="navLinkTextColorClass">
                            {{ item.text }}
                            <span
                                :class="['absolute left-0 bottom-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full', navLinkUnderlineColorClass]"></span>
                        </a>
                    </li>
                    <li :class="{ 'w-full': mobileMenuOpen }">
                        <button
                            :class="['px-5 rounded-3xl h-[40px] transition-all duration-300 ease-in-out ring-2 shadow-md hover:shadow-lg scale-100 hover:scale-105 cursor-pointer w-full lg:w-auto mt-4 lg:mt-0', buttonClasses]">
                            Masuk
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const scrolled = ref(false);
const mobileMenuOpen = ref(false); // State untuk mengontrol menu mobile

const navItems = ref([
    { id: 'home', text: 'Home', href: '#home' },
    { id: 'program', text: 'Program', href: '#program' },
    { id: 'fasilitas', text: 'Fasilitas', href: '#fasilitas' },
    { id: 'lulusan', text: 'Lulusan', href: '#lulusan' },
    { id: 'biaya', text: 'Biaya', href: '#biaya' },
]);

const props = defineProps({
    logoTextColor: {
        type: String,
        default: 'white' // Warna teks logo saat navbar transparan
    },
    navLinkColor: {
        type: String,
        default: '#1E046C' // Warna teks link navigasi
    },
    buttonBgColor: {
        type: String,
        default: '#1E046C' // Background tombol
    },
    buttonTextColor: {
        type: String,
        default: 'white' // Teks tombol
    },
    buttonHoverBgColor: {
        type: String,
        default: '#FDCA2F' // Background tombol saat hover
    },
    buttonHoverTextColor: {
        type: String,
        default: 'black' // Teks tombol saat hover
    },
});

const logoTextColorClass = computed(() => {
    if (scrolled.value || mobileMenuOpen.value) { // Jika discroll ATAU menu mobile terbuka
        return props.navLinkColor.startsWith('#') ? `text-[${props.navLinkColor}]` : `text-${props.navLinkColor}`;
    }
    return props.logoTextColor.startsWith('#') ? `text-[${props.logoTextColor}]` : `text-${props.logoTextColor}`;
});

const navLinkTextColorClass = computed(() => {
    return props.navLinkColor.startsWith('#') ? `text-[${props.navLinkColor}]` : `text-${props.navLinkColor}`;
});

const navLinkUnderlineColorClass = computed(() => {
    return props.navLinkColor.startsWith('#') ? `bg-[${props.navLinkColor}]` : `bg-${props.navLinkColor}`;
});

const buttonClasses = computed(() => [
    props.buttonBgColor.startsWith('#') ? `bg-[${props.buttonBgColor}]` : `bg-${props.buttonBgColor}`,
    props.buttonTextColor.startsWith('#') ? `text-[${props.buttonTextColor}]` : `text-${props.buttonTextColor}`,
    props.buttonHoverBgColor.startsWith('#') ? `hover:bg-[${props.buttonHoverBgColor}]` : `hover:bg-${props.buttonHoverBgColor}`,
    props.buttonHoverTextColor.startsWith('#') ? `hover:text-[${props.buttonHoverTextColor}]` : `hover:text-${props.buttonHoverTextColor}`,
    props.buttonBgColor.startsWith('#') ? `ring-[${props.buttonBgColor}]` : `ring-${props.buttonBgColor}`,
    props.buttonHoverBgColor.startsWith('#') ? `hover:ring-[${props.buttonHoverBgColor}]` : `hover:ring-${props.buttonHoverBgColor}`,
]);

// Fungsi untuk toggle menu mobile
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Fungsi untuk menutup menu mobile (misalnya setelah klik link)
const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
};

const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Pastikan Font Awesome sudah terinstal atau di-link di proyek Anda */
/* Contoh di index.html: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"> */
</style>