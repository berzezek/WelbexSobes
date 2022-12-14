import {defineStore} from 'pinia'
import {useTableStore} from "./table";
import {usePaginationStore} from "./pagination";

type TypeConditions = {
  text: string,
  value: string
}

type TypeArrayConditions = Array<TypeConditions>;

type TypeTableData = {
  readonly id: number,
  title: string,
  quantity: number,
  distance: number
};

type TypeSearchArgs = {
  column: string,
  condition: string,
  value: string
};

type TypeArrayTableData = Array<TypeTableData>;

export const useSearchStore = defineStore('search', {
  state: () => {
    return {
      conditions: [
        {text: "равно", value: "eq"},
        {text: "содержит", value: "contains"},
        {text: "больше", value: "gt"},
        {text: "меньше", value: "lt"},
      ],
      columns: [
        {text: "Наименование", value: "title"},
        {text: "Количество", value: "quantity"},
        {text: "Расстояние", value: "distance"},
      ],
      searchedTable: [] as TypeArrayTableData,
      searchArgs: {} as TypeSearchArgs,
    }
  },
  actions: {
    searchTable(searchArgs: TypeSearchArgs): void {
      this.searchArgs = searchArgs;
    },

  },
  getters: {
    getConditions(state): TypeArrayConditions {
      return state.conditions
    },
    getColumns(state): TypeArrayConditions {
      return state.columns
    },
    getSearchedTable(state): TypeArrayTableData {
      const tableStore = useTableStore();
      const paginateStore = usePaginationStore();
      paginateStore.setCurrentPage(1);
      return tableStore.getTableData.filter(item => {
        switch (state.searchArgs.condition) {
          case "eq":
            return item[state.searchArgs.column].toString() === state.searchArgs.value.toString();
          case "contains":
            return item[state.searchArgs.column].toString().includes(state.searchArgs.value.toString());
          case "gt":
            return item[state.searchArgs.column] > state.searchArgs.value;
          case "lt":
            return item[state.searchArgs.column] < state.searchArgs.value;
          default:
            return tableStore.getTableData;
        }
      })
    },

  }
})