<template>
  <nav class="flex justify-between items-center py-7 px-20 bg-[#393646] text-white">
    <div class="text-xl font-bold">DIMAS KURNIAWAN</div>
    <ul class="flex space-x-6">
      <li><a href="#home" class="hover:text-yellow-500">Home</a></li>
      <li><a href="#project" class="hover:text-yellow-500">Project</a></li>
      <li><a href="#education" class="hover:text-yellow-500">Education</a></li>
      <li><a href="#certificate" class="hover:text-yellow-500">Certificate</a></li>
      <li>
        <a
          href="#contact"
          class="hover:text-gray-100 text-black bg-yellow-500 rounded-lg py-2 px-4"
          >Contact</a
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Navbar",
};
</script>
