<script>
export default {
  name: "FurkanCol",
  props: {
    offset: {
      type: String,
      default: null,
    },
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
      offset ? `offset-${offset}` : '',
      col ? `col-${col}` : '',
      sm && `col-sm-${sm}`,
      md && `col-md-${md}`,
      lg && `col-lg-${lg}`,
    ]"
  >
    <slot />
  </FurkanContent>
</template>
