import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,

  // 1.render App
  render: h => h(App)
}).$mount('#app') // 2.然後mount到#app上
