<template>
    <li class="flex items-center">
        <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span :class="generalTextColorClass">{{ featureText }}</span>
    </li>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    featureText: {
        type: String,
        required: true,
    },
    textColor: {
        type: String,
        default: 'gray-700', // Tailwind class for text color
    }
});

const generalTextColorClass = computed(() => {
    if (props.textColor.startsWith('[')) { // Cek jika formatnya sudah arbitrary value dari parent
        return `text${props.textColor}`;
    }
    return `text-${props.textColor}`;
});
</script>