<template>
  <div id="app">
    <Menu></Menu>
       <button @click="testGetVuex()">測試 取得 Vuex 實體</button>
    <!-- <h5 v-for="item in bookList" :key="item.bookId">{{ item.title }}</h5> -->
    <!-- component內容會顯示在router-view -->
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>

import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
// import { apiGetBookList } from '@/apis/book.js'


export default {
  name: 'app',
  components: {
    Menu,
    Footer,
  },
  data() {
    return {
      // bookList: null,
    }
  },
  // created() {
  //   this.axios
  //     .get('https://ruru-read.firebaseio.com/booklist.json')
  //     .then((res) => this.bookList = res.data)
  //     .catch((err) => console.log(err))
  // }
  created() {
    // apiGetBookList({}).then((res) => {
    //   console.log(res.data)
    //   this.bookList = res.data
    // })
  },
  methods: {
        testGetVuex() {
            // 透過 testGetVuex 事件 來呼叫 Vuex
            console.log(this.$store);
        }
    }
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
