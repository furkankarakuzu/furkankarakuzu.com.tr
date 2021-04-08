<script>
export default {
  name: "FurkanTextarea",
  props: {
    label: {
      type: String,
      default: null,
    },
    rows: {
      type: String,
      default: "3",
    },
    id: {
      type: String,
      default: null,
    },
    ariaLabel: {
      type: String,
      default: null,
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
  <FurkanContent class="form-group">
    <label :for="id">{{ label }}</label>
    <textarea
      :id="id"
      v-model="value"
      v-on:keydown="changeValue"
      class="form-control"
      :rows="rows"
      :aria-label="ariaLabel"
    ></textarea>
  </FurkanContent>
</template>
