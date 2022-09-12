<template>
  <table class="table">
    <table-header />
    <table-body :tableData="tableData" />
  </table>
</template>

<script>
import TableBody from './TableBody.vue'
import TableHeader from './TableHeader.vue'
export default {
  components: { TableHeader, TableBody },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
