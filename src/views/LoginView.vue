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

            <div class="w-full lg:w-1/2 lg:p-16 p-12 flex flex-col justify-center">
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
                            class="inline-block align-baseline font-bold text-sm text-[#1E046C] hover:text-purple-900 mt-3">
                            Lupa Password?
                        </a>
                    </div>
                    <div class="flex items-center justify-between">
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
                                Login
                            </template>
                        </button>
                    </div>
                </form>

                <p class="text-center text-gray-600 text-sm mt-8">
                    Belum punya akun?
                    <a href="/register" class="font-bold text-[#1E046C] hover:text-purple-900">Daftar Sekarang</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import Cookies from "js-cookie";
import BaseInput from "@/components/sub/BaseInput.vue";
import Swal from "sweetalert2";

const email = ref('');
const password = ref('');
const loading = ref(false);

const handleLogin = async () => {
    loading.value = true;
    try {
        const res = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/login`,
            {
                email: email.value,
                password: password.value
            }
        );

        if (res.data.status === "Success") {
            // Simpan ke localStorage
            localStorage.setItem("user_name", res.data.user.name);
            localStorage.setItem("user_email", res.data.user.email);
            localStorage.setItem("user_phone", res.data.user.phone);

            // Simpan token ke cookies (expired 7 hari)
            Cookies.set("pmbsmkmq_token", res.data.token, { expires: 7 });
            // Redirect ke halaman dashboard / login
            window.location.href = "/dashboard";
        } else {
            showError(res.data.message || "Terjadi kesalahan");
        }
    } catch (err) {
        console.error(err);
        showError("Gagal Login");
    } finally {
        loading.value = false;
    }
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


</script>