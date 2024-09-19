<template>
  <div id="home" class="bg-[#393646]">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Profile Section -->
    <section
      class="relative text-center py-28 px-4 md:px-8 lg:px-20 bg-[#393646] text-white"
    >
      <div class="container mx-auto flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 text-left" data-aos="fade-right">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span class="text-white">DIMAS KURNIAWAN</span> <br />
            <span class="text-yellow-500 h-12 block" style="min-height: 48px">{{
              typedText
            }}</span>
          </h1>
          <p class="mt-4 text-gray-400 text-sm md:text-base lg:text-lg max-w-xl">
            Seorang Sarjana Terapan Teknik Komputer dan Informatika di Politeknik Negeri
            Bandung. Saya memiliki pengalaman dalam bidang Frontend Developer yang
            berpengalaman selama 2 tahun. Memiliki kemampuan kerjasama Tim, manajemen
            waktu, kreatif, mampu beradaptasi dengan lingkungan baru, dan memiliki
            komunikasi yang baik.
          </p>
          <div
            class="flex flex-col md:flex-row items-center mt-8 space-y-4 md:space-y-0 md:space-x-6"
          >
            <a :href="resumeUrl" download="resume_Dimas_Kurniawan.pdf">
              <Button variant="primary" class="rounded-xl text-base">
                <p class="text-black">My Resume</p>
              </Button>
            </a>

            <div class="flex space-x-4">
              <!-- Social Media Icons -->
              <a
                href="https://www.linkedin.com/in/maskur1711/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fab fa-linkedin text-xl md:text-2xl text-gray-400 hover:text-white"
                ></i>
              </a>
              <a
                href="https://wa.me/6289513990786"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa-brands fa-whatsapp text-xl md:text-2xl text-gray-400 hover:text-white"
                ></i>
              </a>
              <a
                href="https://www.instagram.com/maskur17_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fab fa-instagram text-xl md:text-2xl text-gray-400 hover:text-white"
                ></i>
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
            class="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg bg-gray-800"
          />
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <SkillsSection />

    <!-- About Me Section -->
    <section id="project" class="bg-gray-800 text-white py-[80px]" data-aos="fade-up">
      <div class="flex justify-center items-center">
        <h1
          class="text-center text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-yellow-500"
        >
          Project Done
        </h1>
      </div>
      <Works />
    </section>

    <section id="education" class="bg-[#393646] text-white py-10" data-aos="fade-up">
      <Education />
    </section>
    <section id="certificate" class="bg-[#393646] text-white py-10" data-aos="fade-up">
      <Certificate />
    </section>

    <section id="contact" class="bg-gray-800 text-white py-10" data-aos="fade-up">
      <Contact />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Button from "./components/Button.vue";
import SkillsSection from "./views/SkillsSection.vue";
import Works from "./views/Works.vue";
import Contact from "./views/Contact.vue";
import Education from "./views/Education.vue";
import Certificate from "./views/Certificate.vue";

// Import PDF file
import resumePdf from "./assets/MyResume.pdf";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    Button,
    SkillsSection,
    Works,
    Contact,
    Certificate,
    Education,
  },
  setup() {
    const resumeUrl = resumePdf;

    const fullText = "FRONTEND DEVELOPER";
    const typedText = ref("");
    let index = 0;
    let isDeleting = false;

    const type = () => {
      if (isDeleting) {
        if (index > 0) {
          typedText.value = fullText.slice(0, index - 1);
          index--;
        } else {
          isDeleting = false;
        }
      } else {
        if (index < fullText.length) {
          typedText.value = fullText.slice(0, index + 1);
          index++;
        } else {
          isDeleting = true;
        }
      }
    };

    onMounted(() => {
      setInterval(type, 150);
    });

    return {
      typedText,
      resumeUrl,
    };
  },
});
</script>
