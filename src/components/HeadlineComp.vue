<template>
    <div class="min-h-[120vh] w-full bg-[url('/assets/img/bg.png')] bg-cover bg-center">
        <NavComp />
        <div class="mt-3 h-[70vh] flex flex-col gap-3 justify-center mx-4">
            <h1 class="text-white font-bold text-[55px] w-[60rem]">Penerimaan Murid Baru Tahun Ajaran 2026 - 2027</h1>
            <p class="text-white text-[25px] w-[40rem]">Daftarkan dirimu sekarang dan jadilah bagian dari generasi
                pemimpin
                teknologi yang berakhlak</p>
            <div class="flex gap-5">
                <button class="bg-[#FDCA2F] text-black px-5 rounded-3xl h-[40px] 
         transition-all duration-300 ease-in-out 
         ring-2 ring-[#1E046C] hover:ring-[#FDCA2F] 
         shadow-md hover:shadow-lg 
         scale-100 hover:scale-105 font-semibold cursor-pointer">
                    Dapatkan Diskon 30%
                </button>
                <button class="bg-[#edb713] text-black px-5 rounded-3xl h-[40px] 
         transition-all duration-300 ease-in-out 
         ring-2 ring-[#1E046C] hover:ring-[#FDCA2F] 
         shadow-md hover:shadow-lg 
         scale-100 hover:scale-105 font-semibold cursor-pointer">
                    Cek Program Beasiswa
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavComp from './sub/NavComp.vue';
</script>