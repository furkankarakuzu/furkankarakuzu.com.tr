<script>
export default {
  data() {
    return {
      navItems: [
        { name: "Giriş", to: "/" },
        { name: "Yazılar", to: "/posts" },
        { name: "Eğitim", to: "/education" },
        { name: "Projeler", to: "/projects" },
        { name: "İletişim", to: "/contact" },
      ],
    };
  },
};
</script>

<template>
  <FurkanNav icon="FK" iconColor="white-50">
    <FurkanNavItem v-for="(item, index) in navItems" :key="index" :to="item.to">
      <FurkanTitle size="5">{{ item.name }}</FurkanTitle>
    </FurkanNavItem>
  </FurkanNav>
</template>

<style></style>
