<template>
  <button :class="computedClasses" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    computedClasses() {
      return this.variant === "primary"
        ? "bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        : "bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded";
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
});
</script>