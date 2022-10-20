<template>
  <div class="mb-5">
    <h5 class="">Таблица</h5>
    <table class="table table-sm table-hover">
      <thead class="table-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Дата</th>
        <th scope="col">
          <svg
              @click="sortedUpData('title')"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor" class="bi bi-caret-up"
              viewBox="0 0 16 16">
            <path
                d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
          </svg>
          Наименование
          <svg
              @click="sortedDownData('title')"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down"
              viewBox="0 0 16 16">
            <path
                d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
          </svg>

        </th>
        <th scope="col">
          <svg
              @click="sortedUpNumberData('quantity')"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor" class="bi bi-caret-up"
              viewBox="0 0 16 16">
            <path
                d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
          </svg>
          Кол-во
          <svg
              @click="sortedDownNumberData('quantity')"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down"
              viewBox="0 0 16 16">
            <path
                d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
          </svg>
        </th>
        <th scope="col">
          <svg
              @click="sortedUpNumberData('distance')"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor" class="bi bi-caret-up"
              viewBox="0 0 16 16">
            <path
                d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
          </svg>
          Расстояние
          <svg
              @click="sortedDownNumberData('distance')"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down"
              viewBox="0 0 16 16">
            <path
                d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
          </svg>


        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(table, index) in tables" :key="table.id">
        <th scope="row">{{ index + 1 }}</th>
        <th scope="row">{{ table.date }}</th>
        <td>{{ table.title }}</td>
        <td>{{ table.quantity }}</td>
        <td>{{ table.distance }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import {mapActions} from "pinia";
import {useTableStore} from "@/stores/table";

export default {
  name: "WelbexTable",
  props: {
    tables: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapActions(useTableStore, [
      'sortedDownData',
      'sortedUpData',
      'sortedDownNumberData',
      'sortedUpNumberData'
    ]),
  }


}
</script>
