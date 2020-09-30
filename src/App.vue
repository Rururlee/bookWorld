<template>
  <div id="app">
    <Menu></Menu>
    <h5 v-for="item in stateData" :key="item.bookId">{{ item.title }}</h5>
    <button @click="getStateData()">測試 取得 Vuex 實體</button>
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
      bookList: null,
    }
  },
  mounted() {
    // 1.  頁面讀取完成時，吃 booklist API
    this.$store.dispatch('GETLIST')
  },
  computed: {
    stateData() {
      // console.log('this.$store.state.bookList', this.$store.state.bookList)
      return this.$store.state.bookList
    },
  },
  methods: {
    getStateData() {
      console.log('app.vue SETLIST')
      this.$store.commit('SETLIST')
      this.$store.dispatch('GETLIST')
    },
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
