<template>
  <div>
    <a href="javascript:;" @click="clickSendMsg">点我呀</a>
  </div>
</template>
<script>
import Bus from './bus'
export default {
  data() {
    return {
      msg: '我是msg'
    }
  },
  methods: {
    clickSendMsg() {
      console.log(Bus) // Vue实例
      Bus.$emit('receiveMsg', this.msg)
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>