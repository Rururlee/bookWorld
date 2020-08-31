<template>
  <div class="home">
    <HelloWorld msg="從零開始的書世界生活"/>
    <img src="../assets/images/cover.jpg" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import "../assets/sass/main.scss";

</style>