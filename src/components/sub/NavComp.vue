<template>
    <div :class="[
        'fixed py-5 z-50 transition-all duration-300 ease-in-out w-full',
        { 'bg-nav shadow-md': scrolled },
        'px-4 lg:px-10'
    ]">
        <div class="flex justify-between">
            <div class="flex items-center gap-0 lg:gap-4">
                <img src="/assets/img/logo_smk_mq.png" alt="Logo SMK MQ" class="w-12 h-12 lg:w-20 lg:h-20">
                <p :class="[
                    'font-bold ml-3 lg:ml-0 text-wrap w-50 lg:w-64',
                    'text-base lg:text-4xl',
                    'leading-5 lg:leading-10',
                    'tracking-2px lg:tracking-5px',
                    logoTextColorClass
                ]">
                    PMB SMK MADINATULQURAN
                </p>
            </div>

            <div class="xl:hidden">
                <button @click="toggleMobileMenu" :class="['text-3xl focus:outline-none', navLinkTextColorClass]">
                    <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
                </button>
            </div>

            <div :class="[
                'lg:pt-3 xl:block',
                mobileMenuOpen ? 'block absolute top-full left-0 w-full bg-nav xl:bg-transparent py-4 shadow-lg xl:shadow-none' : 'hidden'
            ]">
                <ul :class="[
                    'flex gap-7 font-semibold items-center text-lg',
                    mobileMenuOpen ? 'flex-col text-center' : 'flex-row'
                ]">
                    <li v-for="item in navItems" :key="item.id" :class="{ 'w-full': mobileMenuOpen }">
                        <a :href="item.href" @click="closeMobileMenu" class="relative group py-2 block underline-hover"
                            :class="navLinkTextColorClass">
                            {{ item.text }}
                        </a>
                    </li>
                    <li :class="{ 'w-full': mobileMenuOpen }">
                        <button @click="gotoPPDB" :class="[
                            'px-5 rounded-3xl transition-all duration-300 ease-in-out shadow-md hover:shadow-lg scale-100 hover:scale-105 cursor-pointer w-full lg:w-auto mt-4 lg:mt-0',
                            'h-40px',
                            ...buttonClasses
                        ]">
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
const mobileMenuOpen = ref(false);

const navItems = ref([
    { id: 'home', text: 'Home', href: '#home' },
    { id: 'program', text: 'Program', href: '#program' },
    { id: 'fasilitas', text: 'Fasilitas', href: '#fasilitas' },
    { id: 'lulusan', text: 'Lulusan', href: '#lulusan' },
    { id: 'biaya', text: 'Biaya', href: '#biaya' },
]);

const props = defineProps({
    logoTextColor: { type: String, default: 'white' },
    navLinkColor: { type: String, default: '#1E046C' },
    buttonBgColor: { type: String, default: '#1E046C' },
    buttonTextColor: { type: String, default: 'white' },
    buttonHoverBgColor: { type: String, default: '#FDCA2F' },
    buttonHoverTextColor: { type: String, default: 'black' },
});

const logoTextColorClass = computed(() => {
    if (scrolled.value || mobileMenuOpen.value) {
        return props.navLinkColor === '#1E046C' ? 'text-navlink' : '';
    }
    return props.logoTextColor === 'white' ? 'text-logo' : '';
});

const navLinkTextColorClass = computed(() => {
    return props.navLinkColor === '#1E046C' ? 'text-navlink' : '';
});

const buttonClasses = computed(() => [
    props.buttonBgColor === '#1E046C' ? 'bg-button' : '',
    props.buttonTextColor === 'white' ? 'text-button' : '',
    props.buttonHoverBgColor === '#FDCA2F' ? 'bg-button-hover' : '',
    props.buttonHoverTextColor === 'black' ? 'text-button-hover' : '',
    props.buttonBgColor === '#1E046C' ? 'ring-button' : '',
    props.buttonHoverBgColor === '#FDCA2F' ? 'ring-button-hover' : '',
]);

const gotoPPDB = () => {
    window.location.href = 'https://ppdb.smkmadinatulquran.sch.id/login';
};

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

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
/* Pastikan Font Awesome sudah terpasang */
</style>