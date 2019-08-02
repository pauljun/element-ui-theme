// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './theme';
import './index.scss'
document.body.className = localStorage.theme ? 'body-theme-' + window.themeConfig.filter(v => v.value === localStorage.theme)[0].key : 'body-theme-' + window.themeConfig[0].key;
document.documentElement.style.setProperty('--Main', localStorage.theme ? localStorage.theme : '#409EFF')

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
