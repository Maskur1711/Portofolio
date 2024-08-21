<template>
  <section class="my-16">
    <h2 class="text-center text-2xl font-semibold mb-8">My Latest Projects</h2>
    <div class="flex justify-between space-x-8">
      <div v-for="(project, index) in projects" :key="index" class="text-center">
        <img :src="project.image" alt="Project Image" class="mx-auto mb-4" />
        <p class="font-semibold">{{ project.title }}</p>
        <p class="text-gray-600">{{ project.category }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      projects: [
        {
          title: "Liarch Architecture Firm",
          category: "UI/UX",
          image: "/path-to-image1.png",
        },
        // Tambahkan data proyek lainnya
      ],
    };
  },
});
</script>