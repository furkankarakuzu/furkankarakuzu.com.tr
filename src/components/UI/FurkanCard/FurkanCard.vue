<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <FurkanContent class="card" :class="text ? `text-${text}` : ''">
    <slot />
  </FurkanContent>
</template>
