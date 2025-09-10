<template>
    <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="font-bold mb-4 text-gray-700">Sumber Informasi PMB</h2>
        <div style="height: 300px;">
            <v-chart class="h-full w-full" :option="chartOptions" autoresize />
        </div>
    </div>
</template>

<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import VChart from 'vue-echarts';
import { ref } from 'vue';

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);

const chartOptions = ref({
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['Teman', 'Website', 'Media Sosial', 'Iklan', 'Lainnya']
    },
    series: [
        {
            name: 'Sumber Info',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 80, name: 'Media Sosial' },
                { value: 65, name: 'Teman' },
                { value: 50, name: 'Website' },
                { value: 25, name: 'Iklan' },
                { value: 10, name: 'Lainnya' }
            ]
        }
    ]
});
</script>