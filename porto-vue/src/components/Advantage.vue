<template>
  <section class="my-16">
    <h2 class="text-center text-2xl font-semibold mb-8">My Advantage</h2>
    <div class="flex justify-center space-x-8">
      <div v-for="(advantage, index) in advantages" :key="index" class="text-center">
        <img
          :src="advantage.icon"
          alt="Icon"
          class="mx-auto mb-4 w-52 h-56 object-contain"
        />
        <p class="text-lg font-medium">{{ advantage.label }}</p>
        <p class="text-3xl font-semibold">{{ advantage.percentage }}</p>
      </div>
    </div>
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
