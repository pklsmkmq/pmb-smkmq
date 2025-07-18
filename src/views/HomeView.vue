<template>
  <HeadlineComp />
  <ProgramComp />
  <FasilitasComp />
  <PartnerComp />
  <AlumniComp />
  <PrestasiComp />

  <p class="hidden text-[#ffffff]"></p>
  <p class="hidden text-[#FECB2F]"></p>
</template>

<script setup>
import HeadlineComp from '@/components/HeadlineComp.vue';
import ProgramComp from '@/components/ProgramComp.vue';
import FasilitasComp from '@/components/FasilitasComp.vue';
import PartnerComp from '@/components/PartnerComp.vue';
import AlumniComp from '@/components/AlumniComp.vue';
import PrestasiComp from '@/components/PrestasiComp.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: "Poppins", sans-serif;
}

html {
  scroll-behavior: smooth;
}
</style>
