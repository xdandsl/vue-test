<template>
<!-- 主要讲述渲染函数 -->
  <div>
    123456
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    createElementFun() {
      // @return {vnode}
      // render函数，内部通过createElement方法返回vnode
      return createElement(
        'div',
        {
          // 与模板中attribute对应的数据对象。
        },
        // {string | Array}
        [
          '先写一些文字',
          createElement('h1', '一则头条')
        ],

      )
      // key相同认为是相同节点，sameNode
    }
  }
}
</script>

<style>

</style>