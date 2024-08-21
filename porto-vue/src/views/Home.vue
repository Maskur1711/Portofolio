<template>
  <section
    id="Home"
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-4"
    :style="{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'rgba(234, 234, 234, 0.8)',
    }"
  >
    <h1 class="text-4xl font-bold text-[50px] text-black">Dimas Kurniawan</h1>
    <h1 class="text-4xl font-semibold text-black">Front End Developer</h1>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Background from "../assets/background.svg";

export default defineComponent({
  name: "Home",
  setup() {
    const background = Background;
    return {
      background,
    };
  },
});
</script>
