<script>
export default {
  name: "FurkanCol",
  props: {
    col: {
      type: [String, Number],
      default: null,
    },
    sm: {
      type: [String, Number],
      default: null,
    },
    md: {
      type: [String, Number],
      default: null,
    },
    lg: {
      type: [String, Number],
      default: null,
    },
  },
};
</script>

<template>
  <FurkanContent
    :class="[
      col ? `col-${col}` : '',
      sm && `col-sm-${sm}`,
      md && `col-md-${md}`,
      lg && `col-lg-${lg}`,
    ]"
  >
    <slot />
  </FurkanContent>
</template>
