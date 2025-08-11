<template>
    <div class="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div class="flex flex-col flex-1">
            <Navbar />
            <main class="p-6">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/ds/Sidebar.vue';
import Navbar from '@/components/ds/Navbar.vue';
</script>