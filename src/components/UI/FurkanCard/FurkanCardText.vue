<script>
export default {
  name: "FurkanCardText",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <p class="card-text" :class="text ? `text-${text}` : ''">
    <slot />
  </p>
</template>
