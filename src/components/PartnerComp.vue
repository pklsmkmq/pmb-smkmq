<template>
    <div
        class="bg-[url('/assets/img/bg-partner.png')] bg-cover bg-no-repeat h-[400px] shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)]">
        <div class="mx-10 pt-12">
            <JudulComp title="Partner Akademik" subtitle="Nasional & Internasional"
                description="Kerja sama strategis dengan institusi pendidikan terbaik di dalam dan luar negeri"
                titleColor="#ffffff" description-color="#ffffff" />

            <Swiper :modules="[Autoplay]" :slides-per-view="5" :space-between="20" :loop="true"
                :autoplay="{ delay: 3000, disableOnInteraction: false }" grab-cursor class="partner-swiper mt-16">
                <SwiperSlide v-for="(logo, index) in logos" :key="index"
                    class="bg-white p-4 rounded-xl flex items-center justify-center">
                    <img :src="`assets/img/${logo}`" alt="Partner Logo" class="h-16 object-contain mx-auto" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
import JudulComp from './sub/JudulComp.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const logos = [
    'partner1.png',
    'partner2.png',
    'partner3.png',
    'partner4.png',
    'partner5.png',
    'partner6.png',
    'partner7.png',
    'partner8.png',
    'partner9.png',
    'partner10.png'
];
</script>