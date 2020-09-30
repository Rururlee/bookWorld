
## 開始我的vue-cli project
    1.可打指令或使用vue ui > cmd輸入vue ui
    2.ui上新增刪除修改專案，或編輯專案插件、依賴等設定
    3.vuex或vue-router可從ui建立專檔
    4.App.vue是最外層，這個檔集合各種component

## 資料夾介紹
    * src:開發時編輯的檔案
    * public:上線時的檔案
    * build:開發好了去編譯並壓縮，可放server給後端用了。整包可放在server上。

## component不一定要做單檔.vue，也可拉一個資料夾
    * 資料夾內分別放：index.vue / template.html / style.css等
    * index.vue 內寫程式
    * component外層只能有一個div

## vue-router
    * 希望有網址的切換，交給router
    * 換頁為了能做動態過場效果或省一些讀取的時間
    * router/index.js，定義網頁有哪些路徑

## mode:'history'
    * 這種模式還需要後台配置支持。因為我們的應用是個單頁客戶端應用，如果後台沒有正確的配置，當用戶在瀏覽器直接訪問http://oursite.com/user/id就會返回404
    * 官方文件也後端配置方法

## mounted上自製事件，在beforeDestroy要移除掉
    * 這種自製事件->document.addEventListener('click',abc)，
    如果是v-on這種事件，vue會自動幫我們在beforeDestroy時移除
    * document.removeEventListener('click',abc)

## vuex
![Vuex](vuex.png)

### state
    * 相當於*data*
    * 儲存狀態

### actions
    除了更新state資料，處理其他所有事情的*method*
    * 組件需要更動狀態時，需要透過actions發出一個commit去呼叫mutations
    * actions不能直接修改state，只有mutations可以更改state
    * 可作非同步的操作
    * 可以用 context.dispatch 來呼叫另外一個 actions
    * actions裡面可以commit多個mutations，也可以dispatch多個actions

### mutations
    * 收到actions的資料，去更動state的狀態，mutate本身單字的意思是就是「變異」，如其名就是拿來變動state用的
    * 如果mutations要做更改，不可以變動在State還沒定義的data
    *  只能做同步的操作

### getters
    * 可以把state處理過後再丟出去
    * 可以認為是store的計算屬性
    * 如果有多處使用到相同的計算，那直接在getters裡寫，再丟出去給組件用