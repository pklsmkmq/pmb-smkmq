<template>
    <div class="m-10" id="lulusan">
        <JudulComp title="Lulusan SMK MADINATULQURAN Siap Menginspirasi Dunia" subtitle="Jejak Alumni Kami"
            description="Lulusan kami terbukti unggul di kampus dan industri" />

        <Swiper :modules="[Autoplay]" :slides-per-view="3" :space-between="30" :loop="true"
            :autoplay="{ delay: 4000, disableOnInteraction: false }" direction="horizontal" class="my-10"
            :breakpoints="swiperBreakpoints">
            <SwiperSlide v-for="(alumni, i) in alumniTop" :key="i">
                <AlumniCard :data="alumni" />
            </SwiperSlide>
        </Swiper>

        <Swiper :modules="[Autoplay]" :slides-per-view="slidesPerView" :space-between="30" :loop="true"
            :autoplay="{ delay: 4000, reverseDirection: true, disableOnInteraction: false }" direction="horizontal"
            :breakpoints="swiperBreakpoints">
            <SwiperSlide v-for="(alumni, i) in alumniBottom" :key="i">
                <AlumniCard :data="alumni" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import JudulComp from './sub/JudulComp.vue';
import AlumniCard from './sub/AlumniCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const alumniTop = [
    {
        name: 'Muhammad Hilmi',
        instasi: 'Universitas Pancasila',
        rating: 5,
        review: 'Ilmu IT yang diajarkan sangat relevan, kita belajar hal-hal yang memang dicari di dunia kerja. Di sisi lain, program tahfidz dan pembinaan karakternya membuat kita jadi pribadi yang lebih disiplin dan bertanggung jawab'
    },
    {
        name: 'Rizziq Ibrahim',
        instasi: 'Astra NTN Driveshaft Indonesia',
        rating: 5,
        review: 'Ilmu yang diajarkan sangat diperlukan di tempat kerja'
    },
    {
        name: 'Rayya Disayidan',
        instasi: 'Universitas Negeri Jakarta',
        rating: 5,
        review: 'Pembelajarannya sangat membekas, terutama pada aspek karakter dan teknologi.'
    },
    {
        name: 'Muhammad Faiz Al Ghozy',
        instasi: 'Yayasan Kesehatan Pertamina',
        rating: 5,
        review: 'Pesantren yang cukup bagus, buat saya skill yg saya dapat juga gak kalah sama mahasiswa dari universitas bonafit'
    },
    {
        name: 'Ali Ridho',
        instasi: 'Universitas Islam Indonesia (UII)',
        rating: 5,
        review: 'Sekolah ini bukan hanya mendidik, tapi juga menginspirasi.'
    }
]

const alumniBottom = [...alumniTop];

// Definisikan objek breakpoints di sini
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