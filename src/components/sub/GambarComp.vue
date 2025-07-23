<template>
    <div class="flex flex-col gap-5">
        <div class="flex justify-between gap-4">
            <img :src="`/assets/img/${gambar5}`" :alt="`${title} 5`"
                class="w-3/5 h-72 object-cover object-center rounded-2xl" />
            <div class="flex flex-col justify-between w-2/5">
                <img src="/assets/img/img_right.png" alt="Gambar Kanan" class="w-28 h-28" />
                <img :src="`/assets/img/${gambar6}`" :alt="`${title} 6`"
                    class="w-full h-40 object-cover object-center rounded-2xl" />
            </div>
        </div>
        <div class="flex justify-between gap-4">
            <div class="flex flex-col justify-between items-end w-2/5">
                <img :src="`/assets/img/${gambar2}`" :alt="`${title} 2`"
                    class="w-full h-20 object-cover object-center rounded-2xl" />
                <img :src="`/assets/img/${gambar3}`" :alt="`${title} 3`"
                    class="w-full h-20 object-cover object-center rounded-2xl" />
                <img src="/assets/img/img_left.png" alt="Gambar Kiri" class="w-28 h-28" />
            </div>
            <img :src="`/assets/img/${gambar1}`" :alt="`${title} 1`"
                class="w-3/5 h-80 object-cover object-center rounded-2xl" />
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    gambar1: {
        type: String,
        required: true
    },
    gambar2: {
        type: String,
        required: true
    },
    gambar3: {
        type: String,
        required: true
    },
    gambar5: {
        type: String,
        required: true
    },
    gambar6: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});
</script>