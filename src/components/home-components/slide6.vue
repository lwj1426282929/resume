<template>
  <swiper-slide>
    <div class="bg">
      <div class="bg-inner"/>
    </div>
    <div class="contact-container">
      <div class="border-top"/>
      <div class="border-bottom"/>
      <div class="contact">
        <h2><span>CONTACT</span>FOR ME</h2>
        <p class="title">
          <span>灵感</span>
          <span>代码</span>
          <span>梦想</span>
          <span>未来</span>
        </p>
        <p class="poem">
          <span>Learning is a process full of joyful</span><br>
          <span>I'd like to try & looking for fresh</span><br>
          <span>前端即兴趣，兴趣即未来</span><br>
          <span>行路有良伴，便是捷径</span><br>
          <span>和我，一起看更大的世界</span>
        </p>
      </div>
      <div class="contact-info">
        <a href="https://github.com/lwj1426282929" target="_Blank">
          <i class="iconfont icon-github"/>
        </a>
        <a href="https://www.jianshu.com/u/11aa281a2df3" target="_Blank">
          <i class="iconfont icon-daorujianshu"/>
        </a>
        <a href="javascript:;"
           @mouseenter="showQQ=true"
           @mouseleave="showQQ=false">
          <i class="iconfont icon-qq"/>
          <div class="popover" v-show="showQQ">
            <img src="../../assets/img/lai-qq.jpg" alt="QQ">
          </div>
        </a>
        <a href="javascript:;"
           @mouseenter="showWX=true"
           @mouseleave="showWX=false">
          <i class="iconfont icon-wx"/>
          <div class="popover" v-show="showWX">
            <img src="../../assets/img/lai-wx.jpg" alt="微信">
          </div>
        </a>
        <a href="https://www.zhihu.com/people/huan-lin-xian-sen/activities" target="_Blank">
          <i class="iconfont icon-zhihu"/>
        </a>
      </div>
    </div>
    <footer>
      <p>&copy;赖维健Laiwj | <a href="http://www.jxca.gov.cn/" target="_blank">赣ICP备18008102号</a></p>
    </footer>
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
  export default class slide6 extends Vue {
    showQQ = false
    showWX = false
  }
</script>

<style lang="less" scoped>
  @import "../../assets/iconfont/iconfont.css";

  .contact-container {
    position: relative;
    width: 500px;
    height: 450px;
    margin: 0 auto;
    margin-top: 130px;
    .border-top {
      width: 150px;
      height: 100px;
      position: absolute;
      top: 0;
      right: 0;
      border-top: 6px solid #ffd200;
      border-right: 6px solid #ffd200;
    }
    .border-bottom {
      width: 100%;
      height: 30px;
      position: absolute;
      bottom: 0;
      border: 6px solid #ffd200;
      border-top: 0 none;
      box-sizing: border-box;
    }
  }

  .contact {
    width: 100%;
    padding-top: 30px;
    text-align: center;
    h2 {
      display: inline-block;
      text-align: justify;
      margin: 0 auto;
      font-weight: 800;
      font-size: 40px;
      line-height: 70px;
      color: #fff;
      border-bottom: 1px solid #ffd200;
      span {
        color: #ffd200;
      }
    }
    .title {
      width: 75%;
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-around;
      span {
        font-size: 24px;
        font-family: "Microsoft JhengHei";
        font-style: normal;
        &:nth-child(1) {
          color: #e3723c;
        }
        &:nth-child(2) {
          color: #84c800;
        }
        &:nth-child(3) {
          color: #33ccff;
        }
        &:nth-child(4) {
          color: #9e966e;
        }
      }
    }
    .poem {
      color: #fff;
      line-height: 40px;
      font-family: "Microsoft JhengHei";
    }
  }

  .contact-info {
    margin-top: 10px;
    position: relative;
    width: 100%;
    height: 30px;
    text-align: center;
    a {
      width: 34px;
      height: 34px;
      margin: 0 10px;
      position: relative;
      display: inline-block;
      background: #333;
      border-radius: 50%;
      text-align: center;
      line-height: 34px;
      &:hover {
        background: lightseagreen;
      }
      i {
        font-size: 20px;
        color: #fff;
      }
    }
  }

  .popover {
    position: absolute;
    width: 138px;
    height: 150px;
    top: -160px;
    left: -52px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  footer {
    position: absolute;
    margin: auto;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: normal;
    font-size: 14px;
  }
</style>
