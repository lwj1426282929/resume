import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

Vue.config.productionTip = false

document.oncontextmenu = () => {
  return false
}

let reg = /Android|webOS|iPhone|iPod|BlackBerry/i
if (reg.test(navigator.userAgent)) {
  window.location.href = 'http://laiwj.cn/m/blog'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
