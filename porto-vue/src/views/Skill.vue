<template>
  <section id="skill" class="min-h-screen flex items-center justify-center bg-gray-100">
    <div>
      <Advantage />
      <EducationExperience />
      <Projects />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Advantage from "../components/Advantage.vue";
import EducationExperience from "../components/EducationExperience.vue";
import Projects from "../components/Projects.vue";

export default defineComponent({
  components: {
    Advantage,
    EducationExperience,
    Projects,
  },
});
</script>
