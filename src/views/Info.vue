<!-- component外層只能有一個div -->
<template>
  <div style="padding:1rem;border:1px solid  #777;border-radius:1rem;width:300px;margin:auto">
    <p>全て読んだ本がここだ！</p>
    <p>どうぞご覧でください٩(˃̶͈̀௰˂̶͈́)و</p>
  </div>
</template>

<script>
export default {
  // 將api讀進來
  computed: {
    day() {
      return this.$store.state.day;
    },
    header() {
      return this.$store.state.header;
    },
    list() {
      return this.$store.state.list;
    },
  },
  mounted() {
    let day = 123;
    this.$store.dispatch("GETLIST", day);
  },
};
</script>