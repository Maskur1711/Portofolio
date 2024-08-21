<template>
  <section class="min-h-screen flex items-center justify-center bg-white p-10">
    <div class="flex justify-between w-full max-w-6xl">
      <!-- Left Section (Text) -->
      <div class="flex flex-col space-y-6 max-w-sm">
        <div>
          <h2 class="text-sm font-semibold text-gray-500">BIOGRAPHY</h2>
          <p class="text-lg text-gray-700 mt-2">
            Hai I’m Dimas Kurniawan, an Frontend Developer
            based in Indonesia.
          </p>
        </div>
        <div>
          <h2 class="text-sm font-semibold text-gray-500">CONTACT</h2>
          <p class="text-lg text-gray-700 mt-2">
            Bandung, Indonesia<br />
            dimaskurniawan@gmail.com<br />
            +62 895 1399 0786
          </p>
        </div>
      </div>

      <!-- Center Section (Image) -->
      <div class="flex items-center justify-center relative w-80 h-80">
        <img
          src="../assets/Foto.png"
          alt="Bruno with dog"
          class="rounded-full object-cover shadow-lg"
        />
      </div>

      <!-- Right Section (Statistics) -->
      <div class="flex flex-col space-y-6 max-w-sm text-right">
        <div>
          <h2 class="text-sm font-semibold text-gray-500">YEARS OF EXPERIENCE</h2>
          <p class="text-4xl font-bold text-gray-700 mt-2">1 year</p>
        </div>
        <div>
          <h2 class="text-sm font-semibold text-gray-500">Sertifikat</h2>
          <p class="text-4xl font-bold text-gray-700 mt-2">9 Sertifikat</p>
        </div>
        <div>
          <h2 class="text-sm font-semibold text-gray-500">PROJECTS DONE</h2>
          <p class="text-4xl font-bold text-gray-700 mt-2">24 Project</p>
        </div>
      </div>
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
/* Additional styles can be added here if needed */
</style>
