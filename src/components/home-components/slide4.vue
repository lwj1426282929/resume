<template>
  <swiper-slide>
    <div class="bg">
      <div class="bg-inner"/>
    </div>
    <h2>我的经历</h2>
    <ul class="work-container"
        v-for="(work, index) in experiences"
        :key="index">
      <li class="work-left">
        <span class="work-year" v-if="showyYear(index)">{{ moment(work.date).format('YYYY')}}</span>
        <span class="work-month">{{ moment(work.date).format('MM') }}</span>
      </li>
      <li class="time-line">
        <span class="horizontal-line"/>
        <span class="circle circle-outer"/>
        <span class="circle circle-inner">
          <span class="line"/>
        </span>
      </li>
      <li class="work-right">
        <p class="work-introduce">{{ work.title }}</p>
        <p class="work-department">&lt; {{ work.department }} &gt;</p>
        <p class="work-desc">{{ work.desc }}</p>
        <p></p>
      </li>
    </ul>
    <vue-particles color="#fff"
                   :particleOpacity="0.7"
                   :particlesNumber="80"
                   shapeType="circle"
                   :particleSize="4"
                   linesColor="#fff"
                   :linesWidth="1"
                   :lineLinked="true"
                   :lineOpacity="0.4"
                   :linesDistance="150"
                   :moveSpeed="2"
                   :hoverEffect="true"
                   hoverMode="grab"
                   :clickEffect="true"
                   clickMode="push"
                   class="particles"/>
  </swiper-slide>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { swiperSlide } from 'vue-awesome-swiper'
  import moment from 'moment'

  @Component({
    components: {
      swiperSlide
    }
  })
  export default class slide3 extends Vue {
    moment = moment
    experiences = [
      {
        date: '2017-11',
        title: '就职于北京力鼎创软科技有限公司',
        department: '政府事业部开发部',
        job: 'web前端工程师',
        desc: '负责PC和移动端页面制作。主要使用vue + vue-router + vuex + element/vux + vue-class构建前端界面，利用axios与后台进行数据交互。让页面充实丰富'
      },
      {
        date: '2017-06',
        title: '毕业于西南科技大学计算机科学与技术学院',
        department: '信息安全',
        desc: 'CET-4 计算机三级'
      },
      {
        date: '2016-06',
        title: '绵阳智如科技有限公司实习',
        department: '技术部',
        desc: '负责PC端页面设计和制作，PSD切图，通过html + jQuery + css 使页面更加充实'
      }
    ]

    showyYear (index) {
      if (index === 0) {
        return true
      } else {
        if (this.experiences[index].date !== this.experiences[index - 1].date) {
          return true
        }
      }
      return false
    }
  }
</script>

<style lang="less" scoped>
  h2 {
    width: 60%;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 30px;
    position: relative;
    color: lightcoral;
  }

  .work-container {
    width: 60%;
    height: 120px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    position: relative;
    z-index: 999;
    cursor: pointer;
    & li {
      height: 100%;
    }
    &:hover {
      & .circle-outer {
        transform: scale(1.4);
        transition: 1s;
      }
      & .work-introduce {
        color: lightsalmon;
      }
      & .work-year, .work-month {
        color: lightgreen;
      }
    }
  }

  .work-left {
    width: 15%;
    position: relative;
    text-align: right;
    span {
      display: inline-block;
      height: 20px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      right: 30px;
      color: #ffd200;
      font-family: "Lucinda", sans-serif;
    }
    .work-year {
      font-size: 30px;
      font-weight: 600;
    }
    .work-month {
      font-size: 20px;
    }
  }

  .time-line {
    width: 20px;
    position: relative;
    & > .circle {
      position: absolute;
      border-radius: 50%;
      margin: auto;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
    & > .circle-outer {
      width: 18px;
      height: 18px;
      background: lightgreen;
    }
    & > .circle-inner {
      width: 12px;
      height: 12px;
      line-height: 12px;
      background: #fff;
      & > .line {
        display: block;
        position: absolute;
        margin: 0;
        top: 50%;
        left: -25px;
        width: 20px;
        height: 0px;
        border: 1px solid lightgreen;
      }
    }
    & > .horizontal-line {
      position: absolute;
      margin: auto;
      width: 4px;
      height: 100%;
      display: block;
      left: 0;
      right: 0;
      background: #fff;
    }
  }

  .work-right {
    padding-top: 10px;
    flex: 1;
    height: auto;
    margin-left: 10px;
    .work-introduce {
      font-size: 22px;
      font-weight: 500;
      color: #fff;
    }
    .work-department {
      color: lightgreen;
      font-size: 14px;
      line-height: 1.5em;
    }
    .work-desc {
      color: #fff;
      font-size: 14px;
      line-height: 1.5em;
      margin-top: 10px;
    }
  }

  .particles {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  @font-face {
    font-family: "Lucinda";
    src: url("../../assets/Lucinda.otf") format("truetype");
  }
</style>
