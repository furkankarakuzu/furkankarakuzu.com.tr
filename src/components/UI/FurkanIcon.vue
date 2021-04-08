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
  <a :href="to" :class="icon">
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
.fa-twitter {
  background: #55acee;
  color: white;
}
.fa-github {
  background: #125688;
  color: white;
}
.fa-linkedin {
  background: #007bb5;
  color: white;
}
.fa-youtube {
  background: #bb0000;
  color: white;
}
</style>
