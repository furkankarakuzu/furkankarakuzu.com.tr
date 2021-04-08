<script>
export default {
  name: "FurkanInpute",
  props: {
    icon: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    changeValue() {
      this.$emit("input", this.value);
    },
  },
};
</script>
<template>
  <FurkanContent class="input-group">
    <FurkanContent v-if="icon" class="input-group-prepend">
      <span class="input-group-text" :class="`${icon}`"></span>
    </FurkanContent>
    <input
      v-model="value"
      v-on:keydown="changeValue"
      :type="type"
      class="form-control"
      :placeholder="placeholder"
    />
  </FurkanContent>
</template>

<style></style>
