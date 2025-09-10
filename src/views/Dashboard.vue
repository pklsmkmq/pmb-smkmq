<template>
    <AdminLayout>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard title="Total Pendaftar" :value="230" color="bg-blue-500" />
            <StatCard title="Sudah Tes" :value="150" color="bg-green-500" />
            <StatCard title="Sudah Bayar" :value="100" color="bg-yellow-500" />
            <StatCard title="Belum Tes" :value="80" color="bg-red-500" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PendaftaranBulananChart />

            <PerbandinganBayarChart />

            <div class="lg:col-span-2">
                <SumberInformasiChart />
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '../layouts/AdminLayout.vue';
import StatCard from '@/components/ds/StatCard.vue';
import PendaftaranBulananChart from '@/components/ds/PendaftaranBulananChart.vue';
import PerbandinganBayarChart from '@/components/ds/PerbandinganBayarChart.vue';
import SumberInformasiChart from '@/components/ds/SumberInformasiChart.vue';
</script>