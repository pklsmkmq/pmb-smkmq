<template>
    <div class="bg-[#f5f5f5] p-6 h-[350px] rounded-xl shadow-md flex flex-col justify-between">
        <img :src="`/assets/img/${data.gambar}`" alt="Prestasi" class="h-56 rounded-2xl object-cover" />
        <p class="bg-black opacity-50 p-2 absolute text-sm text-white right-8 bottom-27 rounded-2xl">{{ data.tanggal }}
        </p>
        <h4 class="text-xl font-semibold text-gray-800 mt-2">{{ data.name }}</h4>
        <p class="text-gray-500">{{ data.deskripsi }}</p>
    </div>
</template>

<script setup>
defineProps({
    data: Object
})
</script>