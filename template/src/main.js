// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import util from './util/index';

Vue.config.productionTip = false

/* eslint-disable no-new */
if(util.isApp) {
  window.apiready = ()=> {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
}else {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
}
