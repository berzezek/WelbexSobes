import {defineStore} from 'pinia'
import {useSearchStore} from "./search";

export const usePaginationStore = defineStore('pagination', {
  state: () => {
    return {
      currentPage: 1,
      options: [],
      minOptions: 5,
      maxOptions: 50,
      stepOptions: 5,
      pageCountValue: 5,
      paginatedTable: [],
      pageCount: 0,
    }
  },
  actions: {
    changePage(pageNumber: number) {
      this.currentPage = pageNumber
    },
    changePageCountValue(pageCountValue) {
      this.pageCountValue = pageCountValue;
      this.currentPage = 1;
    },
    setCurrentPage(currentPage) {
      this.currentPage = currentPage;
    },
    paginateTable(searchedTable) {
      if (this.getPageCountValue === '') {
        this.paginatedTable = searchedTable;
      }
      this.paginatedTable = searchedTable.slice((this.getCurrentPage - 1) * this.getPageCountValue, this.getCurrentPage * this.getPageCountValue);
    },
  },
  getters: {
    getOptions(state) {
      for (let i = this.minOptions; i <= this.maxOptions; i += this.stepOptions) {
        state.options.push({
          text: i,
          value: i,
        });
      }
      return state.options
    },
    getPageCountValue(state) {
      return state.pageCountValue;
    },
    getCurrentPage(state) {
      return state.currentPage;
    },
    getPaginatedTable(state) {
      const searchStore = useSearchStore();
      // @ts-ignore
      if (!state.getPageCountValue) {
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