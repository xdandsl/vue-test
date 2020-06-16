import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 异步引入组件(如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。)
const testComponent = () => import('../views/test-component') // import函数返回promise

let options = {
  mode: 'hash',
  routes: [
    {
      path: '/test-component',
      component: testComponent
    }
  ]
}
let router = new VueRouter(options)
export default router