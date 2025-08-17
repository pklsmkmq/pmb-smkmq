<template>
    <div class="mt-10 mx-3 lg:mx-10" id="program">
        <JudulComp title="Membangun Masa Depan Lewat Program Terpadu" subtitle="Program Unggulan SMK MadinatulQur’an"
            description="Kami bekali kamu untuk sukses kuliah dan bekerja, sambil memperdalam keimanan" />
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
        gambar1: "program/int-3.jpg",
        gambar2: "program/Ausbildung.png",
        gambar3: "program/anabuki.png",
        gambar5: "program/int-1.jpg",
        gambar6: "program/int-2.jpg",
    },
    {
        title: "Tahfidz Camp",
        program: "Tahfidz Camp",
        gambar1: "program/tahfidz-3.png",
        gambar2: "program/tahfidz-4.png",
        gambar3: "program/tahfidz-2.png",
        gambar4: "program/tahfidz-2.png",
        gambar5: "program/tahfidz.png",
        gambar6: "program/tahfidz-2.png",
    },
    {
        title: "Project Base Learning",
        program: "Project Base Learning",
        gambar1: "program/pbl-2.png",
        gambar2: "program/pbl-3.png",
        gambar3: "gambar3.jpg",
        gambar4: "gambar3.jpg",
        gambar5: "program/pbl-1.png",
        gambar6: "program/pbl-4.png",
    },
    {
        title: "English Discovery",
        program: "English Discovery",
        gambar1: "program/ed-1.jpg",
        gambar2: "ed.jpg",
        gambar3: "ed2.jpg",
        gambar4: "ed2.jpg",
        gambar5: "program/ed-2.jpg",
        gambar6: "ed3.jpg",
    },
    {
        title: "Entrepreneurship",
        program: "Entrepreneurship",
        gambar1: "program/enter-3.png",
        gambar2: "gambar4.jpg",
        gambar3: "program/enter-2.jpg",
        gambar5: "program/enter-5.png",
        gambar6: "program/enter-4.png",
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