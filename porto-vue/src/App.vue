<template>
  <div id="app" class="font-sans">
    <Nav />
    <Home />
    <About />
    <Skill />
    <Project />
    <Contact />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "./components/Nav.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Skill from "./views/Skill.vue";
import Project from "./views/Project.vue";
import Contact from "./views/Contact.vue";

export default defineComponent({
  name: "App",
  components: {
    Nav,
    Home,
    About,
    Skill,
    Project,
    Contact,
  },
});
</script>

<style>
/* Global CSS */
</style>
