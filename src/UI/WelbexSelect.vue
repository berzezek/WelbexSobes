<template>
  <div>
    <select
        :value="modelValue"
        @input="updateInput"
        class="form-select form-select-sm"
        aria-label="Default select example"
    >
      <option selected value="">{{ selectedOption }}</option>
      <option
          v-for="option in options"
          :key="option"
          :value="option.value"
      >{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "WelbexSelect",
  data() {
    return {
      selected: "",
    }
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    selectedOption: {
      type: String,
      default: "Выберите значение"
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
