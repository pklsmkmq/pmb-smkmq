<template>
    <div class="bg-[#f5f5f5] p-6 rounded-xl shadow-md h-full flex flex-col justify-between">
        <!-- Ulasan -->
        <p class="text-gray-700 italic mb-4">"{{ data.review }}"</p>
        <hr class="my-2" />

        <!-- Foto + nama + rating -->
        <div class="flex items-center gap-4 mt-4">
            <img src="/assets/img/man.png" alt="Foto Alumni" class="w-12 h-12 rounded-full object-cover" />
            <div>
                <h4 class="text-sm font-semibold text-gray-800">{{ data.name }}</h4>
                <p class="text-gray-500">{{ data.instasi }}</p>
                <div class="text-yellow-400 text-sm">
                    <span v-for="n in data.rating" :key="n">★</span>
                    <span v-for="n in 5 - data.rating" :key="'e' + n" class="text-gray-300">★</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: Object
})
</script>