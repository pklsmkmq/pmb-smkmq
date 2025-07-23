<template>
    <div class="bg-nav p-6 h-350 rounded-xl shadow-md flex flex-col justify-between">
        <img :src="`/assets/img/${data.gambar}`" alt="Prestasi" class="h-56 rounded-2xl object-cover" />
        <p class="bg-black opacity-50 p-2 absolute text-sm text-white right-8 bottom-27 rounded-2xl">{{ data.tanggal }}
        </p>
        <h4 class="text-lg lg:text-xl font-semibold text-gray-800 mt-2">{{ data.name }}</h4>
        <p class="text-gray-500 text-sm lg:text-lg">{{ data.deskripsi }}</p>
    </div>
</template>

<script setup>
defineProps({
    data: Object
})
</script>