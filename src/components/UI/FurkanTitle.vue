<script>
export default {
  name: "FurkanTitle",
  props: {
    size: {
      type: String,
      default: "1",
    },
    text: {
      type: String,
      default: "left",
    },
    weight: {
      type: String,
      default: "normal",
    },
    bg: {
      type: String,
      default: "",
    },
    rounded: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <h2
    :class="[
      `fs-${size} text-${text} font-weight-${weight}`,
      bg ? `bg-${bg}` : '',
      rounded ? `rounded-${rounded}` : '',
    ]"
  >
    <slot />
  </h2>
</template>

<style></style>
