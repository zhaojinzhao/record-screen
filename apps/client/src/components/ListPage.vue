<script setup lang="ts">
interface ListPage {
  columns: any[];
  data: any[];
}
defineProps<ListPage>();
</script>
<template>
  <div class="container">
    <h2 class="title">Epics</h2>
    <div>
      <a-table
        :columns="columns"
        :data="data"
        :pagination="{ pageSize: 25 }"
        sticky-header
        class="list"
      />
    </div>
  </div>
</template>
<style scoped>
.container {
  margin: 0 42px;
}

.title {
  margin: 42px 0;
  font-weight: bold;
  font-size: 30px;
}

.list {
  height: 1000px;
}
</style>
