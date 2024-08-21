<template>
  <section class="my-16">
    <h2 class="text-center text-4xl font-semibold mb-8">Education</h2>
    <div class="flex justify-between space-x-8">
      <div
        v-for="(item, index) in timeline"
        :key="index"
        class="flex items-start space-x-4 font-semibold"
      >
        <img :src="item.icon" alt="Icon" class="w-14 h-14 object-contain" />
        <div>
          <h3 class="text-lg text-gray-600 mb-2">{{ item.year }}</h3>
          <ul>
            <li v-for="detail in item.details" :key="detail" class="mb-4 text-xl">
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import polban from "../assets/polban.png";
import pasundan from "../assets/pasundan.png";

export default defineComponent({
  data() {
    return {
      timeline: [
        {
          year: "2020",
          details: ["Politeknik Negeri Bandung", "Teknik Komputer dan Informatika"],
          icon: polban,
        },
        {
          year: "2019",
          details: ["SMK Pasundan 2 Bandung", "Teknik Komputer dan Jaringan"],
          icon: pasundan,
        },
      ],
    };
  },
});
</script>
