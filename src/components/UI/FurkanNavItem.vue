<script>
export default {
  name: "FurkanNavItem",
  props: {
    as: {
      type: String,
      default: "router-link",
    },
    to: {
      type: String,
      default: "/",
    },
  },
};
</script>

<template>
  <li class="nav-item">
    <component :is="as" class="nav-link" :to="to">
      <slot />
    </component>
  </li>
</template>
