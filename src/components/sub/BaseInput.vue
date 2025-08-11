<template>
    <div>
        <label v-if="label" :for="id" class="block text-gray-700 text-sm font-bold mb-2">
            {{ label }}
        </label>
        <input :type="type" :id="id" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="placeholder" :required="required"
            class="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1E046C] focus:border-transparent" />
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    label: {
        type: String,
        default: '',
    },
    id: {
        type: String,
        required: true, // ID harus unik untuk setiap input
    },
    type: {
        type: String,
        default: 'text',
    },
    modelValue: { // Untuk V-model
        type: [String, Number],
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    required: {
        type: Boolean,
        default: false,
    },
});

defineEmits(['update:modelValue']); // Mendefinisikan event untuk v-model
</script>

<style scoped>
/* Anda bisa menambahkan gaya kustom di sini jika ada yang tidak tercakup oleh Tailwind */
</style>