<template>
    <div class="min-h-[120vh] w-full bg-[url('/assets/img/bg.png')] bg-cover bg-center relative" id="home">
        <NavComp />

        <div
            class="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center justify-center h-[120vh] lg:h-[100vh] pt-20 pb-10 px-4 sm:px-10 md:px-20 lg:px-10">

            <div
                class="mt-8 lg:mt-0 flex flex-col gap-6 sm:gap-8 justify-center text-center lg:text-left max-w-full lg:max-w-[60rem]">
                <h1
                    class="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                    Penerimaan Murid Baru Tahun Ajaran 2026 - 2027
                </h1>
                <p
                    class="text-white text-base sm:text-lg md:text-xl lg:text-[25px] max-w-full lg:max-w-[40rem] mx-auto lg:mx-0">
                    Daftarkan dirimu sekarang dan jadilah bagian dari generasi pemimpin teknologi yang berakhlak
                </p>

                <div class="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start mt-4">
                    <button class="bg-[#FDCA2F] text-black px-4 sm:px-5 py-3 rounded-3xl h-[auto] sm:h-[40px]
                         transition-all duration-300 ease-in-out
                         ring-2 ring-[#1E046C] hover:ring-[#FDCA2F]
                         shadow-md hover:shadow-lg
                         scale-100 hover:scale-105 font-semibold cursor-pointer text-sm sm:text-base md:text-xl">
                        Dapatkan Penawaran Menarik
                    </button>
                    <button class="bg-[#edb713] text-black px-4 sm:px-5 py-3 rounded-3xl h-[auto] sm:h-[40px]
                         transition-all duration-300 ease-in-out
                         ring-2 ring-[#1E046C] hover:ring-[#FDCA2F]
                         shadow-md hover:shadow-lg
                         scale-100 hover:scale-105 font-semibold cursor-pointer text-sm sm:text-base md:text-xl">
                        Cek Program Beasiswa
                    </button>
                </div>
            </div>

            <div class="mt-8 lg:mt-0 flex-shrink-0">
                <VidioComp />
            </div>
        </div>
    </div>
</template>

<script setup>
import NavComp from './sub/NavComp.vue';
import VidioComp from './sub/VidioComp.vue';
</script>