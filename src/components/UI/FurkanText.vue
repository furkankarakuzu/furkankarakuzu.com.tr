<script>
export default {
  name: "FurkanText",
  props: {
    as: {
      type: String,
      default: "p",
    },
    color: {
      type: String,
      default: "",
    },
    font: {
      type: String,
      default: "",
    },
    bg: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "left",
    },
  },
};
</script>

<template>
  <component
    :is="as"
    :class="[
      `text-${text}`,
      color ? `text-${color}` : '',
      font ? `font-weight-${font}` : '',
      bg ? `bg-${bg}` : '',
    ]"
  >
    <slot />
  </component>
</template>

<style></style>
