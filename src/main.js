import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import router from "./router.js"
import VueLazyload from 'vue-lazyload'


Vue.use(VueLazyload, {
  error:require('./assets/img/logo.png'),
  loading: require('./assets/img/loading.gif'),// 懒加载使用的图片
})


Vue.component(CollapseTransition.name, CollapseTransition)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
