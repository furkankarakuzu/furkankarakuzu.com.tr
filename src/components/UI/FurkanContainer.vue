<script>
export default {
  name: "FurkanContainer",
  props: {
    fluid: {
      type: Boolean,
      default: false,
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
    :class="[fluid ? 'container-fluid' : 'container', bg ? `bg-${bg}` : '']"
  >
    <slot />
  </FurkanContent>
</template>
