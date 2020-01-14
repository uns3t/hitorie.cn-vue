import Vue from 'vue'
import App from './App.vue'
import Element from "element-ui"
import router from "./router.js"
import "./assets/index.css"



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
