<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(projects, index) in project"
        :key="index"
        class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
      >
        <div
          class="h-56 flex items-center justify-center overflow-hidden bg-gray-100 cursor-pointer"
          @click="openPopup(projects)"
        >
          <img
            :src="projects.image"
            alt="Product Image"
            class="max-w-full max-h-full object-contain"
          />
        </div>
        <div class="p-5 flex-grow">
          <h5 class="text-xl font-semibold text-black">{{ projects.name }}</h5>
          <p class="text-gray-500 text-lg font-medium">{{ projects.price }}</p>
          <p class="text-gray-700 text-sm">
            {{ projects.description }}
          </p>
        </div>
        <div class="p-5">
          <a
            :href="projects.buttonText === 'On Going' ? '#' : projects.link"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'py-2',
              'px-4',
              'rounded-xl',
              'font-semibold',
              'w-full',
              'block',
              'text-center',
              'transition',
              'duration-200',
              projects.buttonText === 'On Going'
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gray-700 text-white hover:bg-gray-500',
            ]"
            :disabled="projects.buttonText === 'On Going'"
          >
            {{ projects.buttonText }}
          </a>
        </div>
      </div>
    </div>

    <!-- Popup Modal -->
    <div
      v-if="showPopup"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg overflow-hidden max-w-lg w-full p-6 relative">
        <button class="absolute top-2 right-2" @click="closePopup">
          <img :src="Close" alt="Close Button" class="h-6 w-6" />
        </button>
        <img
          :src="selectedImage"
          alt="Popup Image"
          class="w-full h-auto object-contain mx-auto"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import geotara from "../assets/Hero-Section.png";
import LEN from "../assets/LEN.png";
import TCI from "../assets/TCI.png";
import Sekolah from "../assets/PengelolaanSekolah.png";
import Close from "../assets/close.svg"; // Import gambar close

export default defineComponent({
  name: "Works",
  data() {
    return {
      project: [
        {
          name: "GEOTARA",
          price: "Lupakan Kerja,Mulailah Liburan",
          description:
            "Isilah hari-hari libur kamu dengan sesuatu yang membuat kamu tersenyum, tertawa, dan bersyukur.",
          image: geotara,
          link: "https://github.com/progantara/fe-geotara-portal",
          buttonText: "Click Here",
        },
        {
          name: "Oil Spill Detection",
          price: "Deteksi Tumpahan Minyak",
          description: "Deteksi Tumpahan Minyak di Laut dengan Teknologi AI.",
          image: LEN,
          link: "https://github.com/Maskur1711/Oil-Spill-Detection-Using-YOLOv8",
          buttonText: "Click Here",
        },
        {
          name: "HRIS",
          price: "Human Resource Information System",
          description:
            "Aplikasi Human Resource Information System (HRIS) yang memudahkan perusahaan dalam mengelola data karyawan.",
          image: TCI,
          link: "https://gitlab.com/hris-fe/hris",
          buttonText: "Click Here",
        },
        {
          name: "Manajemen Sekolah",
          price: "",
          description: "Aplikasi yang digunakan untuk manajemen sekolah.",
          image: Sekolah,
          link: "https://gitlab.com/hris-fe/hris",
          buttonText: "On Going",
        },
      ],
      showPopup: false,
      selectedImage: "",
      Close, // Tambahkan ini
    };
  },
  methods: {
    openPopup(project: any) {
      this.selectedImage = project.image;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
      this.selectedImage = "";
    },
  },
});
</script>

<style scoped>
.max-w-xs {
  max-width: 20rem;
}

.h-56 {
  height: 14rem;
}

.flex-grow {
  flex-grow: 1;
}

.bg-gray-100 {
  background-color: #f3f4f6;
}

.object-contain {
  object-fit: contain;
}

.max-w-full {
  max-width: 100%;
}

.max-h-full {
  max-height: 100%;
}


</style>
