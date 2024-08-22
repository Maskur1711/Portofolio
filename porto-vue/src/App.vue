<template>
  <div id="home">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Profile Section -->
    <section class="relative text-center py-20 px-40 bg-[#393646] text-white">
      <div class="container mx-auto flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 text-left" data-aos="fade-right">
          <h1 class="text-5xl font-bold leading-tight">
            <span class="text-white">DIMAS KURNIAWAN</span> <br />
            <span class="text-yellow-500">FRONTEND DEVELOPER</span>
          </h1>
          <p class="mt-4 text-gray-400 max-w-xl">
            Seorang Sarjana Terapan Teknik Komputer dan Informatika di Politeknik Negeri
            Bandung dengan IPK 2.90/4.0. Saya memiliki pengalaman dalam bidang Frontend
            Developer yang berpengalaman selama 2 tahun. Memiliki kemampuan kerjasama Tim,
            manajemen waktu, kreatif, mampu beradaptasi dengan lingkungan baru, dan
            memiliki komunikasi yang baik.
          </p>
          <div class="flex items-center mt-8 space-x-6">
            <a
              href="./assets/resume_Dimas Kurniawan.pdf"
              download="Dimas_Kurniawan_Resume.pdf"
            >
              <Button variant="primary" class="rounded-xl text-base">
                <p class="text-black">My Resume</p>
              </Button>
            </a>
            <div class="flex space-x-4">
              <!-- Social Media Icons -->
              <a
                href="https://www.linkedin.com/in/maskur17/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin text-2xl text-gray-400 hover:text-white"></i>
              </a>
              <a
                href="https://wa.me/6289513990786"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa-brands fa-whatsapp text-2xl text-gray-400 hover:text-white"
                ></i>
              </a>
              <a
                href="https://www.instagram.com/maskur17_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-instagram text-2xl text-gray-400 hover:text-white"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end"
          data-aos="fade-left"
        >
          <img
            src="./assets/Foto.png"
            alt="Profile Image"
            class="w-72 h-72 rounded-full object-cover shadow-lg bg-gray-800"
          />
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <SkillsSection />

    <!-- About Me Section -->
    <section id="project" class="bg-gray-800 text-white py-10" data-aos="fade-up">
      <div class="flex justify-center items-center">
        <h1 class="text-center text-5xl font-bold leading-tight text-yellow-500">
          Project Done
        </h1>
      </div>
      <Works />
    </section>

    <section id="education" class="bg-[#393646] text-white py-10" data-aos="fade-up">
      <Education />
    </section>

    <section id="contact" class="bg-gray-800 text-white py-10" data-aos="fade-up">
      <Contact />
    </section>
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";
import Button from "./components/Button.vue";
import SkillsSection from "./views/SkillsSection.vue";
import Works from "./views/Works.vue";
import Contact from "./views/Contact.vue";
import Education from "./views/Education.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Button,
    SkillsSection,
    Works,
    Contact,
    Education,
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
