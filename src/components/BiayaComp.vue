<template>
    <div class="m-3 lg:m-10" id="biaya">
        <JudulComp title="Pendidikan Berkualitas, Biaya Bernilai Ibadah" subtitle="Biaya Pendidikan"
            description="Jelas sejak awal, sesuai dengan kualitas yang diberikan." />

        <div class="mt-10 flex lg:flex-row flex-col justify-center gap-10">
            <PricingCard title="Fullday" description="Belajar Agama & IT tapi tetep deket keluarga" :admission-fee="{
                price: 'Rp. 8.500.000',
                strikethroughPrice: 'Rp. 10.000.000',
                description: 'Pembayaran bisa dicicil 3x',
                features: [
                    'Seragam Kejuruan, Seragam Batik dan Seragam Olahraga',
                    'Fasilitas Kesehatan',
                    'Workshop & Praktik Langsung',
                    'Sertifikasi Kompetensi Tambahan',
                    'Fasilitas Belajar Modern',
                ],
            }" :spp-fee="{
                price: 'Rp. 1.000.000',
                priceSuffix: '/bulan',
                features: [
                    'Makan Siang setiap hari dengan menu sehat dan bergizi',
                    'Layanan Kesehatan & Keamanan',
                    'Termasuk biaya belajar-mengajar, ujian harian, PTS, PAS, dan evaluasi akademik.',
                    'Pengembangan Karakter & Keislaman',
                    'Fasilitas & Kegiatan Penunjang Pembelajaran',
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

            <PricingCard title="Boarding" textcolor="#ffffff" borderclr="#FECB2F"
                description="Pendidikan intensif dengan asrama dan fasilitas lengkap" :admission-fee="{
                    price: 'Rp. 14.500.000',
                    strikethroughPrice: 'Rp. 18.500.000',
                    description: 'Pembayaran bisa dicicil 3x',
                    features: [
                        'Seragam Kejuruan, Seragam Batik dan Seragam Olahraga',
                        'Ranjang, kasur, sprei, bantal, serta tempat baju dan perlengkapan tidur lainnya.',
                        'Layanan Kesehatan & Konseling 24/7',
                        'Mentoring Pribadi & Tahfidz Quran',
                        'Ekstrakurikuler Pilihan (Olahraga, Seni, Bahasa)',
                    ],
                }" :spp-fee="{
                    price: 'Rp. 2.500.000',
                    priceSuffix: '/bulan',
                    features: [
                        'Makan 3x sehari dengan menu sehat dan bergizi',
                        'Termasuk biaya belajar-mengajar, ujian harian, PTS, PAS, dan evaluasi akademik.',
                        'Pendampingan Guru & Konselor Profesional',
                        'Kegiatan Keislaman Intensif',
                        'Termasuk layanan laundry harian untuk pakaian siswa selama di asrama',
                    ],
                }" :registration-fee="{
                    price: 'Rp. 450.000',
                    priceSuffix: '/Dibayar sekali',
                    description: 'Uang Pendaftaran mencakup tes psikologi, bakat, dan akademis komprehensif untuk penempatan program yang tepat.',
                }" :re-registration-fee="{
                    price: 'Rp. 3.500.000',
                    priceSuffix: '/Dibayar Ketika Naik Kelas XI & XII',
                    description: 'Uang Daftar Ulang mencakup pembaharuan fasilitas asrama, program pengembangan karakter, dan kegiatan keagamaan tahunan.',
                }" button-text="Ambil Promo Sekarang!" theme-color="#FDCA2F" secondary-color="#1E046C"
                card-background-color="#1E046C" card-border-color="#FDCA2F" text-color="white" />
        </div>
    </div>
</template>

<script setup>
import JudulComp from './sub/JudulComp.vue';
import PricingCard from './PricingCard.vue';
</script>