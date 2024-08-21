<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
    <nav class="bg-white shadow-md">
      <div class="container mx-auto p-4 ml-3 flex justify-between items-center">
        <div class="text-xl font-bold">Dimas Kurniawan</div>
        <ul class="flex space-x-4 font-semibold text-lg">
          <li>
            <a href="#Home" id="Home" class="text-gray-800 hover:text-gray-600">Home</a>
          </li>
          <li>
            <a href="#Skill" id="Skill" class="text-gray-800 hover:text-gray-600"
              >Skills</a
            >
          </li>
          <li>
            <a href="#project" id="Project" class="text-gray-800 hover:text-gray-600"
              >Project</a
            >
          </li>
          <li>
            <a href="#Education" id="Education" class="text-gray-800 hover:text-gray-600"
              >Education</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Nav",
});
</script>
