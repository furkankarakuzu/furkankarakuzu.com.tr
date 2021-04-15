<script>
export default {
  props: {
    post: {
      type: [Object, Array],
      default: () => [],
    },
  },
};
</script>

<template>
  <router-link
    as="div"
    class="text-decoration-none"
    :to="'/education/' + post.id"
  >
    <FurkanCard bg="transparent" class="mt-2">
      <FurkanImage :src="post.image" />
      <FurkanCardTitle>{{ post.text }}</FurkanCardTitle>
      <FurkanCardText text="white"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
        doloribus quae distinctio quidem animi! Velit veritatis sunt quo iusto
        esse!</FurkanCardText
      >
      <FurkanButton color="success">Devamını Oku</FurkanButton>
    </FurkanCard>
  </router-link>
</template>
