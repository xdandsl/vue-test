<template>
  <div>
    123
  </div>
</template>
<script>
import Bus from './bus'
export default {
  data() {
    return {
      txt: ''
    }
  },
  created() {
    Bus.$on('receiveMsg', msg => {
      this.txt = msg
      alert(this.txt)
    })
  }
}
</script>
<style lang="stylus" scoped>

</style>