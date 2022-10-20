<template>
    <div class="">

      <div class="container">
        <search-table />
      </div>

        <welbex-table :tables="getPaginatedTable" />

      <div class="container">
        <welbex-pagination :count="getSearchedTable.length" />
      </div>

    </div>
</template>

<script>

import WelbexTable from "@/components/WelbexTable.vue";
import SearchTable from "@/components/WelbexSearch.vue";
import WelbexPagination from "@/components/WelbexPagination.vue";
import {mapActions, mapState} from "pinia";
import {useTableStore} from "@/stores/table";
import {usePaginationStore} from "@/stores/pagination";
import {useSearchStore} from "@/stores/search";

export default {
  name: "MainPage",
  components: {WelbexPagination, SearchTable, WelbexTable},
  data() {
    return {
      searchArgs: {
        column: "",
        condition: "",
        value: ""
      },
      paginatedTable: [],
    }
  },
  methods: {
    ...mapActions(useTableStore, ["fetchTable"]),
    ...mapActions(usePaginationStore, ["changePage", 'setCurrentPage', 'paginateTable']),
  },
  computed: {
    ...mapState(useTableStore, ['getTableData']),
    ...mapState(usePaginationStore, ['getPageCountValue', 'getCurrentPage', 'getPaginatedTable']),
    ...mapState(useSearchStore, ['getSearchedTable']),
  },
  mounted() {
    this.fetchTable();
  }
}
</script>

<style scoped>

</style>