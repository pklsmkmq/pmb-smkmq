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
                <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">Daftar Akun Baru</h2>

                <form @submit.prevent="handleRegister">
                    <div class="mb-4">
                        <BaseInput id="fullName" label="Nama Lengkap Siswa" type="text" placeholder="Nama Lengkap Anda"
                            v-model="fullName" :required="true" />
                    </div>
                    <div class="mb-4">
                        <BaseInput id="address" label="Alamat Siswa" type="text" placeholder="Alamat Lengkap Anda"
                            v-model="address" :required="true" />
                    </div>
                    <div class="mb-4">
                        <BaseInput id="phoneNumber" label="Nomor Handphone" type="tel"
                            placeholder="Contoh: 081234567890" v-model="phoneNumber" :required="true" />
                    </div>
                    <div class="mb-4">
                        <BaseInput id="password" label="Password" type="password" placeholder="Masukkan password Anda"
                            v-model="password" :required="true" />
                    </div>
                    <div class="mb-6">
                        <BaseInput id="confirmPassword" label="Konfirmasi Password" type="password"
                            placeholder="Konfirmasi password Anda" v-model="confirmPassword" :required="true" />
                    </div>
                    <div class="flex items-center justify-between">
                        <button type="submit"
                            class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 ease-in-out w-full">
                            Daftar Sekarang
                        </button>
                    </div>
                </form>

                <p class="text-center text-gray-600 text-sm mt-8">
                    Sudah punya akun?
                    <a href="/login" class="font-bold text-blue-500 hover:text-blue-800">Login di sini</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/sub/BaseInput.vue';

const fullName = ref('');
const address = ref('');
const phoneNumber = ref('');
const password = ref('');
const confirmPassword = ref('');
const backgroundImage = ref('/assets/img/register-bg.jpg');

const handleRegister = () => {
    if (password.value !== confirmPassword.value) {
        alert('Konfirmasi password tidak cocok!');
        return;
    }
    console.log('Nama Lengkap:', fullName.value);
    console.log('Alamat:', address.value);
    console.log('Nomor HP:', phoneNumber.value);
    console.log('Password:', password.value);
    alert('Pendaftaran berhasil! (Ini hanya simulasi)');
};
</script>