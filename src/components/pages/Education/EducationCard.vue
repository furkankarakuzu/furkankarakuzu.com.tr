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
  <FurkanCard bg="transparent" class="mt-2">
    <FurkanImage :src="post.image" />
    <FurkanCardTitle>{{ post.text }}</FurkanCardTitle>
    <FurkanCardText
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
      doloribus quae distinctio quidem animi! Velit veritatis sunt quo iusto
      esse!</FurkanCardText
    >
    <FurkanButton color="success">Devamını Oku</FurkanButton>
  </FurkanCard>
</template>
