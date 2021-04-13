<script>
import EducationCard from "./EducationCard";
export default {
  components: {
    EducationCard,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  created() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>
<template>
  <FurkanContainer>
    <FurkanRow>
      <FurkanCol col="12" md="4" v-for="post in posts" :key="post.id">
        <EducationCard :post="post" />
      </FurkanCol>
    </FurkanRow>
  </FurkanContainer>
</template>
