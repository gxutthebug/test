import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css" // 引入第三方包里的某个css文件
import  axios from "axios";

Vue.config.productionTip = false

// 3. axios方法添加到Vue的原型上
Vue.prototype.$axios = axios

axios.defaults.baseURL = "https://www.escook.cn"

new Vue({
  render: h => h(App),  // 把 render 函数指定的组件，渲染到 HTML 页面中
}).$mount('#app')



// new Vue({
//   el:"#app",
//   render:h=>h(Test)
// })
// 这样写效果一样更易懂只是没有那么高大上