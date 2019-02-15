<template>
  <swiper-slide>
    <div class="bg">
      <div class="bg-inner"/>
    </div>
    <div class="my-img"/>
    <div class="indrouce">
      <p>小生不才，24岁，学习前端已逾三载，2017年毕业于西南科技大学计算机科学与技术学院，爱好前端，曾习响应式、PC端、移动端等静态页面，
        亦涉猎过Angular、Vue等前端框架，闲暇之余，亦自练习微信小程序、webGIS、百度地图等开发，奈何才浅学疏，不善所习，往后code，请多指教。
      </p>
      <p>
        2017年11月入职<a href="" target="_Blank">北京力鼎创软科技有限公司</a>,主要配合后台实现前端界面效果与功能，以管理系统与移动端项目为主，包括gis、视频、评论、地图等，
        感谢<a href="" target="_Blank">北京力鼎创软科技有限公司</a>对我的培养，让我学到了很多东西。
      </p>
      <p>不气馁，不浮躁，能力棒棒哒！</p>
    </div>
  </swiper-slide>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { swiperSlide } from 'vue-awesome-swiper'

  @Component({
    components: {
      swiperSlide
    }
  })
  export default class slide2 extends Vue {
  }
</script>

<style lang="less" scoped>
  .my-img {
    position: relative;
    width: 200px;
    height: 200px;
    background: url("../../../static/img/me.jpg") center center no-repeat;
    background-size: contain;
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 20px lightseagreen;
      transform: scale(1.05);
      transition: .5s;
    }
  }

  .indrouce {
    width: 800px;
    position: relative;
    margin: 40px auto;
    p {
      text-align: justify;
      text-indent: 2em;
      line-height: 26px;
      color: #fff;
      margin: 10px auto;
      &:last-child {
        margin-top: 30px;
      }
      a {
        color: lightseagreen;
      }
    }
  }
</style>
