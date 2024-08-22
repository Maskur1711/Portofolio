<template>
  <nav
    class="fixed top-0 left-0 w-full flex flex-wrap items-center justify-between p-4 bg-[#393646] text-white z-50 text-[14px] shadow-md"
  >
    <div class="text-sm font-bold md:text-lg lg:text-xl underline">DIMAS KURNIAWAN</div>
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
        block: menuOpen,
        hidden: !menuOpen,
        'absolute left-0 right-0 top-full mt-1 bg-[#393646] z-10 flex flex-col items-center space-y-3 py-4': menuOpen,
      }"
    >
      <li>
        <a
          @click.prevent="scrollToSection('#home')"
          class="text-xs md:text-sm lg:text-base hover:text-yellow-500 hover:cursor-pointer"
          >Home</a
        >
      </li>
      <li>
        <a
          @click.prevent="scrollToSection('#project')"
          class="text-xs md:text-sm lg:text-base hover:text-yellow-500 hover:cursor-pointer"
          >Project</a
        >
      </li>
      <li>
        <a
          @click.prevent="scrollToSection('#education')"
          class="text-xs md:text-sm lg:text-base hover:text-yellow-500 hover:cursor-pointer"
          >Education</a
        >
      </li>
      <li>
        <a
          @click.prevent="scrollToSection('#certificate')"
          class="text-xs md:text-sm lg:text-base hover:text-yellow-500 hover:cursor-pointer"
          >Certificate</a
        >
      </li>
      <li>
        <a
          @click.prevent="scrollToSection('#contact')"
          class="text-xs md:text-sm lg:text-base hover:text-gray-100 text-black bg-yellow-500 rounded-lg py-1 px-3 md:py-2 md:px-4 hover:cursor-pointer"
          >Contact</a
        >
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

    function scrollToSection(sectionId: string) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      if (menuOpen.value) {
        menuOpen.value = false;
      }
    }

    return {
      menuOpen,
      toggleMenu,
      scrollToSection,
    };
  },
};
</script>
