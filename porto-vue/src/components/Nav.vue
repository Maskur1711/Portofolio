<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-3 py-6 flex justify-between items-center">
        <div class="text-xl font-bold">Dimas Kurniawan</div>
        <ul class="flex space-x-4 font-semibold text-lg">
          <li>
            <a href="#Home" id="Home" class="text-gray-800 hover:text-gray-600">Home</a>
          </li>
          <li><a href="#About" class="text-gray-800 hover:text-gray-600">About</a></li>
          <li><a href="#Skill" class="text-gray-800 hover:text-gray-600">Skills</a></li>
          <li>
            <a href="#project" class="text-gray-800 hover:text-gray-600">Project</a>
          </li>
          <li>
            <a href="#Contact" class="text-gray-800 hover:text-gray-600">Contact</a>
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
