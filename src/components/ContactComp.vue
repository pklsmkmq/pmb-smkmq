<template>
    <section class="mt-10 bg-[#1E046C] border-t-[15px] border-t-[#FECB2F]" id="contact">
        <div class="mx-10 py-10">
            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div class="col-span-1 md:col-span-2 lg:col-span-2 rounded-2xl shadow-xl overflow-hidden">
                    <h3 class="text-3xl font-bold p-6 text-white">Temukan Kami</h3>
                    <div class="w-full h-[470px]">
                        <iframe :src="googleMapsEmbedUrl" width="100%" height="100%" style="border:0;"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div class="col-span-1 flex flex-col gap-10">
                    <div class="rounded-2xl shadow-xl p-6">
                        <h3 class="text-3xl font-bold mb-4 text-white">Ikuti Kami</h3>
                        <div class="flex flex-wrap gap-4 justify-center">
                            <a v-for="social in socialMedia" :key="social.name" :href="social.url" target="_blank"
                                class="w-16 h-16 rounded-full flex text-[#1E046C] bg-[#FFFFFF] items-center justify-center text-4xl hover:scale-110 transition-transform duration-300 shadow-md">
                                <i :class="social.icon"></i>
                            </a>
                        </div>
                        <p class="mt-4 text-center text-white">{{ socialMediaDescription }}</p>
                    </div>

                    <div class="rounded-2xl shadow-xl p-6">
                        <h3 class="text-3xl font-bold mb-4 text-white">Hubungi Kami via WA</h3>
                        <div class="flex flex-col gap-4">
                            <a :href="`https://wa.me/${whatsappNumber1}`" target="_blank"
                                class="py-3 px-6 rounded-lg text-xl font-semibold text-center hover:opacity-90 transition-opacity duration-300 shadow-md bg-[#1E046C] border-4 border-[#FECB2F] text-white">
                                <i class="fab fa-whatsapp mr-2"></i> {{ whatsappLabel1 }}
                            </a>
                            <a :href="`https://wa.me/${whatsappNumber2}`" target="_blank"
                                class="py-3 px-6 rounded-lg text-xl font-semibold text-center hover:opacity-90 transition-opacity duration-300 shadow-md bg-[#1E046C] border-4 border-[#FECB2F] text-white">
                                <i class="fab fa-whatsapp mr-2"></i> {{ whatsappLabel2 }}
                            </a>
                        </div>
                        <p class="mt-4 text-center text-white">{{ whatsappDescription }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import JudulComp from './sub/JudulComp.vue'; // Sesuaikan path jika berbeda

const props = defineProps({
    googleMapsEmbedUrl: {
        type: String,
        default: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4232.633130042905!2d107.00567627528277!3d-6.49351999349858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69bdb8f6c50289%3A0xb7a33d4d5721ad5f!2sSMK%20MADINATULQURAN!5e1!3m2!1sid!2sid!4v1753081415219!5m2!1sid!2sid"
    },
    mapDescription: {
        type: String,
        default: "Kunjungi kami langsung di lokasi sekolah untuk informasi lebih lanjut dan tur fasilitas."
    },
    socialMedia: {
        type: Array,
        default: () => [
            { name: 'YouTube', url: 'https://www.youtube.com/@SMKNegeri1Kotamobagu', icon: 'fab fa-youtube' },
            { name: 'Instagram', url: 'https://www.instagram.com/smkn1kotamobagu/', icon: 'fab fa-instagram' },
            { name: 'Facebook', url: 'https://www.facebook.com/smkn1kotamobagu', icon: 'fab fa-facebook' },
            { name: 'TikTok', url: 'https://www.tiktok.com/@smkn1kotamobagu', icon: 'fab fa-tiktok' },
        ]
    },
    socialMediaDescription: {
        type: String,
        default: "Jangan lewatkan informasi terbaru dan kegiatan seru kami!"
    },
    whatsappNumber1: {
        type: String,
        default: '6281234567890' // Ganti dengan nomor WA pertama Anda
    },
    whatsappLabel1: {
        type: String,
        default: 'Admin Pendaftaran'
    },
    whatsappNumber2: {
        type: String,
        default: '6287654321098' // Ganti dengan nomor WA kedua Anda
    },
    whatsappLabel2: {
        type: String,
        default: 'Informasi Akademik'
    },
    whatsappDescription: {
        type: String,
        default: "Tim kami siap membantu Anda dengan informasi pendaftaran dan lainnya."
    },

    // Customisasi Warna
    cardBgColor: {
        type: String,
        default: '#F3F4F6' // bg-gray-100 (contoh: warna latar belakang kartu)
    },
    titleColor: {
        type: String,
        default: '#1E046C' // Warna utama untuk judul
    },
    textColor: {
        type: String,
        default: '#4B5563' // Warna teks umum
    },
    socialIconBg: {
        type: String,
        default: '#1E046C' // Background ikon sosial media
    },
    socialIconColor: {
        type: String,
        default: '#FFFFFF' // Warna ikon sosial media
    },
    whatsappButtonBg: {
        type: String,
        default: '#25D366' // Background tombol WhatsApp (hijau WA)
    },
    whatsappButtonText: {
        type: String,
        default: '#FFFFFF' // Warna teks tombol WhatsApp
    },
});
</script>

<style>
/* Pastikan Font Awesome (untuk ikon) sudah terinstal atau di-link di proyek Anda */
/* Contoh di index.html: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"> */
</style>