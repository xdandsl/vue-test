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
      实现1：实现给组件自定义事件、绑定原生事件
      实现2：自定义组件v-model
      实现3：.sync修饰符。:visiable.sync = 变量 子组件可以修改父组件某一变量的简写方式。

    -->
    <!-- 4，插槽（作用域插槽和具名插槽）-->
    <!-- 5，动态组件 
          <component :is="currentComponent"></component>
          currentComponent是当前组件。
          使用场景：比如根据不同用户角色，展示不同权限。
    -->
    <!-- 6，异步组件
          异步引入组件方式：通过（）=> import(组件路径方式) 返回promise.resolve(组件实例)
          在需要引入一个
    -->
    <!-- 7，封装的可复用的组件注意事项 
        封装可复用组件不知道写啥，先空着。
    -->
    <!-- 8，模板编译
         重点：生成render函数(用来生成虚拟DOM）

     -->
    <!-- 9，虚拟DOM与diff算法 
        重点：虚拟dom是啥，如何表示、diff算法过程
    -->
    <!-- 10，描述组件的初次渲染、更新渲染（渲染过程是异步的）过程(更新渲染涉及响应式)。
        重点：更新渲染执行流程  
    -->
    <!-- 11，响应式原理 
        重点：Object.defineProperty的使用、缺点、vue3如何解决
    -->

    <!-- 12，vue3相关 -->
    123

    <!-- 以上便涉及了vue渲染的整个流程，重点是8-12 -->
    <A></A> 
    <B></B>
    <C></C>
    <eventBusFrom></eventBusFrom>
    <eventBusTo></eventBusTo>
    <attrs :from="from" :desc="desc" :extra="extra"></attrs>
    
    <div>{{ value }}</div>
    <!-- <my-model :value="value" @input="change"></my-model> -->
    <!-- 此种写法等同于下面写法 -->
    <my-model v-model="value"></my-model>
    
    <!-- 动态组件 -->
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import requireModules from './module'
import eventBusTo from './eventBusTo'
import eventBusFrom from './eventBusFrom'
import myModel from './myModel'
import attrs from './attrs'
export default {
  components: {
    eventBusTo,
    eventBusFrom,
    attrs,
    myModel
  },
  provide: {
    testProvide: '我是来自父组件的哦'
  },
  data() {
    return {
      from: "我是来自父组件",
      desc: "我是描述",
      extra: "我是其他信息",
      value: '',
      currentComponent: eventBusTo,
      
    }
  },
  created() {
    requireModules()
  },
  methods: {
    change(val) {
      this.value = val
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>