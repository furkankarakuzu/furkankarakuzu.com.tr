<script>
export default {
  name: "FurkanCardDetail",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <h5 class="card-title" :class="text ? `text-${text}` : ''">
    <slot />
  </h5>
</template>
