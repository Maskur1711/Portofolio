<template>
  <section class="my-16">
    <h2 class="text-center text-4xl font-semibold mb-8">Projects</h2>
    <div class="flex justify-between space-x-8">
      <div v-for="(project, index) in projects" :key="index" class="text-center w-1/3">
        <div class="flex items-center justify-center h-24 mb-4">
          <img :src="project.image" alt="Project Image" class="max-h-full max-w-full" />
        </div>
        <p class="font-semibold">{{ project.title }}</p>
        <p class="text-gray-600">{{ project.category }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import geotara from "../assets/geotara.png";
import LEN from "../assets/LEN.png";
import TCI from "../assets/TCI.png";

export default defineComponent({
  data() {
    return {
      projects: [
        {
          title: "Geotara",
          category: "Project Proyek Semeter 4",
          image: geotara,
        },
        {
          title: "Oil Spill Detection",
          category: "Project Tugas Akhir",
          image: LEN,
        },
        {
          title: "Human Resource Information System",
          category: "Project Magang di PT. Teknologi Cakra Internasional",
          image: TCI,
        },
      ],
    };
  },
});
</script>
