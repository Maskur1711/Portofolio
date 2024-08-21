<template>
  <section id="Home" class="min-h-screen flex items-center justify-center bg-white p-10">
    <div class="flex justify-between w-full max-w-6xl">
      <!-- Left Section (Text) -->
      <transition name="fade-up">
        <div class="flex flex-col space-y-6 max-w-sm">
          <div>
            <h2 class="text-sm font-semibold text-black text-[20px]">BIOGRAPHY</h2>
            <p class="text-xl text-gray-700 mt-2">
              Hai I’m Dimas Kurniawan, a Frontend Developer based in Indonesia.
            </p>
          </div>
          <div>
            <h2 class="text-sm font-semibold text-black text-[20px]">CONTACT</h2>
            <p class="text-xl text-gray-700 mt-2">
              Bandung, Indonesia<br />
              dimaskurniawan@gmail.com<br />
              +62 895 1399 0786
            </p>
          </div>
        </div>
      </transition>

      <!-- Center Section (Image) -->
      <transition name="image-load">
        <div class="flex items-center justify-center relative w-80 h-80">
          <img
            :src="Image"
            alt="Bruno with dog"
            class="rounded-full object-cover shadow-lg image-animate"
          />
        </div>
      </transition>

      <!-- Right Section (Statistics) -->
      <transition name="fade-up">
        <div class="flex flex-col space-y-6 max-w-sm text-right">
          <div>
            <h2 class="text-sm font-semibold text-black text-[20px]">
              YEARS OF EXPERIENCE
            </h2>
            <p class="text-xl text-gray-700 mt-2">1 year</p>
          </div>
          <div>
            <h2 class="text-sm font-semibold text-black text-[20px]">Sertifikat</h2>
            <p class="text-xl text-gray-700 mt-2">9 Sertifikat</p>
          </div>
          <div>
            <h2 class="text-sm font-semibold text-black text-[20px]">PROJECTS DONE</h2>
            <p class="text-xl text-gray-700 mt-2">24 Project</p>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Image from "../assets/Foto.png"; // Path to the image file

export default defineComponent({
  name: "AboutMe",
  data() {
    return {
      Image,
    };
  },
});
</script>

<style scoped>
/* Fade-up animation for text sections */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 1s, transform 1s;
}
.fade-up-enter, .fade-up-leave-to /* .fade-up-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(20px);
}

/* Image load animation */
.image-load-enter-active {
  animation: rotate-in 1s ease-out forwards;
}

/* Image hover effect */
.image-animate {
  transition: transform 0.3s ease;
}
.image-animate:hover {
  transform: scale(1.1);
}

/* Keyframes for image rotation */
@keyframes rotate-in {
  from {
    transform: rotate(-10deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
</style>
