<template>
    <div class="group w-full lg:w-11/12 border-2 border-pgc rounded-2xl p-2 flex items-center gap-5 transition-all duration-300 hover:bg-blue-900"
        :class="active ? 'bg-pgc text-white' : 'bg:white text-pgc hover:text-white'">
        <div class="p-10 rounded-full transition-all duration-300 group-hover:bg-white"
            :class="active ? 'bg-white' : 'bg-pgc'"></div>
        <div class="flex flex-col justify-between">
            <h3 class="text-xl lg:text-4xl font-semibold leading-12 transition-all duration-300">
                {{ title }}
            </h3>
            <p class="text-sm lg:text-lg font-medium transition-all duration-300">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
});
</script>