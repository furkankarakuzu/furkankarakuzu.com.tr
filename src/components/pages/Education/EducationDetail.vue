<script>
export default {
  name: "PostDetail",
  computed: {
    post() {
      return this.$store.getters.getPost(this.$route.params.id);
    },
  },
  created() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>

<template>
  <FurkanContainer class="mt-2 py-4 text-center">
    <FurkanImage width="400" height="400" :src="post.image" />
    <FurkanTitle size="2" class="mt-2">{{ post.text }}</FurkanTitle>
    <FurkanText class="mt-2"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A vero
      voluptatem repellat, quod perspiciatis earum. Consectetur quasi ullam
      voluptas similique?</FurkanText
    >
  </FurkanContainer>
</template>
