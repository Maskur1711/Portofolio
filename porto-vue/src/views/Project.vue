<template>
  <section id="project" class="min-h-screen flex items-center justify-center bg-white">
    <div class="text-center">
      <h2 class="text-3xl font-bold">My Projects</h2>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-gray-200 rounded-md">Project 1</div>
        <div class="p-4 bg-gray-200 rounded-md">Project 2</div>
        <div class="p-4 bg-gray-200 rounded-md">Project 3</div>
        <div class="p-4 bg-gray-200 rounded-md">Project 4</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Project",
});
</script>

<style scoped>
/* Tambahkan CSS khusus jika diperlukan */
</style>
