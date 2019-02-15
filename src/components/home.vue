<template>
  <div class="swiper-container">
    <div class="loader" v-show="showLoading">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <p>Loading</p>
    </div>
    <header class="header">
      <h1 class="logo"></h1>
      <nav>

      </nav>
    </header>
    <swiper v-show="!showLoading" :options="swiperOption" ref="mySwiper">
      <slide1/>
      <slide2/>
      <slide3/>
      <slide4/>
      <slide5/>
      <slide6/>
      <div class="swiper-pagination swiper-home-pagination" slot="pagination"/>
    </swiper>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { swiper } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  import { slide1, slide2, slide3, slide4, slide5, slide6 } from './home-components'

  @Component({
    components: {
      swiper,
      slide1,
      slide2,
      slide3,
      slide4,
      slide5,
      slide6
    }
  })
  export default class home extends Vue {
    swiperOption = {
      notNextTick: true, // 不通过NextTick来实例化swiper
      direction: 'vertical',
      mousewheel: true, // 开启鼠标切换
      pagination: {
        el: '.swiper-home-pagination',
        clickable: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      }
    }

    showLoading = true

    mounted () {
      setTimeout(() => {
        this.showLoading = false
      }, 3000)
    }
  }
</script>

<style lang="less" scoped>
  .swiper-container { // swiper 布局
    width: 100%;
    height: 100%;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 200px;
    height: 200px;

    margin-top: -100px;
    margin-left: -100px;
    text-align: center;
    p {
      width: 100%;
      position: absolute;
      bottom: 0;
    }
  }

  /* The dot */
  .loader > .dot {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;

    width: 160px;
    height: 100px;

    margin-top: -50px;
    margin-left: -80px;

    border-radius: 5px;

    background-color: #1e3f57;

    transform-type: preserve-3d;

    animation: dot1 3s cubic-bezier(.55, .3, .24, .99) infinite;
  }

  .loader > .dot:nth-child(2) {
    z-index: 11;

    width: 150px;
    height: 90px;

    margin-top: -45px;
    margin-left: -75px;

    border-radius: 3px;

    background-color: #3c617d;

    animation-name: dot2;
  }

  .loader > .dot:nth-child(3) {
    z-index: 12;

    width: 40px;
    height: 20px;

    margin-top: 50px;
    margin-left: -20px;

    border-radius: 0 0 5px 5px;

    background-color: #6bb2cd;

    animation-name: dot3;
  }

  @keyframes dot1 {
    3%, 97% {
      width: 160px;
      height: 100px;

      margin-top: -50px;
      margin-left: -80px;
    }
    30%, 36% {
      width: 80px;
      height: 120px;

      margin-top: -60px;
      margin-left: -40px;
    }
    63%, 69% {
      width: 40px;
      height: 80px;

      margin-top: -40px;
      margin-left: -20px;
    }
  }

  @keyframes dot2 {
    3%, 97% {
      width: 150px;
      height: 90px;

      margin-top: -45px;
      margin-left: -75px;
    }
    30%, 36% {
      width: 70px;
      height: 96px;

      margin-top: -48px;
      margin-left: -35px;
    }
    63%, 69% {
      width: 32px;
      height: 60px;

      margin-top: -30px;
      margin-left: -16px;
    }
  }

  @keyframes dot3 {
    3%, 97% {
      width: 40px;
      height: 20px;

      margin-top: 50px;
      margin-left: -20px;
    }
    30%, 36% {
      width: 8px;
      height: 8px;

      margin-top: 49px;
      margin-left: -5px;

      border-radius: 8px;
    }
    63%, 69% {
      width: 16px;
      height: 4px;

      margin-top: -37px;
      margin-left: -8px;

      border-radius: 10px;
    }
  }
</style>
