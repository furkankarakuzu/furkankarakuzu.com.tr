<script>
export default {
  name: "FurkanNav",
  props: {
    color: {
      type: String,
      default: null,
    },
    siteName: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <FurkanContent class="container">
    <nav class="navbar navbar-expand-lg" :class="color ? `bg-${color}` : ''">
      <a href="#" v-if="siteName">{{ siteName }}</a>
      <button
        class="navbar-toggler rounded-circle fs-1"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
      >
        <h1>{{ icon }}</h1>
      </button>

      <FurkanContent
        class="navbar-collapse justify-content-md-center collapse"
        id="navbarNavDropdown"
        style=""
      >
        <ul class="navbar-nav">
          <slot />
        </ul>
      </FurkanContent>
    </nav>
  </FurkanContent>
</template>
