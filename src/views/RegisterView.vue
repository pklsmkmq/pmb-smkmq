<template>
    <div class="h-screen flex items-center justify-center">
        <div class="flex flex-col md:flex-row w-full h-screen bg-white rounded-xl overflow-hidden">
            <div class="hidden lg:block md:w-[60%] bg-cover bg-right bg-[url('/assets/img/bg-login.png')]">
                <div class="flex items-center justify-center h-full bg-opacity-40 p-10">
                    <p class="text-white text-center text-3xl font-bold italic">
                        "Masa depan cerah menanti mereka yang berani melangkah hari ini."
                    </p>
                </div>
            </div>

            <div class="w-full lg:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
                <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
                    Daftar Akun Baru
                </h2>

                <form @submit.prevent="handleRegister">
                    <div class="mb-4">
                        <BaseInput id="fullName" label="Nama Lengkap Siswa" placeholder="Nama Lengkap Anda"
                            v-model="fullName" required />
                    </div>
                    <div class="mb-4">
                        <BaseInput id="email" label="Alamat Email" placeholder="Alamat email Anda" v-model="email"
                            required />
                    </div>
                    <div class="mb-4">
                        <BaseInput id="phoneNumber" label="Nomor Handphone" type="tel"
                            placeholder="Contoh: 081234567890" v-model="phoneNumber" required />
                    </div>
                    <div class="mb-4">
                        <BaseInput id="password" label="Password" type="password" placeholder="Masukkan password Anda"
                            v-model="password" required />
                    </div>
                    <div class="mb-4">
                        <BaseInput id="confirmPassword" label="Konfirmasi Password" type="password"
                            placeholder="Konfirmasi password Anda" v-model="confirmPassword" required />
                    </div>

                    <div class="mb-6">
                        <label for="information" class="block text-gray-700 text-sm font-bold mb-2">
                            Informasi PMB ini didapat dari
                        </label>
                        <div class="relative">
                            <select id="information" v-model="information" required
                                class="shadow appearance-none border rounded-lg w-full py-3 px-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1E046C] focus:border-transparent">
                                <option value="teman">Teman</option>
                                <option value="website">Website</option>
                                <option value="sosmed">Media Sosial</option>
                                <option value="iklan">Iklan</option>
                                <option value="lainnya">Lainnya</option>
                            </select>
                            <svg class="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>


                    <div>
                        <button :disabled="loading" type="submit"
                            class="flex items-center justify-center px-4 py-2 rounded-lg text-white bg-[#1E046C] hover:bg-purple-900 disabled:opacity-60 disabled:cursor-not-allowed w-full font-bold tracking-widest">
                            <template v-if="loading">
                                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z">
                                    </path>
                                </svg>
                            </template>
                            <template v-else>
                                Daftar Sekarang
                            </template>
                        </button>
                    </div>
                </form>

                <p class="text-center text-gray-600 text-sm mt-8">
                    Sudah punya akun?
                    <RouterLink to="/login" class="font-bold text-[#1E046C] hover:text-purple-900">
                        Login di sini
                    </RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import BaseInput from "@/components/sub/BaseInput.vue";
import Swal from "sweetalert2";

const fullName = ref("");
const email = ref("");
const phoneNumber = ref("");
const password = ref("");
const confirmPassword = ref("");
const information = ref("teman"); // default teman
const loading = ref(false);

const showSuccess = (message) => {
    Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: message,
        confirmButtonText: 'OK',
        confirmButtonColor: '#1E046C',
        customClass: {
            title: 'text-xl',
            popup: 'rounded-lg'
        }
    }).then(() => {
        window.location.href = "/login";
    });
};

const showError = (message) => {
    Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: message,
        confirmButtonText: 'Coba Lagi',
        confirmButtonColor: '#d33',
        customClass: {
            title: 'text-xl',
            popup: 'rounded-lg'
        }
    });
};

const handleRegister = async () => {
    loading.value = true;
    if (password.value !== confirmPassword.value) {
        showError("Konfirmasi password tidak cocok!");
        loading.value = false;
        return;
    }

    try {
        const res = await axios.post(
            `${import.meta.env.VITE_LOCAL_URL}/auth/register`,
            {
                namaSantri: fullName.value,
                email: email.value,
                nomorHandphone: phoneNumber.value,
                password: password.value,
                konfirmasiPassword: confirmPassword.value,
                infoPendaftaran: information.value
            }
        );

        // Jika request berhasil (tidak masuk ke `catch`), langsung tampilkan pesan sukses
        showSuccess(res.data.message);

    } catch (err) {
        // Jika terjadi error, tampilkan pesan error dari backend
        console.error(err);
        const errorMessage = err.response?.data?.message || "Gagal mendaftar! Terjadi kesalahan pada server.";
        showError(errorMessage);
    } finally {
        loading.value = false;
    }
};
</script>


<style scoped>
* {
    font-family: "Poppins", sans-serif;
}
</style>