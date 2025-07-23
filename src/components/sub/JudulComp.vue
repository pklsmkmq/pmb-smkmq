<template>
    <div class="flex flex-col items-center">
        <p :style="{ color: subtitleColor }" class="text-sm lg:text-xl font-semibold text-center">{{ subtitle }}</p>
        <h2 :style="{ color: titleColor }" class="text-xl lg:text-4xl font-bold text-center">{{ title }}</h2>
        <p :style="{ color: descriptionColor }" class="text-sm lg:text-xl font-semibold text-center">{{ description }}
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