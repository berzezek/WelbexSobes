<script lang="ts">
import AppNav from "@/components/WelbexNav.vue";
export default {
  name: "App",
  components: {AppNav},
};
</script>

<template>
  <div>
    <app-nav/>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
