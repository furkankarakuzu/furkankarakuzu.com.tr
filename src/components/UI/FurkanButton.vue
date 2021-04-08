<script>
export default {
  name: "FurkanButton",
  props: {
    color: {
      type: String,
      default: "",
    },
    weight: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "submit",
    },
  },
};
</script>

<template>
  <button
    :type="type"
    class="btn"
    @click="$emit('click')"
    :class="[color ? `btn-${color}` : '', weight ? `w-${weight}` : '']"
  >
    <slot />
  </button>
</template>
