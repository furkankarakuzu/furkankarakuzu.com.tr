<script>
export default {
  data(){
    return{
      navItems : [
        {name:"Giriş", to:'/'},
        {name:"Yazılar", to:'/posts'},
        {name:"Eğitim", to:'/education'},
        {name:"Projeler", to:'/projects'},
        {name:"İletişim", to:'/contact'}
      ]
    }
  }
};
</script>

<template>
  <FurkanNav icon="FK">
    <FurkanNavItem v-for="(item, index) in navItems" :key="index" :to="item.to">
      {{item.name}}
    </FurkanNavItem>
  </FurkanNav>
</template>

<style></style>
