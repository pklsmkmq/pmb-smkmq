<template>
    <div class="flex items-center text-center mt-10">
        <div :class="`flex-grow border-t border-${textclr}`"></div>
        <span :class="`px-3 font-semibold text-lg lg:text-xl text-${textclr}`">{{ title }}</span>
        <div :class="`flex-grow border-t border-${textclr}`"></div>
    </div>
    <div class="flex justify-center gap-4 mt-4 items-end">
        <p v-if="strikethroughPrice" class="text-lg lg:text-2xl line-through text-red-500">
            {{ strikethroughPrice }}
        </p>
        <p :class="`text-2xl lg:text-5xl font-bold text-${textclr}`">
            {{ price }}
            <span v-if="priceSuffix" :class="['text-sm lg:text-base font-light', themeTextColorClass]">{{ priceSuffix
                }}</span>
        </p>
    </div>
    <p v-if="description" :class="['text-center my-3', generalTextColorClass]">{{ description }}</p>

    <ul v-if="features && features.length" class="space-y-3 mt-5">
        <FiturList v-for="(feature, index) in features" :key="index" :feature-text="feature" :text-color="textColor" />
    </ul>
</template>

<script setup>
import { computed } from 'vue';
import FiturList from './FiturList.vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    textclr: {
        type: String,
        default: '#1E046C'
    },
    price: {
        type: String,
        required: true,
    },
    strikethroughPrice: {
        type: String,
        default: null,
    },
    priceSuffix: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
    features: {
        type: Array,
        default: () => [],
    },
    themeColor: {
        type: String,
        default: '#1E046C', // Default color for titles and prices
    },
    textColor: {
        type: String,
        default: 'gray-700', // Default general text color
    }
});

const borderColorClass = computed(() => `border-[${props.themeColor}]`);
const themeTextColorClass = computed(() => `text-[${props.themeColor}]`);

const generalTextColorClass = computed(() => {
    if (props.textColor.startsWith('[')) { // Cek jika formatnya sudah arbitrary value dari parent
        return `text${props.textColor}`;
    }
    return `text-${props.textColor}`;
});
</script>