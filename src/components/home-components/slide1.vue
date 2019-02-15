<template>
  <swiper-slide>
    <div class="bg"/>
    <div class="introduce"
         ref="introduce"
         @mousemove="onMousemove($event)"
         @mouseleave="onMouseleave($event)">
      <h2>Hello, I'm Laiwj</h2>
      <h3>The directionary is the only place where success comes before work</h3>
      <p class="name">我叫赖维健</p>
      <p class="job">一名前端开发工程师</p>
      <p class="email">1426282929@qq.com</p>
      <div class="my-contact"></div>
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
  export default class slide1 extends Vue {
    showLoading = true

    onMousemove (e) {
      this.$refs.introduce.style.left = -3 * e.movementX + 'px'
      this.$refs.introduce.style.top = -3 * e.movementY + 'px'
    }

    onMouseleave (e) {
      this.$refs.introduce.style.left = 0
      this.$refs.introduce.style.top = 0
      this.$refs.introduce.style.transform = 'scale(1)'
      this.$refs.introduce.style.transition = '.4s'
    }
  }
</script>

<style lang="less" scoped>
  .introduce {
    width: 60%;
    height: 300px;
    border-radius: 15px;
    margin: auto;
    color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    &:hover {
      box-shadow: 0 0 80px #000;
      transform: scale(1.05);
      transition: .4s;
    }
    p {
      margin: 20px 0;
      text-align: center;
      font-family: "微软雅黑";
      font-size: 20px;
      font-style: normal;
    }
  }

  h2 {
    text-align: center;
    font-size: 60px;
    line-height: 60px;
    margin: 20px 0;
    font-family: "Anders", sans-serif;
    font-weight: 900;
  }

  h3 {
    text-align: center;
    font-size: 22px;
    font-family: "Lucinda", sans-serif;
    margin: 25px 0;
    font-weight: 600;
  }

  .name {
    letter-spacing: 4px;
  }

  .job {
    letter-spacing: 4px;
  }

  .email {
    letter-spacing: 4px;
    color: #FF8C00;
  }

  @font-face {
    font-family: "Anders";
    src: url("../../assets/Anders.ttf") format("truetype");
  }

  @font-face {
    font-family: "Lucinda";
    src: url("../../assets/Lucinda.otf") format("truetype");
  }
</style>
