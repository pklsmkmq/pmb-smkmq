<template>
    <div class="flex flex-col items-center">
        <p :class="`text-[${subtitleColor}] text-[12px] lg:text-[20px] font-semibold text-center`">{{ subtitle }}</p>
        <h2 :class="`text-[${titleColor}] text-[20px] lg:text-[40px] font-bold text-center`">{{ title }}</h2>
        <p :class="`text-[${descriptionColor}] text-[12px] lg:text-[20px] font-semibold text-center`">{{ description }}
        </p>
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