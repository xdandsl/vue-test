<template>
  <div>
    <attrs-child v-bind="$attrs"></attrs-child>
  </div>
</template>

<script>
import attrsChild from './attrsChild'
export default {
  components: {
    attrsChild
  },
  // inheritAttrs: false,
  props: { // 传递的其余未被接收的props(desc和extra),默认会以属性形式存在于最外层的元素属性上。可以通过inheritAttrs: false取消
    from: {
      type: String,
      default: ''
    }
  },
  created() {
    console.log(this.$attrs, '儿子组件')
  }
}
</script>

<style>

</style>