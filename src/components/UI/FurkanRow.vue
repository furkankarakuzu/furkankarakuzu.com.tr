<script>
export default {
  name: "FurkanRow",
  props: {
    alignStart: {
      type: Boolean,
      default: false,
    },
    alignEnd: {
      type: Boolean,
      default: false,
    },
    alignStretch: {
      type: Boolean,
      default: false,
    },
    alignCenter: {
      type: Boolean,
      default: false,
    },
    alignBaseline: {
      type: Boolean,
      default: false,
    },
    justifyStart: {
      type: Boolean,
      default: false,
    },
    justifyEnd: {
      type: Boolean,
      default: false,
    },
    justifyCenter: {
      type: Boolean,
      default: false,
    },
    justifyAround: {
      type: Boolean,
      default: false,
    },
    justifyBetween: {
      type: Boolean,
      default: false,
    },
    justifyEvenly: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <FurkanContent
    class="row"
    :class="{
      'align-items-start': alignStart,
      'align-items-end': alignEnd,
      'align-items-stretch': alignStretch,
      'align-items-center': alignCenter,
      'align-items-baseline': alignBaseline,
      'justify-content-start': justifyStart,
      'justify-content-end': justifyEnd,
      'justify-content-center': justifyCenter,
      'justify-content-around': justifyAround,
      'justify-content-between': justifyBetween,
      'justify-content-evenly': justifyEvenly,
    }"
  >
    <slot />
  </FurkanContent>
</template>
