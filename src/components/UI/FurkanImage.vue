<script>
export default {
  name: "FurkanImage",
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
    round: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: String,
      default: null,
    },
    thumbnail: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "auto",
    },
    height: {
      type: String,
      default: "auto",
    },
    bg: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <img
    :class="[
      thumbnail ? 'img-thumbnail' : 'img-fluid',
      round ? 'rounded' : '',
      rounded ? `rounded-${rounded}` : '',
      bg ? `bg-${bg}` : '',
    ]"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
  />
</template>
