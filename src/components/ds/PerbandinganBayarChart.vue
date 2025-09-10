<template>
    <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="font-bold mb-4 text-gray-700">Pendaftar vs Pembayaran</h2>
        <div style="height: 300px;">
            <v-chart class="h-full w-full" :option="chartOptions" autoresize />
        </div>
    </div>
</template>

<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent, GridComponent } from 'echarts/components';
import VChart from 'vue-echarts';
import { ref } from 'vue';

use([CanvasRenderer, LineChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent]);

const chartOptions = ref({
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Total Pendaftar', 'Sudah Bayar']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Total Pendaftar',
            type: 'line',
            stack: 'Total',
            data: [50, 75, 120, 150, 130, 180, 230],
            itemStyle: { color: '#3B82F6' } // Biru
        },
        {
            name: 'Sudah Bayar',
            type: 'line',
            stack: 'Total',
            data: [20, 40, 60, 80, 70, 90, 100],
            itemStyle: { color: '#F59E0B' } // Kuning
        }
    ]
});
</script>