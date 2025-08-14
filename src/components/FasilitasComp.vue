<template>
    <section class="m-3 lg:m-10" id="fasilitas">
        <JudulComp title="Fasilitas Unggulan Sekolah" subtitle="Apa yang Kami Sediakan"
            description="Mendukung pembelajaran yang nyaman dan modern." />

        <!-- Grid Container -->
        <div class="relative">
            <!-- Grid -->
            <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 mt-10">
                <div v-for="(item, index) in paginatedItems" :key="index"
                    class="rounded overflow-hidden bg-white flex items-center justify-center text-center">
                    <template v-if="item.type === 'image'">
                        <img :src="`/assets/img/${item.src}`" :alt="`fasilitas ${index}`"
                            class="w-full aspect-square object-cover rounded-xl shadow-md overflow-hidden" />
                    </template>
                    <template v-else>
                        <div
                            class="h-full w-full bg-white rounded-xl border-1 border-pgc p-4 flex flex-col justify-center">
                            <h3 class="font-bold text-sm lg:text-lg mb-1">{{ item.title }}</h3>
                            <p class="text-xs lg:text-sm text-gray-600">{{ item.desc }}</p>
                        </div>
                    </template>
                </div>
            </div>

            <!-- Navigasi -->
            <div class="flex justify-between mt-4">
                <button class="bg-pgc text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-40"
                    @click="prevPage" :disabled="currentPage === 0">
                    ← Sebelumnya
                </button>
                <button class="bg-pgc text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-40"
                    @click="nextPage" :disabled="endIndex >= items.length">
                    Selanjutnya →
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import JudulComp from './sub/JudulComp.vue'

const items = [
    { type: 'image', src: 'kelas.jpg' },
    { type: 'image', src: 'kelas2.jpg' },
    { type: 'info', title: 'Ruang Kelas', desc: 'Ruang kelas full AC' },
    { type: 'image', src: 'starlink.jpg' },
    { type: 'image', src: '/program/pbl-4.png' },
    { type: 'info', title: 'Akses Internet', desc: 'Sudah menggunakan Starlink' },
    { type: 'image', src: 'gambar1.jpg' },
    { type: 'image', src: '/program/lap.png' },
    { type: 'info', title: 'Olahraga', desc: 'Lapangan futsal, basket, badminton, tenis meja, dll' },
    { type: 'image', src: '/program/saung.png' },
    { type: 'image', src: '/program/tahfidz.png' },
    { type: 'info', title: 'Saung Belajar', desc: 'Nyaman dan Adem digunakan untuk belajar' },
    { type: 'image', src: '/program/laundry.png' },
    { type: 'image', src: '/program/laundry-2.png' },
    { type: 'info', title: 'Laundry', desc: 'Tidak perlu repot - repot mencuci' },
    { type: 'image', src: 'kantin2.jpg' },
    { type: 'image', src: 'kantin.jpg' },
    { type: 'info', title: 'Kantin', desc: 'Jajan tidak perlu ribet' },
    { type: 'image', src: 'lab.jpg' },
    { type: 'image', src: 'lab2.jpg' },
    { type: 'info', title: 'Lab Praktikum', desc: 'Berbasis LAN School' },
    { type: 'image', src: 'masjid.jpg' },
    { type: 'image', src: '/program/masjid-2.png' },
    { type: 'info', title: 'Masjid', desc: 'Sholat nyaman dan tenang' },
]

const pageSize = 12
const currentPage = ref(0)

const startIndex = computed(() => currentPage.value * pageSize)
const endIndex = computed(() => startIndex.value + pageSize)

const paginatedItems = computed(() =>
    items.slice(startIndex.value, endIndex.value)
)

function nextPage() {
    if (endIndex.value < items.length) currentPage.value++
}

function prevPage() {
    if (currentPage.value > 0) currentPage.value--
}
</script>