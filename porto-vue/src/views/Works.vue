<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
      >
        <div class="h-56 flex items-center justify-center overflow-hidden bg-gray-100">
          <img
            :src="product.image"
            alt="Product Image"
            class="max-w-full max-h-full object-contain"
          />
        </div>
        <div class="p-5 flex-grow">
          <h5 class="text-xl font-semibold text-black">{{ product.name }}</h5>
          <p class="text-gray-500 text-lg font-medium">{{ product.price }}</p>
          <p class="text-gray-700 text-sm">
            {{ product.description }}
          </p>
        </div>
        <div class="p-5">
          <a
            :href="product.link"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-gray-700 text-white py-2 px-4 rounded-xl font-semibold w-full block text-center hover:bg-gray-500 transition duration-200"
          >
            Click Here
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import geotara from "../assets/Hero-Section.png";
import LEN from "../assets/LEN.png";
import TCI from "../assets/TCI.png";

export default defineComponent({
  name: "Works",
  data() {
    return {
      products: [
        {
          name: "GEOTARA",
          price: "Lupakan Kerja,Mulailah Liburan",
          description:
            "Isilah hari-hari libur kamu dengan sesuatu yang membuat kamu tersenyum, tertawa, dan bersyukur.",
          image: geotara,
          link: "https://geotara.com", // Link yang dituju
        },
        {
          name: "Oil Spill Detection",
          price: "Deteksi Tumpahan Minyak",
          description: "Deteksi Tumpahan Minyak di Laut dengan Teknologi AI.",
          image: LEN,
          link: "https://len.com", // Link yang dituju
        },
        {
          name: "HRIS",
          price: "Human Resource Information System",
          description:
            "Aplikasi Human Resource Information System (HRIS) yang memudahkan perusahaan dalam mengelola data karyawan.",
          image: TCI,
          link: "https://tci.com", // Link yang dituju
        },
      ],
    };
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
