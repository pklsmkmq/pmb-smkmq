<template>
    <AdminLayout>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TestCard nama="Ahmad" status="Sudah Tes" color="bg-green-500" />
            <TestCard nama="Budi" status="Menunggu Jadwal" color="bg-yellow-500" />
            <TestCard nama="Citra" status="Belum Tes" color="bg-red-500" />
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '../layouts/AdminLayout.vue';
import TestCard from '@/components/ds/TestCard.vue';
</script>