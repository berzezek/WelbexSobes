<template>
  <div class="d-flex flex-column my-5">
    <h5>Фильтрация</h5>
    <welbex-select
        :options="getColumns"
        :selectedOption="'Выбор колонки'"
        v-model="selectedColumn"
        @change="purgeSelectedCondition"
    />
    <welbex-select
        :options="getConditions"
        :selectedOption="'Выбор условия'"
        class="my-3"
        v-model="selectedCondition"
        v-if="selectedColumn !== ''"
        @change="purgeInputValue"
    />
    <welbex-input
        :typeValue="'text'"
        :placeholderValue="'Введите значение'"
        v-model="inputValue"
        @input="searchTable(
        {
          column: selectedColumn,
          condition: selectedCondition,
          value: inputValue
        })"
        v-if="selectedCondition !== '' && selectedColumn !== ''"
    />

  </div>
</template>

<script>
import {useSearchStore} from "@/stores/search";
import {mapActions, mapState} from "pinia";

export default {
  name: "WelbexSearch",
  data() {
    return {
      selectedColumn: "",
      selectedCondition: "",
      inputValue: "",
    }
  },
  methods: {
    ...mapActions(useSearchStore, ['searchTable']),
    purgeSelectedCondition() {
      this.selectedCondition = '';
    },
    purgeInputValue() {
      this.inputValue = '';
    }
  },
  computed: {
    ...mapState(useSearchStore, ['getConditions', 'getColumns']),
  }
}
</script>
