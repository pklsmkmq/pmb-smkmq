<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="flex flex-col md:flex-row w-full bg-white rounded-xl shadow-2xl overflow-hidden">
            <div class="hidden md:block md:w-[60%] bg-cover bg-center bg-[url('/assets/img/bg-login.png')]">
                <div class="flex items-center justify-center h-full bg-opacity-40 p-6">
                    <p class="text-white text-center text-3xl font-bold italic">
                        "Masa depan cerah menanti mereka yang berani melangkah hari ini."
                    </p>
                </div>
            </div>

            <div class="w-full md:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
                <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">Selamat Datang Kembali!</h2>

                <form @submit.prevent="handleLogin">
                    <div class="mb-6">
                        <BaseInput id="email" label="Email" type="email" placeholder="Masukkan email Anda"
                            v-model="email" :required="true" />
                    </div>
                    <div class="mb-8">
                        <BaseInput id="password" label="Password" type="password" placeholder="Masukkan password Anda"
                            v-model="password" :required="true" />
                        <a href="#"
                            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-3">
                            Lupa Password?
                        </a>
                    </div>
                    <div class="flex items-center justify-between">
                        <button type="submit"
                            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 ease-in-out w-full">
                            Login
                        </button>
                    </div>
                </form>

                <p class="text-center text-gray-600 text-sm mt-8">
                    Belum punya akun?
                    <a href="/register" class="font-bold text-blue-500 hover:text-blue-800">Daftar Sekarang</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/sub/BaseInput.vue';

const email = ref('');
const password = ref('');
const backgroundImage = ref('/assets/img/login-bg.jpg');

const handleLogin = () => {
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    alert('Login berhasil! (Ini hanya simulasi)');
};
</script>