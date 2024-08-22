<template>
  <section id="contact" class="h-screen flex flex-col items-center justify-center p-8">
    <h1 class="text-4xl font-bold mb-8">Contact</h1>
    <div class="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
      <!-- Contact Information -->
      <div class="flex-1">
        <div class="mb-6">
          <h2 class="text-2xl font-semibold">Call Me</h2>
          <p class="text-lg">+62 895-1399-0786</p>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold">Email Me</h2>
          <p class="text-lg">dimaskurniawan2290@gmail.com</p>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold">My Location</h2>
          <p class="text-lg">Bandung - Kota Bandung</p>
        </div>
      </div>
      <!-- Contact Form -->
      <div class="flex-1">
        <form
          @submit.prevent="sendEmail"
          ref="contactForm"
          class="bg-white p-6 rounded-lg shadow-md"
        >
          <div class="mb-4">
            <label for="name" class="block text-lg text-black font-semibold mb-2"
              >Name</label
            >
            <input
              type="text"
              v-model="form.name"
              id="name"
              class="w-full border border-gray-300 p-2 rounded text-black"
              required
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-lg text-black font-semibold mb-2"
              >Email</label
            >
            <input
              type="email"
              v-model="form.email"
              id="email"
              class="w-full border border-gray-300 p-2 rounded text-black"
              required
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-lg text-black font-semibold mb-2"
              >Message</label
            >
            <textarea
              v-model="form.message"
              id="message"
              rows="4"
              class="w-full border border-gray-300 p-2 rounded text-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-slate-700 text-white py-2 px-4 rounded hover:bg-gray-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import emailjs from "emailjs-com";

export default defineComponent({
  name: "Contact",
  setup() {
    const form = ref({
      name: "",
      email: "",
      message: "",
    });

    const sendEmail = () => {
      emailjs.sendForm("service_avxvh49", "template_ex7b2hp", "contactForm").then(
        (result) => {
          console.log("Email sent:", result);
          alert("Message sent successfully!");
          form.value.name = "";
          form.value.email = "";
          form.value.message = "";
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("An error occurred: " + error.text);
        }
      );
    };

    return {
      form,
      sendEmail,
    };
  },
});
</script>
