<!-- component外層只能有一個div -->
<template>
  <div>
  
    <h1>皆さ、こんにちは、ここはルルの部屋。</h1>
    <!-- 如果路徑越來越長，用綁定name方式比較好 -->
    <router-link :to="{name:'ruru-info'}">info</router-link> | 
    <router-link :to="{name:'ruru-content'}">content</router-link>
    <router-view/>
  </div>
</template>
