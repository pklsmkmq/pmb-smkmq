<template>
    <div :class="['p-4 rounded-lg text-white shadow', color]">
        <h2 class="text-lg font-semibold">{{ title }}</h2>
        <p class="text-2xl font-bold mt-2">{{ value }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    value: Number,
    color: String
});
</script>