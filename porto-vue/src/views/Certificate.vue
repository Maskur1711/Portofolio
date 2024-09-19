<template>
  <section id="certificates" class="py-20 text-white">
    <div class="container mx-auto px-8">
      <h2 class="text-5xl font-bold mb-12 text-center text-yellow-500">Certificates</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="certificate in certificates"
          :key="certificate.id"
          class="bg-[#393646] rounded-lg shadow-lg p-6"
        >
          <img
            :src="certificate.image"
            alt="Certificate Image"
            class="w-full h-auto object-cover rounded-md mb-4"
          />
          <h3 class="text-2xl font-semibold mb-2">{{ certificate.title }}</h3>
          <p class="text-gray-400">{{ certificate.institution }}</p>
          <p class="text-sm text-gray-400">{{ certificate.date }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DicodingFePemula from "../assets/Pemula.png";
import DicodingFeDasar from "../assets/Dasar.png";
import Spring from "../assets/Spring.png";
import WP from "../assets/WP.png";
import Magang from "../assets/Magang.png";
import Webinar from "../assets/Webinar.png";
import DicodingDevOps from "../assets/DevOps.png";
import DicodingJs from "../assets/JS.png";
import DicodingJava from "../assets/java.png";

export default defineComponent({
  name: "Certificates",
  data() {
    return {
      certificates: [
        {
          id: 1,
          title: "Belajar Membuat Front-end Web untuk Pemula",
          institution: "Dicoding Indonesia",
          date: "Januari 2025",
          image: DicodingFePemula,
        },
        {
          id: 2,
          title: "Belajar Dasar Pemograman Web",
          institution: "Dicoding Indonesia",
          date: "Januari 2024",
          image: DicodingFeDasar,
        },
        {
          id: 3,
          title: "Java SpringBoot",
          institution: "Arutala Lab",
          date: "Juni 2024",
          image: Spring,
        },
        {
          id: 4,
          title: "Wakil Pelaksana",
          institution: "HIMAKOM",
          date: "Juli 2022",
          image: WP,
        },
        {
          id: 5,
          title: "Frontend Developer | Internship",
          institution: "PT. Teknologi Cakra Internasional",
          date: "September 2023",
          image: Magang,
        },
        {
          id: 6,
          title: "Belajar Dasar-Dasar DevOps",
          institution: "Dicoding",
          date: "September 2024",
          image: DicodingDevOps,
        },
        {
          id: 7,
          title: "Memulai Pemrograman Dengan Java",
          institution: "Dicoding",
          date: "September 2024",
          image: DicodingJava,
        },
        {
          id: 8,
          title: "Belajar Dasar Pemrograman JavaScript",
          institution: "Dicoding",
          date: "September 2024",
          image: DicodingJs,
        },
        {
          id: 9,
          title: "Webinar Scrum Practitioner",
          institution: "Arutala",
          date: "September 2023",
          image: Webinar,
        },
      ],
    };
  },
});
</script>

<style scoped>
img {
  width: 100%;
  max-height: 300px;
  height: auto;
  object-fit: cover;
}
</style>
