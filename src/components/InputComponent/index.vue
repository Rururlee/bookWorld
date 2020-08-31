<script>
export default {
    name:'input-component',
    props:{
        text:{
            type:String,
            required:true,
            // default:'預設內容'
        }
    },
    computed:{
        // 1.這裏處理input輸入的部分，輸入後改變畫面上的值
        // 2.然後放到template的input
        inputText:{
            get(){
                return this.text
            },
            set(val){
                // 3.然後通知外面titleText的值該改了(跟隨inputText的變動改資料)
                // 4.app.vue的inputComponent掛上並事件，事件為讓titleText(畫面上的title) = val(input輸入的值)
                // this.$emit('textChange',val)
                
                // 比上面更快的方法，app.vue也不用多寫method
                // text是上面props進來的text
                this.$emit('update:text',val)
                
            }
        }
    }
}
</script>


<!-- 代入同個資料夾在的template -->
<template src="./template.html"></template>
<style scoped src="./style.css"></style>