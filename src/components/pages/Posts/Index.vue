<script>
import Post from "@/components/pages/Posts/Post";
export default {
  components: {
    Post,
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
    <FurkanContent v-else class="mt-2" v-for="post in posts" :key="post.id">
      <Post>
        <template #PostImage>
          <FurkanImage width="200" height="200" :src="post.image" />
        </template>
        <template #PostHeader>
          <RouterLink class="text-decoration-none" :to="'/post/' + post.id">
            <FurkanTitle size="6">{{ post.text }}</FurkanTitle>
          </RouterLink>
        </template>
        <template #PostBody>
          <FurkanText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            iusto eos dicta cumque provident deleniti reprehenderit ipsam saepe
            nostrum enim in consequuntur ducimus, explicabo odit facere illo
            architecto aperiam officia.
          </FurkanText>
        </template>
        <template #PostFooter>
          <FurkanText>
            <FurkanText as="i" color="muted">
              {{ post.publishDate }}
            </FurkanText>
            tarihinde oluşturuldu
          </FurkanText>
        </template>
      </Post>
    </FurkanContent>
  </FurkanContainer>
</template>
