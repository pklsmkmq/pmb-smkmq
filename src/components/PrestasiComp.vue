<template>
    <div class="bg-pres h-700 shadow-custom">
        <div class="mx-10 pt-32 lg:pt-16">
            <JudulComp title="Bukti Nyata Kualitas dan Potensi Santri" subtitle="Prestasi Membanggakan"
                description="Bersaing, menang, dan terus berkembang" titleColor="#ffffff" description-color="#ffffff" />

            <Swiper :modules="[Autoplay]" :slides-per-view="slidesPerView" :space-between="20" :loop="true"
                :autoplay="{ delay: 3000, disableOnInteraction: false }" grab-cursor class="partner-swiper mt-16"
                :breakpoints="swiperBreakpoints">
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
        name: 'Lomba Website Yogyakarta',
        deskripsi: 'Tim kami meraih juara 3',
        tanggal: '2024-05-26',
        gambar: 'lomba/lomba-1.jpg'
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

const swiperBreakpoints = {
    // Ketika lebar layar kurang dari 640px (default, atau mobile sangat kecil)
    // Akan menampilkan 1 slide per tampilan
    0: {
        slidesPerView: 1,
        spaceBetween: 10, // Anda bisa sesuaikan space-between untuk mobile
    },
    // Ketika lebar layar minimal 640px (ukuran mobile lebih besar / tablet potrait)
    // Anda bisa atur ini jika ingin 2 slide pada tablet, atau langsung ke 3
    640: {
        slidesPerView: 2, // Misalnya, 2 slide pada tablet potrait
        spaceBetween: 20,
    },
    // Ketika lebar layar minimal 768px (ukuran tablet landscape / laptop mini)
    // Akan menampilkan 3 slide per tampilan
    768: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
};
</script>