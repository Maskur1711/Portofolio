<template>
  <nav class="flex flex-wrap items-center justify-between p-4 bg-[#393646] text-white relative">
    <div class="text-sm font-bold md:text-lg lg:text-xl">DIMAS KURNIAWAN</div>
    <div class="block lg:hidden">
      <button @click="toggleMenu" class="text-white focus:outline-none">
        <svg
          class="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
    <ul
      :class="{
        'lg:flex lg:space-x-4 lg:static': true,
        'block': menuOpen,
        'hidden': !menuOpen,
        'absolute left-0 right-0 top-full mt-1 bg-[#393646] z-10 flex flex-col items-center space-y-3 py-4': menuOpen,
      }"
    >
      <li>
        <a href="#home" class="text-xs md:text-sm lg:text-base hover:text-yellow-500">Home</a>
      </li>
      <li>
        <a href="#project" class="text-xs md:text-sm lg:text-base hover:text-yellow-500">Project</a>
      </li>
      <li>
        <a href="#education" class="text-xs md:text-sm lg:text-base hover:text-yellow-500">Education</a>
      </li>
      <li>
        <a href="#certificate" class="text-xs md:text-sm lg:text-base hover:text-yellow-500">Certificate</a>
      </li>
      <li>
        <a href="#contact" class="text-xs md:text-sm lg:text-base hover:text-gray-100 text-black bg-yellow-500 rounded-lg py-1 px-3 md:py-2 md:px-4">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Navbar",
  setup() {
    const menuOpen = ref(false);

    function toggleMenu() {
      menuOpen.value = !menuOpen.value;
    }

    return {
      menuOpen,
      toggleMenu,
    };
  },
};
</script>
