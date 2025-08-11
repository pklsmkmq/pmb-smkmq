<template>
    <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="font-bold mb-4">{{ title }}</h2>
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Chart } from 'chart.js/auto';

const props = defineProps({ title: String });
const canvas = ref(null);

onMounted(() => {
    new Chart(canvas.value, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar'],
            datasets: [{ label: 'Data', data: [10, 20, 30], backgroundColor: '#1E046C' }]
        }
    });
});
</script>