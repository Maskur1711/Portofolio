<template>
  <section class="flex flex-col items-center justify-center min-h-screen border-b-2">
    <h2 class="text-center text-4xl font-semibold mb-8">Skill</h2>
    <div class="flex justify-center space-x-56 mt-12">
      <div v-for="(advantage, index) in advantages" :key="index" class="text-center">
        <img
          :src="advantage.icon"
          alt="Icon"
          class="mx-auto mb-4 w-40 h-36 object-contain filter grayscale hover:grayscale-0 hover:brightness-110 hover:scale-110 transition-all duration-300"
        />
        <p class="text-lg font-medium">{{ advantage.label }}</p>
        <p class="text-3xl font-semibold">{{ advantage.percentage }}</p>
      </div>
    </div>
    <div class="border-t-2"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FigmaIcon from "../assets/Figma.png";
import VueIcon from "../assets/Vue.png";
import TailwindIcon from "../assets/Tailwind.png";
import ReactIcon from "../assets/React.png";

export default defineComponent({
  data() {
    return {
      advantages: [
        { label: "Figma", percentage: "90%", icon: FigmaIcon },
        { label: "VueJS", percentage: "95%", icon: VueIcon },
        { label: "Tailwind", percentage: "95%", icon: TailwindIcon },
        { label: "React JS", percentage: "95%", icon: ReactIcon },
      ],
    };
  },
});
</script>
