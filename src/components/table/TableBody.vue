<template>
  <tbody>
    <tr v-for="item in tableData" :key="item.ID">
      <td>{{ item.ID }}</td>
      <td>{{ item.NumCode }}</td>
      <td>{{ item.CharCode }}</td>
      <td>{{ item.Nominal }}</td>
      <td>{{ item.Name }}</td>
      <td>{{ item.Value.toFixed(4) }}</td>
      <td>
        <div :class="item.Value - item.Previous > 0 ? 'up' : 'down'"></div>
        <span
          :style="{ color: item.Value - item.Previous < 0 ? 'red' : 'green' }"
          >{{ (item.Value - item.Previous).toFixed(4) }}</span
        >
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>