<template>
    <h1 class="title-style">{{ title }}</h1>
</template>

<script>
export default {
    name:'TitleComponent',
    // 1.data要用function，因為可能不用一次。所以乾脆以後都用function data
    // data(){
    //     return{
    //         title:'如如書庫'
    //     }
    // }
    // 2.讓這隻模組負責顯示資料就好，讓資料做在別地方

    // 3.從外部接資料進來用
    props:{
        title:{
            type:String,
            required:true //一定要的意思
        }
    }
}
</script>

<!-- style tag加上scoped將css render侷限在此檔 -->
<!-- scoped 配合id或class，直接配tag效能不好 -->
<!-- 使用scoped是防止其他地方或其他人或用到相同css命名 -->
<style scoped>
    h1.title-style {
        color:orange;
    }
</style>