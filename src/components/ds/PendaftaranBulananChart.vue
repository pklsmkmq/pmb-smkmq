<template>
    <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="font-bold mb-4 text-gray-700">Statistik Pendaftaran per Bulan</h2>
        <div style="height: 300px;">
            <v-chart class="h-full w-full" :option="chartOptions" autoresize />
        </div>
    </div>
</template>

<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent, GridComponent } from 'echarts/components';
import VChart from 'vue-echarts';
import { ref } from 'vue';

use([CanvasRenderer, BarChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent]);

const chartOptions = ref({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
        axisTick: {
            alignWithLabel: true
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Pendaftar',
            type: 'bar',
            barWidth: '60%',
            data: [50, 75, 120, 150, 130, 180, 230],
            itemStyle: {
                color: '#1E046C'
            }
        }
    ]
});
</script>