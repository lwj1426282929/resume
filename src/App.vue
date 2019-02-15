<template>
  <div id="app" class="page-body">
    <!--<lai-header/>-->
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  import { laiHeader } from './full-template'

  @Component({
    components: {
      laiHeader
    }
  })

  export default class Login extends Vue {
  }
</script>

<style lang="less">
  @import "style/style";

  #app {
    width: 100%;
    height: 100%;
    .page-body {
      width: 100%;
      height: 100%;
    }
  }
</style>
