<script>
export default {
  name: "FurkanContent",
  props: {
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    bg: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div
    :class="[
      text ? `text-${text}` : '',
      color ? `text-${color}` : '',
      bg ? `bg-${bg}` : '',
    ]"
  >
    <slot />
  </div>
</template>
