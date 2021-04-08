<script>
export default {
  name: "FurkanForm",
  props: {
    action: {
      type: String,
      default: null,
    },
    method: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <form :id="id" :action="action" :method="method">
    <slot />
  </form>
</template>

<style></style>
