<template>
    <AdminLayout>
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h1 class="text-2xl font-bold text-gray-800 mb-6">Data Pendaftar Santri</h1>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <input type="text" v-model="searchQuery" placeholder="Cari nama santri..."
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">

                <select v-model="filterJurusan"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Semua Jurusan</option>
                    <option value="PPLG">PPLG</option>
                    <option value="TKJT">TKJT</option>
                </select>

                <select v-model="filterStatus"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Semua Status</option>
                    <option value="PENDING">Menunggu Persetujuan</option>
                    <option value="APPROVED">Disetujui</option>
                </select>
            </div>

            <div class="overflow-x-auto relative border border-gray-200 rounded-lg">
                <table class="w-full table-auto">
                    <thead class="bg-gray-100">
                        <tr>
                            <th scope="col"
                                class="sticky left-0 bg-gray-100 px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                                style="z-index: 20;">No</th>
                            <th scope="col"
                                class="sticky left-12 bg-gray-100 px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                                style="min-width: 200px; z-index: 20;">Nama Santri</th>

                            <th scope="col"
                                class="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                                style="min-width: 150px;">Tanggal Daftar</th>
                            <th scope="col"
                                class="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                                style="min-width: 180px;">No. Telepon</th>
                            <th scope="col"
                                class="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                                style="min-width: 200px;">Asal Sekolah</th>
                            <th scope="col"
                                class="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                Jurusan</th>
                            <th scope="col"
                                class="px-4 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">
                                Status</th>
                            <th scope="col"
                                class="px-4 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">
                                Bukti Bayar</th>
                            <th scope="col"
                                class="px-4 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">
                                Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-if="isLoading">
                            <td colspan="9" class="text-center py-10 text-gray-500">
                                <p>Memuat data...</p>
                            </td>
                        </tr>
                        <tr v-else-if="paginatedData.length === 0">
                            <td colspan="9" class="text-center py-10 text-gray-500">
                                <p>Tidak ada data yang cocok.</p>
                            </td>
                        </tr>
                        <tr v-for="(santri, index) in paginatedData" :key="santri.id" class="hover:bg-gray-50">
                            <td
                                class="sticky left-0 bg-white hover:bg-gray-50 px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ (currentPage - 1) * perPage + index + 1 }}</td>
                            <td
                                class="sticky left-12 bg-white hover:bg-gray-50 px-4 py-4 whitespace-nowrap text-sm font-medium">
                                <span class="bg-primary text-white px-3 py-1.5 rounded-md text-xs font-semibold">
                                    {{ santri.nama }}
                                </span>
                            </td>

                            <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{{
                                santri.tanggalRegistrasi }}</td>
                            <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                <a :href="`https://wa.me/${santri.nomorTelepon}`" target="_blank"
                                    class="text-green-600 hover:underline flex items-center">
                                    <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.654 4.495 1.931 6.48l-.755 2.762 2.825-.742zm4.805-5.076c-.078-.127-.273-.213-.574-.349-.29-.123-.747-.365-1.03-.424-.282-.059-.487-.04-.693.123-.205.163-.782.782-.961.943-.179.162-.358.182-.656.06-.297-.123-1.265-.466-2.404-1.482-.888-.79-1.481-1.765-1.654-2.059-.173-.294-.019-.448.105-.574.113-.117.252-.292.378-.438.125-.145.165-.242.247-.41.082-.167.043-.311-.018-.438-.06-.126-.574-1.373-.786-1.879-.204-.494-.41-.428-.573-.434-.162-.006-.357-.012-.551-.012-.195 0-.51.076-.782.365-.272.29-.99.961-.99 2.346s1.015 2.711 1.153 2.898c.139.188 1.996 3.058 4.845 4.253.71.295 1.251.47 1.69.625.715.253 1.36.213 1.854.128.57-.101 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                    {{ santri.nomorTelepon }}
                                </a>
                            </td>
                            <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{{ santri.sekolahAsal }}</td>
                            <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{{ santri.jurusan }}</td>
                            <td class="px-4 py-4 whitespace-nowrap text-center text-sm">
                                <span :class="getStatusClass(santri.statusPembayaran)">
                                    {{ santri.statusPembayaran }}
                                </span>
                            </td>
                            <td class="px-4 py-4 whitespace-nowrap text-center text-sm">
                                <button @click="showBuktiPembayaran(santri.buktiPembayaran)"
                                    class="text-primary hover:underline">
                                    Lihat
                                </button>
                            </td>
                            <td class="px-4 py-4 whitespace-nowrap text-center text-sm">
                                <button v-if="santri.statusPembayaran === 'PENDING'"
                                    @click="approvePendaftaran(santri.id)"
                                    class="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors">
                                    Setujui
                                </button>
                                <span v-else class="text-gray-400">-</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex justify-between items-center mt-6">
                <span class="text-sm text-gray-600">
                    Menampilkan {{ paginatedData.length }} dari {{ filteredData.length }} data
                </span>
                <div>
                    <button @click="currentPage--" :disabled="currentPage === 1"
                        class="px-3 py-1 border rounded-md mr-2 disabled:opacity-50">
                        &laquo;
                    </button>
                    <span class="px-3 py-1">{{ currentPage }} / {{ totalPages }}</span>
                    <button @click="currentPage++" :disabled="currentPage === totalPages"
                        class="px-3 py-1 border rounded-md ml-2 disabled:opacity-50">
                        &raquo;
                    </button>
                </div>
            </div>
        </div>
    </AdminLayout>

    <div v-if="showModal" @click="showModal = false"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <div class="bg-white p-4 rounded-lg shadow-2xl max-w-lg w-full" @click.stop>
            <h3 class="font-bold text-lg mb-4">Bukti Pembayaran</h3>
            <img :src="selectedImage" alt="Bukti Pembayaran" class="w-full h-auto object-contain max-h-[80vh]">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import AdminLayout from '../layouts/AdminLayout.vue';
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

// State
const allData = ref([]);
const isLoading = ref(true);
const searchQuery = ref('');
const filterJurusan = ref('');
const filterStatus = ref('');
const currentPage = ref(1);
const perPage = 10;
const showModal = ref(false);
const selectedImage = ref('');

// API Fetching
const fetchData = async () => {
    isLoading.value = true;
    try {
        const token = Cookies.get('pmbsmkmq_token');
        // Asumsi API endpoint yang sama, tapi Anda mungkin perlu menambahkan parameter untuk admin
        const response = await axios.get(`${import.meta.env.VITE_LOCAL_URL}/pendaftaran/santri`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        // Sesuai respons API baru, data ada di `response.data.data`
        allData.value = response.data.data;
    } catch (error) {
        console.error("Gagal mengambil data pendaftar:", error);
        Swal.fire('Error', 'Tidak dapat memuat data pendaftar.', 'error');
    } finally {
        isLoading.value = false;
    }
};

onMounted(fetchData);

// Computed Properties for Filtering and Pagination
const filteredData = computed(() => {
    return allData.value.filter(santri => {
        // API menggunakan 'nama', bukan 'namaLengkap'
        const searchMatch = santri.nama.toLowerCase().includes(searchQuery.value.toLowerCase());
        const jurusanMatch = filterJurusan.value ? santri.jurusan === filterJurusan.value : true;
        const statusMatch = filterStatus.value ? santri.statusPembayaran === filterStatus.value : true;
        return searchMatch && jurusanMatch && statusMatch;
    });
});

const totalPages = computed(() => {
    const total = filteredData.value.length;
    return total > 0 ? Math.ceil(total / perPage) : 1;
});

const paginatedData = computed(() => {
    if (currentPage.value > totalPages.value) {
        currentPage.value = totalPages.value;
    }
    const start = (currentPage.value - 1) * perPage;
    const end = start + perPage;
    return filteredData.value.slice(start, end);
});

// Helper Methods
const formatTanggal = (tanggalISO) => {
    if (!tanggalISO) return '-';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(tanggalISO).toLocaleDateString('id-ID', options);
};

const getStatusClass = (status) => {
    if (status === 'APPROVED') return 'bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold';
    if (status === 'PENDING') return 'bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold';
    return 'bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold';
};

const showBuktiPembayaran = (imageUrl) => {
    if (imageUrl && imageUrl !== '-') {
        selectedImage.value = imageUrl;
        showModal.value = true;
    } else {
        Swal.fire('Info', 'Bukti pembayaran tidak tersedia.', 'info');
    }
};

const approvePendaftaran = async (santriId) => {
    Swal.fire({
        title: 'Anda yakin?',
        text: "Anda akan menyetujui pendaftaran santri ini.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34D399',
        cancelButtonColor: '#6B7280',
        confirmButtonText: 'Ya, setujui!',
        cancelButtonText: 'Batal'
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                const token = Cookies.get('pmbsmkmq_token');
                // Asumsi endpoint untuk approve adalah seperti ini, sesuaikan jika berbeda
                await axios.patch(`${import.meta.env.VITE_LOCAL_URL}/pendaftaran/${santriId}/approve`, {}, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                const santri = allData.value.find(s => s.id === santriId);
                if (santri) {
                    santri.statusPembayaran = 'APPROVED';
                }

                Swal.fire('Disetujui!', 'Pendaftaran santri telah disetujui.', 'success');
            } catch (error) {
                console.error("Gagal menyetujui pendaftaran:", error);
                const errorMessage = error.response?.data?.message || "Terjadi kesalahan saat menyetujui pendaftaran.";
                Swal.fire('Gagal', errorMessage, 'error');
            }
        }
    });
};
</script>

<style scoped>
.bg-primary {
    background-color: #1E046C;
}

.text-primary {
    color: #1E046C;
}

.focus\:ring-primary:focus {
    --tw-ring-color: #1E046C;
}

/* Style untuk sticky header */
th.sticky {
    position: -webkit-sticky;
    position: sticky;
    z-index: 10;
}

td.sticky {
    position: -webkit-sticky;
    position: sticky;
    z-index: 10;
    /* Memberi border kanan agar terlihat lebih jelas saat scroll */
    border-right: 1px solid #e5e7eb;
}

/* Menentukan posisi sticky untuk setiap kolom */
th.sticky:nth-child(1),
td.sticky:nth-child(1) {
    left: 0;
    z-index: 20;
}

th.sticky:nth-child(2),
td.sticky:nth-child(2) {
    left: 3rem;
    /* Sesuaikan nilai ini dengan lebar kolom pertama */
    z-index: 20;
}
</style>