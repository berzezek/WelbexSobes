<template>
    <div class="">

      <div class="container">
        <welbex-search />
      </div>

        <welbex-table
            :tables="getPaginatedTable"
        />

      <div class="container">
        <welbex-pagination
          :rowsCount="getSearchedTable.length"
          :pageCount="getPageCount"
          :options="getOptions"
          :currentPage="getCurrentPage"
          @changePage="changePage($event)"
          @changePageCountValue="changePageCountValue($event)"
        />
      </div>

    </div>
</template>

<script>

import WelbexTable from "@/components/WelbexTable.vue";
import WelbexPagination from "@/components/WelbexPagination.vue";
import WelbexSearch from "@/components/WelbexSearch.vue";
import {mapActions, mapState} from "pinia";
import {useTableStore} from "@/stores/table";
import {usePaginationStore} from "@/stores/pagination";
import {useSearchStore} from "@/stores/search";


export default {

  name: "MainPage",
  components: {WelbexSearch, WelbexPagination, WelbexTable},

  methods: {
    ...mapActions(useTableStore, ["fetchTable"]),
    ...mapActions(usePaginationStore, ["changePage", 'setCurrentPage', 'paginateTable', 'changePageCountValue']),
  },
  computed: {
    ...mapState(useTableStore, ['getTableData']),
    ...mapState(usePaginationStore, ['getPageCountValue', 'getCurrentPage', 'getPaginatedTable', 'getOptions', 'getPageCount']),
    ...mapState(useSearchStore, ['getSearchedTable']),
  },
  mounted() {
    this.fetchTable();
  }
}
</script>

<style scoped>

</style>