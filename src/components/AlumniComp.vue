<template>
    <div class="m-10">
        <JudulComp title="Lulusan SMK MADINATULQURAN Siap Menginspirasi Dunia" subtitle="Jejak Alumni Kami"
            description="Lulusan kami terbukti unggul di kampus dan industri" />

        <Swiper :modules="[Autoplay]" :slides-per-view="3" :space-between="30" :loop="true"
            :autoplay="{ delay: 4000, disableOnInteraction: false }" direction="horizontal" class="my-10">
            <SwiperSlide v-for="(alumni, i) in alumniTop" :key="i">
                <AlumniCard :data="alumni" />
            </SwiperSlide>
        </Swiper>

        <!-- Swiper Bawah (berlawanan arah) -->
        <Swiper :modules="[Autoplay]" :slides-per-view="3" :space-between="30" :loop="true"
            :autoplay="{ delay: 4000, reverseDirection: true, disableOnInteraction: false }" direction="horizontal">
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
        name: 'Ahmad Fauzi',
        instasi: 'Universitas Islam Indonesia (UII)',
        rating: 5,
        review: 'Saya merasa bangga menjadi bagian dari sekolah ini. Ilmu dan akhlak saya terbentuk di sini.'
    },
    {
        name: 'Nur Aisyah',
        instasi: 'Universitas Islam Indonesia (UII)',
        rating: 4,
        review: 'Lingkungan belajar yang positif dan mendukung, sangat membantu masa depan saya.'
    },
    {
        name: 'Budi Santoso',
        instasi: 'Universitas Islam Indonesia (UII)',
        rating: 5,
        review: 'Pembelajarannya sangat membekas, terutama pada aspek karakter dan teknologi.'
    },
    {
        name: 'Siti Rahma',
        instasi: 'Universitas Islam Indonesia (UII)',
        rating: 4,
        review: 'Saya diterima di universitas favorit berkat dasar yang kuat dari sekolah ini.'
    },
    {
        name: 'Ali Ridho',
        instasi: 'Universitas Islam Indonesia (UII)',
        rating: 5,
        review: 'Sekolah ini bukan hanya mendidik, tapi juga menginspirasi.'
    }
]

const alumniBottom = [...alumniTop];
</script>