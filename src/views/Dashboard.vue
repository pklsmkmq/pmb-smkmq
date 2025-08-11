<template>
    <AdminLayout>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <StatCard title="Total Pendaftar" :value="230" color="bg-blue-500" />
            <StatCard title="Sudah Tes" :value="150" color="bg-green-500" />
            <StatCard title="Sudah Bayar" :value="100" color="bg-yellow-500" />
            <StatCard title="Belum Tes" :value="80" color="bg-red-500" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ChartCard title="Statistik Pendaftaran" />
            <ChartCard title="Status Pembayaran" />
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '../layouts/AdminLayout.vue';
import StatCard from '@/components/ds/StatCard.vue';
import ChartCard from '@/components/ds/ChartCard.vue';
</script>