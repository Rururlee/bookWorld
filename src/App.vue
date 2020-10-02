<template>
  <div id="app">
    <Menu></Menu>
    <h5 v-for="item in getBookList" :key="item.bookId">{{ item.title }}</h5>
    <!-- component內容會顯示在router-view -->
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Menu,
    Footer,
  },
  data() {
    return {
    }
  },
  mounted() {
    // 3. 頁面讀取完成時，觸發vuex的名為GETLIST的action
    this.$store.dispatch('GETLIST')
  },
  computed: {
    getBookList(){
        return this.$store.getters.getBookList
    }
  },
  methods: {
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
