<template>
    <div>
        <div class="flex justify-between mb-4">
            <input type="text" placeholder="Cari..." v-model="search" class="border p-2 rounded" />
            <select v-model="filter" class="border p-2 rounded">
                <option value="">Semua</option>
                <option value="sudah tes">Sudah Tes</option>
                <option value="belum tes">Belum Tes</option>
            </select>
        </div>

        <table class="w-full border">
            <thead>
                <tr class="bg-gray-100">
                    <th class="p-2 border">Nama</th>
                    <th class="p-2 border">Status Tes</th>
                    <th class="p-2 border">Pembayaran</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, idx) in paginatedData" :key="idx">
                    <td class="border p-2">{{ row.nama }}</td>
                    <td class="border p-2">{{ row.statusTes }}</td>
                    <td class="border p-2">{{ row.pembayaran }}</td>
                </tr>
            </tbody>
        </table>

        <div class="mt-4 flex gap-2">
            <button @click="page--" :disabled="page === 1" class="px-3 py-1 bg-primary text-white rounded">Prev</button>
            <button @click="page++" :disabled="page === maxPage"
                class="px-3 py-1 bg-primary text-white rounded">Next</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const search = ref('');
const filter = ref('');
const page = ref(1);
const perPage = 5;

const data = ref([
    { nama: 'Ahmad', statusTes: 'Sudah Tes', pembayaran: 'Lunas' },
    { nama: 'Budi', statusTes: 'Belum Tes', pembayaran: 'Belum Bayar' },
    { nama: 'Citra', statusTes: 'Sudah Tes', pembayaran: 'Lunas' },
    { nama: 'Dewi', statusTes: 'Belum Tes', pembayaran: 'Belum Bayar' },
    { nama: 'Eko', statusTes: 'Sudah Tes', pembayaran: 'Lunas' },
]);

const filteredData = computed(() => {
    return data.value.filter(d =>
        d.nama.toLowerCase().includes(search.value.toLowerCase()) &&
        (filter.value ? d.statusTes.toLowerCase() === filter.value : true)
    );
});

const maxPage = computed(() => Math.ceil(filteredData.value.length / perPage));

const paginatedData = computed(() => {
    const start = (page.value - 1) * perPage;
    return filteredData.value.slice(start, start + perPage);
});
</script>