<template>
  <div class="header">
    <h1><a href="javascript:;">Laiwj Bolg</a></h1>
    <nav>
      <li v-for="(nav, index) in navList" :key="index">{{nav.title}}</li>
    </nav>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class laiHeader extends Vue {
    navList = [
      {
        title: '首页',
        name: 'home',
        href: '/',
        icon: 'home'
      },
      {
        title: '个人博客',
        name: 'blog',
        href: '/blog',
        icon: 'blog'
      }
    ]
  }
</script>

<style lang="less" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 90%;
    height: 60px;
    margin: 0 auto;
    border: 1px solid;
    z-index: 9999;
  }
</style>
