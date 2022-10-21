import {defineStore} from 'pinia'
import {useSearchStore} from "./search";

type TypeTableData = {
  id: number,
  title: string,
  quantity: number,
  distance: number
};

type TypeArrayTableData = Array<TypeTableData>;

export const usePaginationStore = defineStore('pagination', {
  state: () => {
    return {
      currentPage: 1,
      options: [] as Array<{ [key: string]: number }>,
      minOptions: 5,
      maxOptions: 50,
      stepOptions: 5,
      pageCountValue: 5,
      paginatedTable: [] as TypeArrayTableData,
      pageCount: 0,
    }
  },
  actions: {
    changePage(pageNumber: number) {
      this.currentPage = pageNumber
    },
    changePageCountValue(pageCountValue: number) {
      this.pageCountValue = pageCountValue;
      this.currentPage = 1;
    },
    setCurrentPage(currentPage: number) {
      this.currentPage = currentPage;
    },
    paginateTable(searchedTable: TypeArrayTableData) {
      if (typeof(this.getPageCountValue) === "string") {
        this.paginatedTable = searchedTable;
      }
      this.paginatedTable = searchedTable.slice((this.getCurrentPage - 1) * this.getPageCountValue, this.getCurrentPage * this.getPageCountValue);
    },
  },
  getters: {

    getOptions(state): Array<{[key: string]: number}> {
      for (let i = state.minOptions; i <= state.maxOptions; i += state.stepOptions) {
        state.options.push({
          text: i,
          value: i,
        });
      }
      return state.options
    },
    getPageCountValue(state): number {
      return state.pageCountValue;
    },
    getCurrentPage(state): number {
      return state.currentPage;
    },
    getPaginatedTable(state): TypeArrayTableData {
      const searchStore = useSearchStore();
      const pageCountValue = state.pageCountValue;
      if (!pageCountValue) {
        return searchStore.getSearchedTable;
      }
      return searchStore.getSearchedTable.slice((this.getCurrentPage - 1) * this.getPageCountValue, this.getCurrentPage * this.getPageCountValue);
    },
    getPageCount(state) {
      const searchStore = useSearchStore();
      state.pageCount = Math.ceil(searchStore.getSearchedTable.length / state.pageCountValue);
      return state.pageCount;
    }
  }
})