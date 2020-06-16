import Vue from 'vue'
function fun() {
  const requireComponents = require.context('./components', // 要引入文件所在的相对路径
  false, // 是否查询其子目录
  /\.vue$/) // 匹配文件的正则表达式，这里要引入以.vue结尾的文件

  requireComponents.keys().forEach(fileName => {
    // fileName: 匹配到的文件路径
    // 获取组件配置
    const componentConfig = requireComponents(fileName)
    
    // console.log(fileName) // ./A.vue ./B.vue ./C.vue
    // 获取组件的 PascalCase 命名
    const componentName = fileName.replace(/(\.\/|\.vue)/g, '')
    // console.log(componentName) // A B C
    
    // 作用1：注册部分基础组件时，避免组件一个个通过import引入，然后遍历注册。
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}
export default fun