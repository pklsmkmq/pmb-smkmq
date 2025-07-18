<template>
    <div class="relative">
        <!-- Tombol Play -->
        <img src="/assets/vidio.gif" alt="Play" class="w-50 h-50 cursor-pointer" @click="showModal = true" />

        <!-- Modal -->
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center">
            <!-- Background overlay transparan -->
            <div class="absolute inset-0" style="background-color: rgba(0, 0, 0, 0.5)" @click="closeModal"></div>
            <div class="relative bg-white w-1/2 h-[75%] rounded-lg shadow-lg p-2 flex items-center justify-center z-10">
                <iframe class="w-full h-full rounded" :src="videoUrl" frameborder="0" allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showModal = ref(false)
const videoId = 'LzGTGbr4AWA'

const videoUrl = computed(() =>
    showModal.value
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
        : ''
)

function closeModal() {
    showModal.value = false
}
</script>