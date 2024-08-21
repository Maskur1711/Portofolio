<template>
  <div id="app" class="font-sans">
    <Nav />
    <About />
    <Skill />
    <Contact />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "./components/Nav.vue";
import About from "./views/About.vue";
import Skill from "./views/Skill.vue";

export default defineComponent({
  name: "App",
  components: {
    Nav,
    About,
    Skill,
  },
});
</script>
