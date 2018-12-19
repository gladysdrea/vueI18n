// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入i18n国际化插件
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 注册i18n实例并引入语言文件
const i18n = new VueI18n({
  locale: 'zh', // 定义默认语言为中文
  messages: {
    'zh': require('@/assets/languages/zh.json'),
    'en': require('@/assets/languages/en.json')
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
