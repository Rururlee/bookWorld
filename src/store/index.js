import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // 嚴格模式，開發階段建議開啟，上線時要關閉不然會耗資源
  strict:true,
  // state有getter可使用
  state: {
    header: {
      title: '這是測試vuex'
    },
    bookList: []
  },
  // mutations可直接改動state。這裡改了devtools才會變
  mutations: {
    SETLIST(state, list) { 
      state.bookList = list
    },
  },
  // 處理api，非同步的處理
  actions: {
    GETLIST(context) {
       console.log('context',context) // 可以context有很多項東西，但不要改，這邊只是看有什麼東西而已
      return axios.get('https://ruru-read.firebaseio.com/booklist.json').then(res => {
        context.commit('SETLIST', res.data)
      })


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
