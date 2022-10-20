<template>
  <div class="input-group flex-nowrap">
    <input
        :type="typeValue"
        class="form-control"
        :placeholder="placeholderValue"
        :value="modelValue"
        @input="updateInput"
    />
  </div>
</template>

<script>
export default {
  name: "WelbexInput",
  props: {
    placeholderValue: {
      type: String,
      default: "Введите значение"
    },
    typeValue: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<style scoped>

</style>