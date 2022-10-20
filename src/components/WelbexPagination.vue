<template>
  <div class="container-sm" >
    <h5>Пагинация</h5>
    <div >
      <div v-if="pageCountValue!==''" class="d-flex justify-content-center mb-5">
        <div
            v-for="pageNum in getPageCount"
            :key="pageNum"
            class="page"
            :class="{'current-page': getCurrentPage === pageNum}"
            @click="changePage(pageNum)"
            v-show="getCurrentPage-2 <= pageNum && pageNum <= getCurrentPage+2"
        >{{ pageNum }}</div>
      </div>

    </div>
    <div class="container">
      <welbex-select
          :options="getOptions"
          :selectedOption="'Все записи'"
          class="mb-3"
          v-model="pageCountValue"
          @change="changePageCountValue(pageCountValue)"
      />
      <p>Всего записей: {{ count }}</p>
      <p v-if="pageCountValue !== ''">Всего страниц: {{ getPageCount }}</p>
    </div>
  </div>

</template>

<script>
import { mapState, mapActions } from 'pinia';
import {usePaginationStore} from "@/stores/pagination";

export default {
  name: "WelbexPagination",
  data() {
    return {
      pageCountValue: 5,
    }
  },
  props: {
    count: {
      type: Number
    },
  },
  computed: {
    ...mapState(usePaginationStore, ['getOptions', 'getPageCountValue', 'getCurrentPage', 'getPageCount']),
  },
  methods: {
    ...mapActions(usePaginationStore, ['changePage', 'changePageCountValue']),
  },

}
</script>

<style scoped>
  .page {
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    margin: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .current-page {
    background-color: #5f5f5f;
    color: #fff;
    border: 2px solid #000;
  }
</style>