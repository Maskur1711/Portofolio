<template>
  <section id="education" class="flex items-center justify-center min-h-screen">
    <div class="container mx-auto p-8">
      <div class="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <h1 class="text-5xl font-bold leading-tight mb-8">
          <span class="text-white">Education</span><br />
          <div class="text-center"><span class="text-gray-400">And</span><br /></div>
          <span class="text-yellow-500">Experience</span>
        </h1>

        <!-- Education Section -->
        <div class="flex-1 flex items-center relative">
          <!-- Vertical Line -->
          <div class="absolute left-0 top-0 bottom-0 w-1 bg-gray-300 rounded-full"></div>

          <div class="relative pl-8 pr-8">
            <h1 class="text-4xl font-bold mb-6 text-center md:text-left">EDUCATION</h1>
            <div class="border-b mb-2"></div>
            <div class="mb-8">
              <h2 class="text-2xl font-semibold">Politeknik Negeri Bandung</h2>
              <p class="text-lg text-gray-400">Teknik Komputer dan Informatika</p>
              <p class="text-md text-gray-400">2020 - 2024</p>
            </div>
            <div>
              <h2 class="text-2xl font-semibold">SMK PASUNDAN 2 Bandung</h2>
              <p class="text-lg text-gray-400">Teknik Komputer dan Jaringan</p>
              <p class="text-md text-gray-400">2017 - 2019</p>
            </div>
          </div>
        </div>

        <!-- Experience Section -->
        <div class="flex-1">
          <h1 class="text-4xl font-bold mb-6 text-center md:text-left">EXPERIENCE</h1>
          <div class="border-b mb-2"></div>
          <div>
            <h2 class="text-2xl font-semibold">
              PT. Teknologi Cakra Internasional - Bandung
            </h2>
            <p class="text-lg text-gray-400">Frontend Developer | Internship</p>
            <p class="text-md text-gray-400">Juni 2023 - September 2023</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Education",
});
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
