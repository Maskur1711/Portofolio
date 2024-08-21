<template>
  <section class="my-16">
    <h2 class="text-center text-2xl font-semibold mb-8">Education & Experience</h2>
    <div class="flex justify-between space-x-8">
      <div v-for="(item, index) in timeline" :key="index">
        <h3 class="text-sm text-gray-600 mb-2">{{ item.year }}</h3>
        <ul>
          <li v-for="detail in item.details" :key="detail" class="mb-4">{{ detail }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      timeline: [
        {
          year: "2014",
          details: ["Bachelor Degree of Design", "UI/UX Design Certificate"],
        },
        // Tambahkan data pengalaman lainnya
      ],
    };
  },
});
</script>
