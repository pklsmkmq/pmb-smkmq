<template>
  <HeadlineComp />
  <ProgramComp />
  <FasilitasComp />
  <PartnerComp />
  <AlumniComp />
  <PrestasiComp />
  <BiayaComp />
  <ContactComp map-description="Temukan kami di pusat kota." :social-media="[
    { name: 'Facebook', url: 'https://www.facebook.com/smkmadinatulquran', icon: 'fab fa-facebook' },
    { name: 'Instagtam', url: 'https://www.instagram.com/smkmadinatulquran/', icon: 'fab fa-instagram' },
    { name: 'Youtube', url: 'https://www.youtube.com/channel/UCLQ2_4V-t11pUG0pATDXK6g', icon: 'fab fa-youtube' },
    { name: 'Tiktok', url: 'https://www.tiktok.com/@smk.madinatulquran', icon: 'fab fa-tiktok                                               ' },
  ]" whatsapp-number1="081533330457" whatsapp-label1="CS PMB" whatsapp-number2="08126900457" whatsapp-label2="Hotline"
    card-bg-color="#FCE7F3" title-color="#9D174D" text-color="#881337" social-icon-bg="#E11D48"
    social-icon-color="#FCE7F3" whatsapp-button-bg="#FB7185" whatsapp-button-text="#FFFFFF" />
  <div class="text-center py-4 bg-[#1E046C]">
    <p class="text-white font-semibold text-base">&copy; IT Corps SMK Madinatulquran 2025</p>
  </div>

  <div class="fixed bottom-2 right-5 z-50" @click="wa">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"
      alt="whatsapp" class="h-16 w-16 cursor-pointer">
  </div>

  <p class="hidden text-[#ffffff] border-white"></p>
  <p class="hidden text-[#FECB2F] border-[#FECB2F]"></p>
  <p class="hidden border-[#cdcfd4]"></p>
</template>

<script setup>
import HeadlineComp from '@/components/HeadlineComp.vue';
import ProgramComp from '@/components/ProgramComp.vue';
import FasilitasComp from '@/components/FasilitasComp.vue';
import PartnerComp from '@/components/PartnerComp.vue';
import AlumniComp from '@/components/AlumniComp.vue';
import PrestasiComp from '@/components/PrestasiComp.vue';
import BiayaComp from '@/components/BiayaComp.vue';
import ContactComp from '@/components/ContactComp.vue';

const wa = () => {
  window.location.href = "https://wa.me/6281533330457"
}
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
