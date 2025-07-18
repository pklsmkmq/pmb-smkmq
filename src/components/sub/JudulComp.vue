<template>
    <div class="flex flex-col items-center">
        <p :class="`text-[${subtitleColor}] text-[20px] font-semibold`">{{ subtitle }}</p>
        <h2 :class="`text-[${titleColor}] text-[40px] font-bold`">{{ title }}</h2>
        <p :class="`text-[${descriptionColor}] text-[20px] font-semibold`">{{ description }}</p>
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
    },
    subtitleColor: {
        type: String,
        default: '#FECB2F'
    },
    titleColor: {
        type: String,
        default: '#1E046C'
    },
    descriptionColor: {
        type: String,
        default: '#000000' // Default warna hitam untuk deskripsi
    }
});
</script>