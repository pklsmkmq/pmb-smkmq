<template>
    <div class="w-64 bg-primary text-white flex flex-col">
        <div class="p-4 text-2xl font-bold border-b border-white/20">
            Admin PMB
        </div>
        <nav class="flex-1 p-4 space-y-2">
            <RouterLink to="/" class="block px-3 py-2 rounded hover:bg-white/10">Dashboard</RouterLink>
            <RouterLink to="/pendaftaran" class="block px-3 py-2 rounded hover:bg-white/10">Pendaftaran</RouterLink>
            <RouterLink to="/jadwal-tes" class="block px-3 py-2 rounded hover:bg-white/10">Jadwal Tes</RouterLink>
            <RouterLink to="/setting" class="block px-3 py-2 rounded hover:bg-white/10">Setting</RouterLink>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>