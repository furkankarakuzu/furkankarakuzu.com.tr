<script>
export default {
  props: {
    text: {
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
  <FurkanContent
    class="card"
    :class="[text ? `text-${text}` : '', bg ? `bg-${bg}` : '']"
  >
    <slot />
  </FurkanContent>
</template>
