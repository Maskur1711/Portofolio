<template>
  <section class="py-10 bg-[#393646] overflow-hidden">
    <div class="container mx-auto flex justify-center">
      <div class="bg-gray-800 py-6 px-8 rounded-lg shadow-lg overflow-hidden">
        <!-- Marquee Wrapper -->
        <div class="flex space-x-8 marquee">
          <!-- Individual Logo -->
          <img src="../assets/HTML.png" alt="HTML" class="h-[80px] py-2 px-8" />
          <img src="../assets/CSS.png" alt="CSS" class="h-[80px] py-2 px-8" />
          <img src="../assets/JS.png" alt="JavaScript" class="h-[80px] py-2 px-8" />
          <img src="../assets/PINIA.png" alt="Pinia" class="h-[80px] py-2 px-8" />
          <img src="../assets/Vue.png" alt="Vue.js" class="h-[80px] py-2 px-8" />
          <img src="../assets/react.png" alt="React" class="h-[80px] py-2 px-8" />
          <img
            src="../assets/Tailwind.png"
            alt="TailwindCSS"
            class="h-[80px] py-2 px-8"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "SkillsSection",
};
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.marquee {
  animation: marquee 20s linear infinite;
  white-space: nowrap; 
}

.bg-gray-600 {
  display: flex;
  justify-content: start; 
}
</style>
