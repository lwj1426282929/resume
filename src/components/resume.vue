<template>
  <div class="resume-page">
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class resume extends Vue {
  }
</script>

<style lang="less" scoped>
  .resume-page {
    margin: 80px auto;
    width: 700px;
    min-height: 900px;
    padding: 30px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06);
    border-top: 20px solid;
    box-sizing: border-box;
  }
</style>
