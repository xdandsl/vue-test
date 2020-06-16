<template>
  <div>attrs</div>
</template>

<script>
export default {
  // inheritAttrs: false,
  props: { // 传递的其余未被接收的props,默认会以属性形式存在于最外层的元素属性上。可以通过inheritAttrs: false取消
    from: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>