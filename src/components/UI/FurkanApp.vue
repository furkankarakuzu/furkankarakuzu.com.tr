<script>
export default {
  name: "FurkanApp",
  props: {
    color: {
      type: String,
      default: "null",
    },
  },
};
</script>

<template>
  <FurkanContent
    class="furkan-app"
    :class="color ? `bg-${color} text-white` : ''"
  >
    <slot />
  </FurkanContent>
</template>

<style scoped>
.furkan-app {
  height: 100vh;
}
</style>
