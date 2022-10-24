import {onMounted, ref} from "vue";

type TypeTableData = {
  id: number,
  date: string,
  title: string,
  quantity: number,
  distance: number
}

export function useTableData() {
  try {
    const tableData = ref([] as Array<TypeTableData>),
      totalRows = ref(0);

    const fetchTableData = async () => {
      await fetch(`http://welbex.cn73530.tmweb.ru/api/v1/table/`)
        .then(response => response.json())
        .then(data => {
          tableData.value = data.results
          totalRows.value = data.count
        })
    }

    // onMounted(async () => {
    //   await fetchTableData();
    // });

    return {
      tableData,
      totalRows,
      fetchTableData
    }
  }
  catch (e) {
    console.log(e);
  }
}