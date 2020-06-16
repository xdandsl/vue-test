<template>
  <div class="test-component">
    <!-- 组件相关 -->
    <!-- 1，组件含义、如何定义、注册全局和局部组件。
    全局注册：Vue.component('组件名', 组件)
    局部注册：components: { '组件名': 组件 }
    模块系统：基础组件的自动化全局注册，即自动化导入模块，不用手动引入以及注册。
            require.context是一个webpack提供的Api,通过执行require.context函数获取一个特定的上下文。
    -->
    <!-- 2，组件传值的几种方式，每种方式的优缺点。
    方式1：$parent,当前组件的父实例。
          $children, 当前组件的直接子实例，其提供的数据不是响应式，一般不常用。
          $refs，持有注册过 ref attribute 的所有 DOM 元素和组件实例。
    方式2：props和$emit。很简单，不过多赘述。适用父子组件，不适用于跨级组件。
    方式3：vuex。适用于任何组件间传递。
    方式4：event Bus中央事件总线。
          思路：new 一个实例(传话员)Bus导出，在需要发送消息的组件中Bus.$emit('事件名'，值)。接收消息的组件中Bus.$on('事件名', 值)
    方式5：$attrs和$listeners。见印象笔记
    方式6：provide和inject。见印象笔记

    -->
    <!-- 3，组件自定义事件、自定义组件的v-model、.sync修饰符
        这里主要讲述给组件绑定事件等内容。
        
    -->
    <!-- 4，插槽（作用域插槽和具名插槽）-->
    <!-- 5，动态组件-->
    <!-- 6，异步组件-->
    <!-- 7，封装的可复用的组件注意事项 -->
    <!-- 8，描述组件的初次渲染、更新渲染、异步渲染过程 -->
    123
    <A></A> 
    <B></B>
    <C></C>
    <eventBusFrom></eventBusFrom>
    <eventBusTo></eventBusTo>
    <attrs :from="from" :desc="desc" :extra="extra"></attrs>
  </div>
</template>

<script>
import requireModules from './module'
import eventBusTo from './eventBusTo'
import eventBusFrom from './eventBusFrom'
import attrs from './attrs'
export default {
  components: {
    eventBusTo,
    eventBusFrom,
    attrs
  },
  data() {
    return {
      from: "我是来自父组件",
      desc: "我是描述",
      extra: "我是其他信息",
    }
  },
  created() {
    requireModules()
  }
}
</script>
<style lang="stylus" scoped>

</style>