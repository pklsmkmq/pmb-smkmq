<template>
    <div
        class="bg-[url('/assets/img/prestasi.png')] bg-cover bg-no-repeat h-[700px] shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)]">
        <div class="mx-10 pt-16">
            <JudulComp title="Bukti Nyata Kualitas dan Potensi Santri" subtitle="Prestasi Membanggakan"
                description="Bersaing, menang, dan terus berkembang" titleColor="#ffffff" description-color="#ffffff" />

            <Swiper :modules="[Autoplay]" :slides-per-view="3" :space-between="20" :loop="true"
                :autoplay="{ delay: 3000, disableOnInteraction: false }" grab-cursor class="partner-swiper mt-16">
                <SwiperSlide v-for="(prestasi, index) in prestasiData" :key="index"
                    class="flex items-center justify-center">
                    <PrestasiCard :data="prestasi" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
import JudulComp from './sub/JudulComp.vue';
import PrestasiCard from './sub/PrestasiCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const prestasiData = [
    {
        name: 'Lomba Robotika Nasional',
        deskripsi: 'Tim kami meraih juara pertama di tingkat nasional.',
        tanggal: '2023-05-15',
        gambar: 'gambar1.jpg'
    },
    {
        name: 'Olimpiade Sains Internasional',
        deskripsi: 'Siswa kami mendapatkan medali perak di olimpiade internasional.',
        tanggal: '2023-06-20',
        gambar: 'gambar2.jpg'
    },
    {
        name: 'Festival Seni dan Budaya',
        deskripsi: 'Pertunjukan seni kami mendapat sambutan hangat dari masyarakat.',
        tanggal: '2023-07-10',
        gambar: 'gambar3.jpg'
    },
    {
        name: 'Lomba Robotika Nasional',
        deskripsi: 'Tim kami meraih juara pertama di tingkat nasional.',
        tanggal: '2023-05-15',
        gambar: 'gambar4.jpg'
    },
    {
        name: 'Olimpiade Sains Internasional',
        deskripsi: 'Siswa kami mendapatkan medali perak di olimpiade internasional.',
        tanggal: '2023-06-20',
        gambar: 'gambar5.jpg'
    },
    {
        name: 'Festival Seni dan Budaya',
        deskripsi: 'Pertunjukan seni kami mendapat sambutan hangat dari masyarakat.',
        tanggal: '2023-07-10',
        gambar: 'gambar6.png'
    }
];
</script>