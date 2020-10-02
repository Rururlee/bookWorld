import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // 嚴格模式，開發階段建議開啟，上線時要關閉不然會耗資源
  strict: true,
  // 4.透過外層觸發action，此時state才會改動 (第3步在App.vue)
  state: {
    bookList: []
  },
  // 2.將action資料送去state
  mutations: {
    SETLIST(state, list) {
      console.log('mutation run')
      state.bookList = list // 改動state的資料
    },
  },
  // 1.打api去mutations
  actions: {
    // 要去組件啟動 GETLIST (去mounted使用dispatch觸發action)
    GETLIST(context) {
      // console.log('context', context) // 可以context有很多項東西，但不要改，這邊只是看有什麼東西而已
      axios.get('https://ruru-read.firebaseio.com/booklist.json').then(res => {
        console.log('index.js SETLIST')
        context.commit('SETLIST', res.data) // 資料指派給mutation
      }).catch(err => {
        console.log(err)
      })
    }
  },
  // 5.外部透過getters取得state上的資料
  getters: {
    getBookList: state => {
      return state.bookList
    }
  },
  modules: {
  }

  // 額外補充
  // vue component也可以commit到mutations

  // 1.取api，對後端走非同步
  // vue component -> actions(這裏去讀api)，回來之後 -> mutations

  // 2.沒有對後端直接改store改資料
  // vue component -> mutations 

  // 1.讀取資料，拿後端資料
  // 直接去state -> vue component

  // 2.希望後端進來資料再做一些修改，有點像computed概念
  // state上透過getter -> vue component 


})
