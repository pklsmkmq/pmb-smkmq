<template>
    <SantriLayout>
        <div class="space-y-8">
            <div class="bg-white p-6 rounded-lg shadow">
                <h1 class="text-2xl md:text-3xl font-bold text-gray-800">
                    Ahlan Wa Sahlan, <span class="text-primary">{{ namaSantri }}</span>!
                </h1>
                <p class="mt-2 text-gray-600">Selamat datang di dasbor Penerimaan Murid Baru SMK Madinatulquran.</p>
            </div>

            <div>
                <h2 class="text-xl font-bold text-gray-700 mb-4">Proses Pendaftaran Anda</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div v-for="step in alurProses" :key="step.nama"
                        :class="['p-4 rounded-lg shadow-md flex flex-col items-center justify-between text-center min-h-48', getStatusColor(step.status).bg, getStatusColor(step.status).text]">
                        <div>
                            <div
                                :class="['w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto', getStatusColor(step.status).iconBg, getStatusColor(step.status).iconText]">
                                <svg v-if="step.status === 'Selesai'" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span v-else class="text-xl font-bold">{{ step.id }}</span>
                            </div>
                            <h3 class="font-semibold">{{ step.nama }}</h3>
                            <p class="text-sm mt-1">{{ step.status }}</p>
                        </div>
                        <button v-if="step.buttonText" @click="handleAction(step)"
                            :class="['mt-4 py-1.5 px-4 text-sm font-semibold rounded-lg w-full transition-colors', getStatusColor(step.status).button]">
                            {{ step.buttonText }}
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h2 class="text-xl font-bold text-gray-700 mb-4">Berita & Informasi Terbaru</h2>
                <div v-if="isLoading" class="text-center text-gray-500">
                    <p>Memuat berita...</p>
                </div>
                <div v-else-if="error" class="text-center text-red-500">
                    <p>{{ error }}</p>
                </div>
                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="berita in daftarBerita" :key="berita.id"
                        class="bg-white rounded-lg shadow overflow-hidden flex flex-col">
                        <img :src="berita.featured_image_url || 'https://via.placeholder.com/400x200.png/1E046C/FFFFFF?text=SMK+MQ'"
                            alt="Gambar Berita" class="w-full h-40 object-cover">
                        <div class="p-4 flex flex-col flex-grow">
                            <h3 class="font-bold text-lg mb-2 flex-grow" v-html="berita.title.rendered"></h3>
                            <div class="text-gray-600 text-sm mb-4" v-html="berita.excerpt.rendered"></div>
                            <a :href="berita.link" target="_blank"
                                class="text-blue-600 hover:underline font-semibold mt-auto">
                                Baca Selengkapnya
                            </a>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-6">
                    <a href="https://smkmadinatulquran.sch.id/category/berita/" target="_blank"
                        class="bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-900 transition-colors">
                        Lihat Berita Lainnya
                    </a>
                </div>
            </div>
        </div>
    </SantriLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import SantriLayout from '@/layouts/SantriLayout.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const namaSantri = ref('');
const pendaftaranStatus = ref({});
const router = useRouter();

const daftarBerita = ref([]);
const isLoading = ref(true);
const error = ref(null);

const fetchBerita = async () => {
    try {
        const response = await axios.get('https://smkmadinatulquran.sch.id/wp-json/wp/v2/posts?per_page=3&_embed');
        daftarBerita.value = response.data.map(post => ({
            ...post,
            featured_image_url: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
        }));
    } catch (e) {
        console.error("Gagal mengambil berita:", e);
        error.value = "Tidak dapat memuat berita saat ini.";
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    namaSantri.value = localStorage.getItem('user_name') || 'Calon Santri';
    const statusString = localStorage.getItem('pendaftaranStatus');
    if (statusString) {
        pendaftaranStatus.value = JSON.parse(statusString);
    }
    fetchBerita();
});

const alurProses = computed(() => {
    const status = pendaftaranStatus.value;
    const baseProses = [
        { id: 1, nama: 'Pendaftaran Tes', status: 'Belum Mendaftar', buttonText: 'Daftar Sekarang' },
        { id: 2, nama: 'Menjadwalkan Tes', status: 'Belum Selesai', buttonText: 'Pilih Jadwal' },
        { id: 3, nama: 'Melakukan Tes', status: 'Belum Selesai', buttonText: 'Mulai Tes' },
        { id: 4, nama: 'Pengumuman Hasil', status: 'Belum Selesai', buttonText: 'Lihat Hasil' },
        { id: 5, nama: 'Pembayaran', status: 'Belum Selesai', buttonText: 'Lakukan Pembayaran' },
    ];

    // Logika Status Dinamis
    if (status.sudahMendaftar) {
        if (status.statusPembayaran === 'APPROVED') {
            baseProses[0].status = 'Selesai';
            baseProses[0].buttonText = 'Lihat Form';
        } else {
            baseProses[0].status = 'Menunggu Verifikasi';
            baseProses[0].buttonText = 'Cek Status Pembayaran';
        }
    }

    if (status.sudahMenjadwalkanTes) {
        baseProses[1].status = 'Selesai';
        baseProses[1].buttonText = 'Lihat Jadwal';
    }

    // Tentukan langkah aktif dan sembunyikan tombol untuk langkah selanjutnya
    let isPreviousStepComplete = true;
    return baseProses.map(step => {
        const currentStep = { ...step };
        if (isPreviousStepComplete) {
            if (currentStep.status !== 'Selesai') {
                // Ini adalah langkah aktif, tandai dan hentikan proses selanjutnya
                currentStep.status = currentStep.status === 'Belum Mendaftar' ? 'Belum Mendaftar' : 'Aktif';
                isPreviousStepComplete = false;
            }
        } else {
            // Jika langkah sebelumnya belum selesai, sembunyikan tombol
            currentStep.buttonText = null;
        }
        return currentStep;
    });
});


const getStatusColor = (status) => {
    switch (status) {
        case 'Selesai':
            return { bg: 'bg-green-100', text: 'text-green-800', iconBg: 'bg-green-500', iconText: 'text-white', button: 'bg-white text-gray-700 border hover:bg-gray-50' };
        case 'Aktif':
            return { bg: 'bg-blue-100', text: 'text-blue-800', iconBg: 'bg-blue-500', iconText: 'text-white', button: 'bg-blue-500 text-white hover:bg-blue-600' };
        case 'Menunggu Verifikasi':
            return { bg: 'bg-yellow-100', text: 'text-yellow-800', iconBg: 'bg-yellow-500', iconText: 'text-white', button: 'bg-yellow-500 text-white hover:bg-yellow-600' };
        default: // Belum Mendaftar / Belum Selesai
            return { bg: 'bg-gray-100', text: 'text-gray-600', iconBg: 'bg-gray-300', iconText: 'text-gray-700', button: 'bg-primary text-white hover:bg-purple-900' };
    }
};

const handleAction = (step) => {
    const routeMap = {
        'Pendaftaran Tes': 'santri-pendaftaran',
        'Menjadwalkan Tes': 'santri-tes', // Asumsi halaman jadwal dan tes sama
        'Melakukan Tes': 'santri-tes',
        'Pengumuman Hasil': 'santri-hasil',
        'Pembayaran': 'santri-pendaftaran' // Asumsi pembayaran ada di halaman pendaftaran
    };
    const routeName = routeMap[step.nama];
    if (routeName) {
        router.push({ name: routeName });
    }
};

</script>

<style scoped>
.text-primary {
    color: #1E046C;
}

.bg-primary {
    background-color: #1E046C;
}
</style>