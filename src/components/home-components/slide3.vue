<template>
  <swiper-slide>
    <div class="bg"><div class="bg-inner"/></div>
    <div class="skill-left pull-left">
      <h2>Skills:</h2>
      <p v-for="(skill, index) in skills"
         :key="index"
         class="skill">
        <span :style="{background: skill.color}">{{ skill.name }}</span>
      </p>
    </div>
    <div class="skill-right pull-right">
      <svg width="600" height="600">
        <circle cx="300"
                cy="300"
                r="70"
                fill="#193340"
                stroke="none">
        </circle>
        <circle v-for="(skill, index) in skills"
                :key="index"
                class="skill"
                :ref="'skill-' + index"
                cx="300"
                cy="300"
                :r="35*(index + 1) + 50"
                fill="none"
                :stroke="skill.color"
                :stroke-width="skill.strokeWidth || 30"
                @mouseenter="circleMouseenter(skill, index)"
                @mouseleave="circleMouseleave(skill, index)"
                :stroke-dashoffset="0"
                :stroke-dasharray="2 * 3.1415732* (35*(index + 1) + 50) * skill.rate"/>
        <text x="300"
              y="307"
              text-anchor="middle"
              font="20px Arial"
              stroke="none"
              fill="#ffffff"
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font: 20px Arial; opacity: 1;"
              opacity="1">
          <tspan :dy="hoverd ? -10 : 0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">{{ skillsName }}</tspan>
          <tspan v-if="hoverd"
                 dy="24"
                 x="300"
                 style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
            {{ rate }}
          </tspan>
        </text>
      </svg>
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
    skillsName = 'Skills'
    rate = ''
    hoverd = false
    skills = [
      {name: 'Javascript', rate: 0.9, color: 'rgba(151, 190, 13, .7)'},
      {name: 'HTML5', rate: 0.9, color: 'rgba(216, 79, 95, .7)'},
      {name: 'CSS3', rate: 0.8, color: 'rgba(136, 184, 230, .7)'},
      {name: 'Vue', rate: 0.8, color: 'rgba(255, 227, 97, .7)'},
      {name: 'Angular', rate: 0.5, color: 'rgba(190, 129, 233, .7)'}
    ]

    circleMouseenter (skill, index) {
      skill.strokeWidth = 55
      this.skillsName = skill.name
      this.rate = skill.rate * 100 + '%'
      this.hoverd = true
    }

    circleMouseleave (skill, index) {
      skill.strokeWidth = 25
      this.skillsName = 'Skills'
      this.rate = ''
      this.hoverd = false
    }
  }
</script>

<style lang="less" scoped>
  .skill-left {
    position: relative;
    width: 45%;
    height: 100%;
    padding-top: 100px;
    box-sizing: border-box;
    text-align: center;

    h2 {
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      font: 40px Arial normal;
    }
    .skill {
      width: 70%;
      height: 40px;
      margin: 5px auto;
      color: #fff;
      font-size: 20px;
      text-align: right;
      span {
        display: inline-block;
        cursor: pointer;
        height: 100%;
        line-height: 40px;
        padding: 0 20px;
        &:hover {
          transform: scale(1.1);
          transition: all .5s linear;
        }
      }
    }
  }

  .skill-right {
    width: 55%;
    height: 100%;
    text-align: left;

    svg {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }

    .skill {
      cursor: pointer;
      &:hover {
        animation-play-state: paused;
      }
    }

    circle:nth-child(2) {
      animation: rotate 2s infinite;
    }
    circle:nth-child(3) {
      animation: rotateReverse 3s infinite;
    }
    circle:nth-child(4) {
      animation: rotate 4s infinite;
    }
    circle:nth-child(5) {
      animation: rotateReverse 5s infinite;
    }
    circle:nth-child(6) {
      animation: rotate 5.5s infinite;
    }
    circle:nth-child(7) {
      animation: rotateReverse 6s infinite;
    }
    circle:nth-child(8) {
      animation: rotate 6.5s infinite;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
      transform-origin: center
    }

    to {
      transform: rotate(360deg);
      transform-origin: center
    }
  }

  @keyframes rotateReverse {
    from {
      transform: rotate(0deg);
      transform-origin: center
    }

    to {
      transform: rotate(-360deg);
      transform-origin: center
    }
  }
</style>
