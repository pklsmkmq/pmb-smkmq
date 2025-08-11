<template>
    <AdminLayout>
        <div class="bg-white p-6 rounded-lg shadow space-y-4 max-w-md">
            <div>
                <label class="block font-semibold">Nama Admin</label>
                <input type="text" class="border p-2 w-full rounded" value="Admin PMB" />
            </div>
            <div>
                <label class="block font-semibold">Tahun Ajaran</label>
                <input type="text" class="border p-2 w-full rounded" value="2025/2026" />
            </div>
            <div>
                <label class="block font-semibold">Foto Profil</label>
                <input type="file" class="border p-2 w-full rounded" />
            </div>
            <div>
                <label class="block font-semibold">Ubah Password</label>
                <input type="password" class="border p-2 w-full rounded" />
            </div>
            <button class="bg-primary text-white px-4 py-2 rounded">Simpan</button>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '../layouts/AdminLayout.vue';
</script>