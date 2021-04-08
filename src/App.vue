<template>
  <FurkanApp>
    <NavBar />
    <hr />
    <router-view></router-view>
    <hr class="mt-5" />
    <Footer />
  </FurkanApp>
</template>

<script>
import NavBar from "@/components/layouts/Navbar/Index.vue";
import Footer from "@/components/layouts/Footer/Index.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  created() {
    this.$store.dispatch("fetchProjects");
  },
};
</script>

<style lang="scss">
@import "./assets/css/bootstrap/scss/bootstrap.scss";
hr {
  margin: 0 !important;
}
</style>
