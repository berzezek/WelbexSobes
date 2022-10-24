import {onMounted, ref} from "vue";

type TypeTableData = {
  id: number,
  title: string,
  quantity: number,
  distance: number
};

type TypeArrayTableData = Array<TypeTableData>;

export default function usePaginateTable() {
  const currentPage = ref(1),
  rowsPerPage = ref(5),
  rowsPerPageOptions = ref([] as Array<{[key: string]: string}>),
  totalPages = ref(0),
  tableData = ref([] as TypeArrayTableData),
  tableDataPaginated = ref([] as TypeArrayTableData),

  getTotalPages = (tableLength: number) => {
    totalPages.value = Math.ceil(tableLength / rowsPerPage.value);
    return totalPages.value;
  },

  getOptions = (): Array<{[key: string]: string}> => {
    for (let i = 5; i <= 50; i += 5) {
      rowsPerPageOptions.value.push({
        text: i.toString(),
        value: i.toString(),
      });
    }
    return rowsPerPageOptions.value
  },

  setCurrentPage = (currentPageValue: number): void => {
    currentPage.value = currentPageValue;
  },
// pagintate table default 5 rows per page
  paginateTable = (tableDataValue: TypeArrayTableData): TypeArrayTableData => {
    if (!rowsPerPage.value) {
      tableDataPaginated.value = tableDataValue;
      return tableDataPaginated.value;
    }
    console.log(currentPage, rowsPerPage, tableDataValue);
    tableDataPaginated.value = tableDataValue.slice((currentPage.value - 1) * rowsPerPage.value, currentPage.value * rowsPerPage.value);
    return tableDataPaginated.value;
  },


  setRowsPerPage = (rowsPerPageValue: number): void => {
    rowsPerPage.value = rowsPerPageValue;
  };


  onMounted(() => {
    getOptions();
  });

  return {
    currentPage,
    rowsPerPage,
    rowsPerPageOptions,
    totalPages,
    tableData,
    tableDataPaginated,

    getTotalPages,
    setCurrentPage,
    setRowsPerPage,
    paginateTable,
  }
}