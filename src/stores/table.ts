import {defineStore} from 'pinia'

type TypeTableData = {
  readonly id: number,
  title: string,
  quantity: number,
  distance: number
};
type TypeArrayTableData = Array<TypeTableData>;


export const useTableStore = defineStore('table', {
  state: () => {
    return {
      tableData: [] as TypeArrayTableData,
    }
  },
  actions: {
    async fetchTable(): Promise<void> {
      await fetch(`http://welbex.cn73530.tmweb.ru/api/v1/table/`)
        .then(response => response.json())
        .then(data => {
          this.tableData = data.results
        })
        .catch(
          error => console.log(error)
        )
    },
    sortedUpData(name: string): void {
      this.getTableData.sort((a: TypeTableData, b: TypeTableData) => {
        // @ts-ignore
        return b[name].localeCompare(a[name]);
      })
    },
    sortedDownData(name: string): void {
      this.getTableData.sort((a: TypeTableData, b: TypeTableData) => {
        // @ts-ignore
        return a[name].localeCompare(b[name]);
      })
    },
    sortedUpNumberData(name: string): void {
      this.getTableData.sort((a: TypeTableData, b: TypeTableData): number => {
        // @ts-ignore
        return a[name] - b[name];
      })
    },
    sortedDownNumberData(name: string): void {
      this.getTableData.sort((a: TypeTableData, b: TypeTableData): number => {
        // @ts-ignore
        return b[name] - a[name];
      })
    },
  },
  getters: {
    getTableData(state): TypeArrayTableData {
      return state.tableData
    },
  }
})