<template>
  <div>
    自定义v-model
    <input :value="value" @change="handleChange" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style>

</style>