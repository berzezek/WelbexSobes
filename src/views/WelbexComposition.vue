<template>
  <div class="">

    <div class="container">
      <welbex-search />
    </div>

    <welbex-table :tables="paginateTableData.tableDataPaginated.value" />

    <div class="container">
      <welbex-pagination
        :rowsCount="totalRows"
        :pageCount="paginateTableData.totalPages.value"
        :options="paginateTableData.rowsPerPageOptions.value"
        :currentPage="paginateTableData.currentPage.value"
        @changePage="changePage($event)"
        @changePageCountValue="changePageCountValue($event)"
      />
    </div>

  </div>
</template>

<script>
import { useTableData } from '@/hooks/useTableData';
import usePaginateTable from "@/hooks/usePaginateTable";
import WelbexSearch from "@/components/WelbexSearch.vue";
import WelbexTable from "@/components/WelbexTable.vue";
import WelbexPagination from "@/components/WelbexPagination.vue";
import { onMounted } from "vue";

export default {
  name: "WelbexComposition",
  components: {WelbexTable, WelbexSearch, WelbexPagination},

  setup(props) {
    const tableData = useTableData(),
      paginateTableData = usePaginateTable(),

      table = tableData.tableData,
      totalRows = tableData.totalRows,

      changePage = (event) => {
      paginateTableData.setCurrentPage(event);
    },

      changePageCountValue = (event) => {
      paginateTableData.setRowsPerPage(event);
      paginateTableData.paginateTable(table.value)
    };

    onMounted(async () => {
      await tableData.fetchTableData();
      await paginateTableData.paginateTable(table.value)
      await paginateTableData.getTotalPages(table.value);
    });

    return {
      table,
      totalRows,
      paginateTableData,
      changePage,
      changePageCountValue,
    };
  }
}
</script>

<style scoped>

</style>