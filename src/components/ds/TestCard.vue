<template>
    <div :class="['p-4 rounded-lg text-white shadow', color]">
        <h3 class="text-xl font-bold">{{ nama }}</h3>
        <p class="mt-2">{{ status }}</p>
    </div>
</template>

<script setup>
defineProps({
    nama: String,
    status: String,
    color: String
});
</script>