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
    <FurkanContent
      v-if="posts.length < 1"
      class="spinner-border  position-absolute start-50 mt-2"
      role="status"
    >
    </FurkanContent>
    <FurkanRow v-else>
      <FurkanCol col="12" md="4" v-for="post in posts" :key="post.id">
        <EducationCard :post="post" />
      </FurkanCol>
    </FurkanRow>
  </FurkanContainer>
</template>
