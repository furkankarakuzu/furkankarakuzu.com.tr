<script>
export default {
  name: "FurkanIcon",
  props: {
    icon: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: "#",
    },
  },
};
</script>

<template>
  <a :href="to" class="furkan-icon" :class="icon">
    <slot />
  </a>
</template>

<style scoped>
.fab {
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}
.fab:hover {
  opacity: 0.7;
}
.furkan-icon {
  background: #212529;
  color: white;
}
</style>
