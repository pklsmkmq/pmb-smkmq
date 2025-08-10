<template>
    <div class="mt-10 mx-3 lg:mx-10" id="program">
        <JudulComp title="Membangun Masa Depan Lewat Program Terpadu" subtitle="Program Unggulan SMK MadinatulQur’an"
            description="Sekolah kejuruan modern yang Islami dan berstandar internasional" />
        <div class="flex lg:flex-row flex-col justify-between gap-5 my-10">
            <transition enter-active-class="transition duration-500 ease-in-out"
                enter-from-class="opacity-0 translate-y-5" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-500 ease-in-out" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-5" mode="out-in" class="w-full lg:w-1/2">
                <div v-if="filteredPrograms.length" :key="filteredPrograms[0].title">
                    <GambarComp v-bind="filteredPrograms[0]" />
                </div>
            </transition>


            <div class="w-full lg:w-1/2 flex flex-col items-end gap-5">
                <PgComp @click="setProgram('Program Internasional')" title="Program Internasional"
                    description="Program Internasional membuka peluang siswa melanjutkan studi/magang ke Jerman, Jepang, & China."
                    :active="programData === 'Program Internasional'" />

                <PgComp @click="setProgram('Tahfidz Camp')" title="Tahfidz Camp"
                    description="program intensif menghafal Al-Qur’an yang membentuk karakter siswa yang disiplin, tenang, dan berakhlak mulia"
                    :active="programData === 'Tahfidz Camp'" />

                <PgComp @click="setProgram('Project Base Learning')" title="Project Base Learning"
                    description="mengajak siswa belajar lewat proyek nyata agar siap menghadapi dunia kerja"
                    :active="programData === 'Project Base Learning'" />

                <PgComp @click="setProgram('English Discovery')" title="English Discovery"
                    description="English Discovery melatih siswa berkomunikasi dalam bahasa Inggris untuk dunia global."
                    :active="programData === 'English Discovery'" />

                <PgComp @click="setProgram('Entrepreneurship')" title="Entrepreneurship"
                    description="membentuk siswa yang mandiri, kreatif, dan siap berbisnis"
                    :active="programData === 'Entrepreneurship'" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import JudulComp from './sub/JudulComp.vue';
import PgComp from './sub/PgComp.vue';
import GambarComp from './sub/GambarComp.vue';
const galleryData = [
    {
        title: "Program Internasional",
        program: "Program Internasional",
        gambar1: "program/int-2.jpg",
        gambar2: "gambar1.jpg",
        gambar3: "gambar1.jpg",
        gambar4: "gambar1.jpg",
        gambar5: "program/int-1.jpg",
        gambar6: "gambar1.jpg",
    },
    {
        title: "Tahfidz Camp",
        program: "Tahfidz Camp",
        gambar1: "gambar2.jpg",
        gambar2: "gambar2.jpg",
        gambar3: "gambar2.jpg",
        gambar4: "gambar2.jpg",
        gambar5: "gambar2.jpg",
        gambar6: "gambar2.jpg",
    },
    {
        title: "Project Base Learning",
        program: "Project Base Learning",
        gambar1: "program/pbl-2.png",
        gambar2: "program/pbl-3.png",
        gambar3: "gambar3.jpg",
        gambar4: "gambar3.jpg",
        gambar5: "program/pbl-1.png",
        gambar6: "gambar3.jpg",
    },
    {
        title: "English Discovery",
        program: "English Discovery",
        gambar1: "program/ed-1.jpg",
        gambar2: "gambar2.jpg",
        gambar3: "gambar3.jpg",
        gambar4: "gambar4.jpg",
        gambar5: "program/ed-2.jpg",
        gambar6: "gambar6.png",
    },
    {
        title: "Entrepreneurship",
        program: "Entrepreneurship",
        gambar1: "program/enter-2.jpg",
        gambar2: "gambar4.jpg",
        gambar3: "gambar4.jpg",
        gambar4: "gambar4.jpg",
        gambar5: "gambar4.jpg",
        gambar6: "gambar4.jpg",
    }
];

const programData = ref("Program Internasional");
const setProgram = (pg) => {
    programData.value = pg;

};

const filteredPrograms = computed(() => {
    return galleryData.filter((program) => {
        return program.program === programData.value;
    });
});

onMounted(() => {
    console.log("Filtered Programs:", filteredPrograms.value);
});

</script>