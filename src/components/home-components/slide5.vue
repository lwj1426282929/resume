<template>
  <swiper-slide>
    <div class="bg">
      <div class="bg-inner"/>
    </div>
    <h2>作品集</h2>
    <div class="opus-container">
      <a v-for="(item, index) in opus"
         :key="index"
         :href="item.link"
         class="opus">
        <img :src="item.imgsrc" alt="item.name"/>
        <div class="opus-mask">
          {{ item.name }}
        </div>
      </a>
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
  export default class slide5 extends Vue {
    opus = [
      {
        name: '高新区环境监管',
        imgsrc: '../../../static/img/高新区.png',
        link: 'http://182.138.101.12:18081'
      },
      {
        name: '个人简历',
        imgsrc: '../../../static/img/resume.png',
        link: '/'
      },
      {
        name: '个人博客',
        imgsrc: '../../../static/img/blog.png',
        link: '/'
      },
      {
        name: '四川省企业信用',
        imgsrc: '../../../static/img/企业信用.png',
        link: 'http://10.194.5.39'
      }
    ]
  }
</script>

<style lang="less" scoped>
  h2 {
    position: relative;
    text-align: center;
    margin-top: 70px;
    color: #fff;
    margin-bottom: 20px;
  }

  .opus-container {
    position: relative;
    width: 80%;
    height: 500px;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .opus {
    display: inline-block;
    width: 24%;
    height: 48%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      filter: grayscale(1);
    }
    .opus-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      line-height: 240px;
      font-size: 24px;
      color: #fff;
      text-shadow: 0 0 20px #000;
      z-index: 999;
      opacity: .3;
      animation-fill-mode: forwards;
      font-family: '微软雅黑';
      font-style: normal;
      text-align: center;
      /*background: rgba(0, 0, 0, .5);*/
    }
    &:hover {
      img {
        filter: grayscale(0);
      }
      transform: scale(1.1);
      transition: 1s;
      .opus-mask {
        animation: opacity 1s linear;
        opacity: 1;
      }
    }
  }

  @keyframes opacity {
    from {
      opacity: .2;
    }
    to {
      opacity: 1;
    }
  }
</style>
