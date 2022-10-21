<template>
  <div class="container-sm" >
    <h5>Пагинация</h5>
    <div >
      <div v-if="pageCountValue!==''" class="d-flex justify-content-center mb-5">
        <div
            v-for="pageNum in pageCount"
            :key="pageNum"
            class="page"
            :class="{'current-page': currentPage === pageNum}"
            @click="changePage(pageNum)"
            v-show="currentPage-2 <= pageNum && pageNum <= currentPage+2"
        >{{ pageNum }}</div>
      </div>

    </div>
    <div class="container">
      <welbex-select
          :options="options"
          :selectedOption="'Все записи'"
          class="mb-3"
          v-model="pageCountValue"
          @change="changePageCountValue(pageCountValue)"
      />
      <p>Всего записей: {{ rowsCount }}</p>
      <p v-if="pageCountValue !== ''">Всего страниц: {{ pageCount }}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "WelbexPagination",
  data() {
    return {
      pageCountValue: 5,
    }
  },
  props: {
    rowsCount: {
      type: Number
    },
    options: {
      type: Array
    },
    pageCount: {
      type: Number
    },
    currentPage: {
      type: Number
    }

  },
  methods: {
    changePageCountValue(value) {
      this.$emit('changePageCountValue', value);
    },
    changePage(pageNum) {
      this.$emit('changePage', pageNum);
    }
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