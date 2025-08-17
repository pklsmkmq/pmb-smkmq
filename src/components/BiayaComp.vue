<template>
    <div class="m-3 lg:m-10" id="biaya">
        <JudulComp title="Pendidikan Berkualitas, Biaya Bernilai Ibadah" subtitle="Biaya Pendidikan"
            description="Jelas sejak awal, sesuai dengan kualitas yang diberikan." />

        <div class="mt-10 flex lg:flex-row flex-col justify-center gap-10">
            <PricingCard @click="getPromo('fullday')" title="Fullday"
                description="Belajar Agama & IT tapi tetep deket keluarga" :admission-fee="{
                    price: 'Rp. 8.500.000',
                    strikethroughPrice: 'Rp. 10.000.000',
                    description: 'Pembayaran bisa dicicil 3x',
                    features: [
                        'Seragam Kejuruan, Seragam Batik dan Seragam Olahraga',
                        'Sertifikasi Kompetensi',
                        'Fasilitas Belajar',
                        'Sumbangan Pengembangan Sarana Prasarana',
                        'Modul Ajar'
                    ],
                }" :spp-fee="{
                    price: 'Rp. 1.000.000',
                    priceSuffix: '/bulan',
                    features: [
                        'Makan Siang setiap hari dengan menu sehat dan bergizi',
                        'Termasuk biaya belajar-mengajar, ujian harian, PTS, PAS, dan evaluasi akademik.',
                        'Pengembangan Karakter & Keislaman',
                        'Ekstrakurikuler Wajib (Pramuka & Bela Diri)',
                    ],
                }" :registration-fee="{
                    price: 'Rp. 450.000',
                    priceSuffix: '/Dibayar sekali',
                    description: 'Uang Pendaftaran digunakan untuk tes potensi (minat dan bakat) siswa, serta potensi akademis dan non-akademis.',
                }" :re-registration-fee="{
                price: 'Rp. 3.500.000',
                priceSuffix: '/Dibayar Ketika Naik Kelas XI & XII',
                description: 'Uang Daftar Ulang digunakan untuk English Discovery, pemeliharaan dan perbaikan sarana prasarana',
            }" button-text="Ambil Promo Sekarang!" theme-color="#1E046C" secondary-color="#FDCA2F"
                card-background-color="#E5E7EB" card-border-color="#D1D5DB" text-color="#374151" />

            <PricingCard @click="getPromo('boarding')" title="Boarding" textcolor="#ffffff" borderclr="#FECB2F"
                description="Pendidikan intensif dengan asrama dan fasilitas lengkap" :admission-fee="{
                    price: 'Rp. 14.500.000',
                    strikethroughPrice: 'Rp. 18.500.000',
                    description: 'Pembayaran bisa dicicil 5x',
                    features: [
                        'Seragam Kejuruan, Seragam Batik dan Seragam Olahraga',
                        'Ranjang, kasur, sprei, bantal, serta tempat baju dan perlengkapan tidur lainnya.',
                        'Bimbingan Tahfidz Quran',
                        'Sertifikasi Kompetensi',
                        'Fasilitas Belajar',
                        'Sumbangan Pengembangan Sarana Prasarana',
                        'Modul Ajar'
                    ],
                }" :spp-fee="{
                    price: 'Rp. 2.500.000',
                    priceSuffix: '/bulan',
                    features: [
                        'Makan 3x sehari dengan menu sehat dan bergizi',
                        'Termasuk biaya belajar-mengajar, ujian harian, PTS, PAS, dan evaluasi akademik.',
                        'Kegiatan Keislaman',
                        'Termasuk layanan laundry harian untuk pakaian Santri',
                        'Pengembangan Karakter & Keislaman',
                        'Ekstrakurikuler Wajib (Pramuka & Bela Diri)',
                    ],
                }" :registration-fee="{
                    price: 'Rp. 450.000',
                    priceSuffix: '/Dibayar sekali',
                    description: 'Uang Pendaftaran digunakan untuk tes potensi (minat dan bakat) siswa, serta potensi akademis dan non-akademis.',
                }" :re-registration-fee="{
                    price: 'Rp. 3.500.000',
                    priceSuffix: '/Dibayar Ketika Naik Kelas XI & XII',
                    description: 'Uang Daftar Ulang digunakan untuk English Discovery, pemeliharaan dan perbaikan sarana prasarana',
                }" button-text="Ambil Promo Sekarang!" theme-color="#FDCA2F" secondary-color="#1E046C"
                card-background-color="#1E046C" card-border-color="#FDCA2F" text-color="white" />
        </div>
    </div>
</template>

<script setup>
import JudulComp from './sub/JudulComp.vue';
import PricingCard from './PricingCard.vue';

const getPromo = (typePromo = "boarding") => {
    if (typePromo == "boarding") {
        window.open('https://wa.me/6285545182776?text=Bismillah%2C%20ana%20mau%20dapat%20promo%20pendaftaran%20PMB%20untuk%20boarding%20SMK%20Madinatulquran%20Jonggol%20ini', '_blank')
    } else {
        window.open('https://wa.me/6285545182776?text=Bismillah%2C%20ana%20mau%20dapat%20promo%20pendaftaran%20PMB%20untuk%20fullday%20SMK%20Madinatulquran%20Jonggol%20ini', '_blank')
    }
    // window.location.href = "https://wa.me/6281533330457?text=Bismillah%2C%20ana%20mau%20bertanya%20seputar%20program%20beasiswa%20yang%20ada%20di%20SMK%20Madinatulquran%20Jonggol%20ini%20apakah%20ada%3F"

}
</script>