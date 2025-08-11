<template>
    <AdminLayout>
        <div class="bg-white p-4 rounded-lg shadow">
            <h2 class="font-bold mb-4">Data Pendaftar</h2>
            <DataTable />
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '../layouts/AdminLayout.vue';
import DataTable from '@/components/ds/DataTable.vue';
</script>