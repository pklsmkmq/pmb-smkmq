<template>
    <div class="flex flex-col items-center">
        <p class="text-[#FDCA2F] text-[20px] font-semibold">{{ subtitle }}</p>
        <h2 class="text-[#1E046C] text-[40px] font-bold">{{ title }}</h2>
        <p class="text-[20px] font-semibold">{{ description }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
});
</script>