<template>
    <div class="group w-[95%] border-2 border-[#092D5C] rounded-2xl p-2 flex items-center gap-5 transition-all duration-300 hover:bg-[#0A3E7A]"
        :class="active ? 'bg-[#092D5C] text-white' : 'bg:white text-[#092D5C] hover:text-white'">
        <div class="p-10 rounded-full transition-all duration-300 group-hover:bg-white"
            :class="active ? 'bg-white' : 'bg-[#092D5C]'"></div>
        <div class="flex flex-col justify-between">
            <h3 class="text-[40px] font-semibold leading-12 transition-all duration-300">
                {{ title }}
            </h3>
            <p class="text-[20px] font-medium transition-all duration-300">
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