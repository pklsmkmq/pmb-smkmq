<template>
    <SantriLayout>
        <div class="max-w-4xl mx-auto">
            <div v-if="step === 1" class="bg-white p-8 rounded-lg shadow-lg">
                <h1 class="text-2xl font-bold text-gray-800 mb-6">Langkah 1: Isi Biodata Pendaftaran</h1>
                <form @submit.prevent="saveBiodataAndProceed" class="space-y-6">
                    <div>
                        <label for="namaLengkap" class="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                        <input type="text" v-model="biodata.namaLengkap" id="namaLengkap" required
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="nisn" class="block text-sm font-medium text-gray-700">NISN</label>
                            <input type="text" v-model="biodata.nisn" id="nisn" required
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="sekolahAsal" class="block text-sm font-medium text-gray-700">Sekolah
                                Asal</label>
                            <input type="text" v-model="biodata.sekolahAsal" id="sekolahAsal" required
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                    </div>
                    <div>
                        <label for="alamat" class="block text-sm font-medium text-gray-700">Alamat Lengkap</label>
                        <textarea v-model="biodata.alamat" id="alamat" rows="3" required
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="tempatLahir" class="block text-sm font-medium text-gray-700">Tempat
                                Lahir</label>
                            <input type="text" v-model="biodata.tempatLahir" id="tempatLahir" required
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="tanggalLahir" class="block text-sm font-medium text-gray-700">Tanggal
                                Lahir</label>
                            <input type="date" v-model="biodata.tanggalLahir" id="tanggalLahir" required
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="jumlahHafalanJuz" class="block text-sm font-medium text-gray-700">Jumlah Hafalan
                                (Juz)</label>
                            <input type="number" v-model.number="biodata.jumlahHafalanJuz" id="jumlahHafalanJuz" min="0"
                                max="30" required
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="jurusan" class="block text-sm font-medium text-gray-700">Pilihan Jurusan</label>
                            <select v-model="biodata.jurusan" id="jurusan" required
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                <option disabled value="">Pilih Jurusan</option>
                                <option value="PPLG">PPLG (Pengembangan Perangkat Lunak dan Gim)</option>
                                <option value="TKJT">TKJT (Teknik Komputer Jaringan dan Telekomunikasi)</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="ilmuIT" class="block text-sm font-medium text-gray-700">Ilmu IT yang Sudah
                            Dipelajari (opsional)</label>
                        <input type="text" v-model="biodata.ilmuIT" id="ilmuIT"
                            placeholder="Contoh: HTML, CSS, Javascript"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    </div>
                    <div class="text-right">
                        <button type="submit"
                            class="bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-900 transition-colors">
                            Selanjutnya
                        </button>
                    </div>
                </form>
            </div>

            <div v-if="step === 2" class="bg-white p-8 rounded-lg shadow-lg">
                <h1 class="text-2xl font-bold text-gray-800 mb-6">Langkah 2: Lakukan Pembayaran</h1>
                <div class="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded-md mb-6">
                    <p class="font-bold">Silakan lakukan transfer biaya pendaftaran ke rekening berikut:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                        <li><span class="font-semibold">Bank:</span> BRI</li>
                        <li><span class="font-semibold">No. Rekening:</span> 141801000600567</li>
                        <li><span class="font-semibold">Atas Nama:</span> SMK MADINATULQURAN</li>
                    </ul>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Unggah Bukti Pembayaran</label>
                    <div @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false"
                        @drop.prevent="handleDrop"
                        :class="['flex justify-center items-center w-full h-48 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md', isDragging ? 'bg-gray-100 border-indigo-500' : '']">
                        <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                viewBox="0 0 48 48" aria-hidden="true">
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                                <label for="file-upload"
                                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span>Pilih file</span>
                                    <input id="file-upload" @change="handleFileSelect" name="file-upload" type="file"
                                        class="sr-only" accept="image/png, image/jpeg, image/gif">
                                </label>
                                <p class="pl-1">atau tarik dan lepas di sini</p>
                            </div>
                            <p v-if="buktiPembayaran" class="text-sm text-green-600 mt-2">File dipilih: {{
                                buktiPembayaran.name }}</p>
                            <p v-else class="text-xs text-gray-500">Hanya file JPG, PNG, atau GIF</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between items-center mt-8">
                    <button @click="step--" class="text-gray-600 font-semibold hover:text-gray-800 transition-colors">
                        &larr; Kembali
                    </button>
                    <button @click="submitPendaftaran" :disabled="!buktiPembayaran || isLoading"
                        class="bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        {{ isLoading ? 'Mengirim...' : 'Kirim Pendaftaran' }}
                    </button>
                </div>
            </div>

            <div v-if="step === 3" class="bg-white p-8 rounded-lg shadow-lg text-center">
                <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h1 class="text-2xl font-bold text-gray-800 mb-4">Pendaftaran Selesai!</h1>
                <p class="text-gray-600 mb-6">Bukti pembayaran Anda telah kami terima. Tim kami akan segera melakukan
                    verifikasi. Mohon cek halaman ini secara berkala untuk melihat status terbaru.</p>
                <div
                    class="bg-yellow-50 border border-yellow-200 text-yellow-800 font-semibold px-4 py-3 rounded-md inline-block">
                    Status: Menunggu Verifikasi
                </div>
                <div class="mt-8">
                    <router-link to="/santri/home"
                        class="bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-900 transition-colors">
                        Kembali ke Dashboard
                    </router-link>
                </div>
            </div>
        </div>
    </SantriLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SantriLayout from '@/layouts/SantriLayout.vue';
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from 'js-cookie';

const step = ref(1);
const isLoading = ref(false);

const biodata = ref({
    namaLengkap: '',
    nisn: '',
    sekolahAsal: '',
    alamat: '',
    tempatLahir: '',
    tanggalLahir: '',
    jumlahHafalanJuz: 0,
    jurusan: '',
    ilmuIT: ''
});

const buktiPembayaran = ref(null);
const isDragging = ref(false);

onMounted(() => {
    // --- PENAMBAHAN LOGIKA DI SINI ---
    // Cek status pendaftaran dari localStorage
    const statusString = localStorage.getItem('pendaftaranStatus');
    if (statusString) {
        const currentStatus = JSON.parse(statusString);
        // Jika sudah pernah mendaftar, langsung lompat ke langkah 3 (halaman status)
        if (currentStatus.sudahMendaftar) {
            step.value = 3;
        }
    }

    // Coba ambil data biodata yang belum selesai dari localStorage
    const savedBiodata = localStorage.getItem('pendaftaranBiodata');
    if (savedBiodata) {
        biodata.value = JSON.parse(savedBiodata);
    }
});

const saveBiodataAndProceed = () => {
    localStorage.setItem('pendaftaranBiodata', JSON.stringify(biodata.value));
    step.value = 2;
};

const validateAndSetFile = (file) => {
    if (!file) return;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
        Swal.fire('File Tidak Sesuai', 'Harap unggah file dengan format JPG, PNG, atau GIF.', 'error');
        return;
    }
    const maxSizeInMB = 10;
    if (file.size > maxSizeInMB * 1024 * 1024) {
        Swal.fire('Ukuran File Terlalu Besar', `Ukuran file tidak boleh melebihi ${maxSizeInMB} MB.`, 'error');
        return;
    }
    buktiPembayaran.value = file;
};

const handleFileSelect = (event) => {
    validateAndSetFile(event.target.files[0]);
};

const handleDrop = (event) => {
    isDragging.value = false;
    validateAndSetFile(event.dataTransfer.files[0]);
};

const submitPendaftaran = async () => {
    if (!buktiPembayaran.value) {
        Swal.fire('Error', 'Silakan unggah bukti pembayaran terlebih dahulu.', 'error');
        return;
    }
    isLoading.value = true;

    const formData = new FormData();

    formData.append('namaLengkap', biodata.value.namaLengkap);
    formData.append('nisn', biodata.value.nisn);
    formData.append('sekolahAsal', biodata.value.sekolahAsal);
    formData.append('alamat', biodata.value.alamat);
    formData.append('tempatLahir', biodata.value.tempatLahir);
    formData.append('tanggalLahir', biodata.value.tanggalLahir);
    formData.append('jurusan', biodata.value.jurusan);
    formData.append('jumlahHafalanJuz', biodata.value.jumlahHafalanJuz);
    formData.append('ilmuIT', biodata.value.ilmuIT);
    formData.append('buktiPembayaran', buktiPembayaran.value);

    try {
        const token = Cookies.get('pmbsmkmq_token');
        await axios.post(
            `${import.meta.env.VITE_LOCAL_URL}/pendaftaran`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            }
        );

        const statusString = localStorage.getItem('pendaftaranStatus');
        if (statusString) {
            const currentStatus = JSON.parse(statusString);
            currentStatus.sudahMendaftar = true;
            currentStatus.statusPembayaran = 'PENDING';
            localStorage.setItem('pendaftaranStatus', JSON.stringify(currentStatus));
        }

        Swal.fire('Berhasil!', 'Data pendaftaran Anda berhasil dikirim.', 'success');

        localStorage.removeItem('pendaftaranBiodata');
        step.value = 3;

    } catch (error) {
        console.error("Gagal mengirim pendaftaran:", error);
        const messages = error.response?.data?.message;
        let errorMessage = "Terjadi kesalahan saat mengirim data.";
        if (Array.isArray(messages)) {
            errorMessage = messages.join('\n');
        } else if (messages) {
            errorMessage = messages;
        }
        Swal.fire('Gagal!', errorMessage, 'error');
    } finally {
        isLoading.value = false;
    }
};
</script>

<style scoped>
.bg-primary {
    background-color: #1E046C;
}
</style>