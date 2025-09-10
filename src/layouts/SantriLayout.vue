<template>
    <div class="flex min-h-screen bg-gray-100">
        <SidebarSantri />
        <div class="flex flex-col flex-1 lg:ml-64">
            <main class="p-6">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
import SidebarSantri from '@/components/santri/Sidebar.vue';
</script>