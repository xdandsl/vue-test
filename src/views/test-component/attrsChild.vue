<template>
  <div></div>
</template>

<script>
export default {
  props: {
    desc: {
      type: String,
      default: ''
    }
  },
  inject: ['testProvide'],
  created() {
    console.log(this.$attrs, '孙子组件') // {extra: '我是其他信息'}
    console.log(this.testProvide, '孙子组件测试provide') // 我是来自父组件的哦
  }
}
</script>

<style>

</style>