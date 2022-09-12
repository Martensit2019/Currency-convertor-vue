<template>
  <thead>
    <tr>
      <th scope="col" v-for="item in columnName" :key="item">{{item}}</th>
    </tr>
  </thead>
</template>

<script>
export default {
  data() {
    return {
      columnName: [' ID', 'Цифровой код (NumCode)', 'Буквенный код (CharCode)', 'Единиц (Nominal)', 'Валюта (Name)', 'Курс (Value)', 'Изменение'],
    }
  },
}
</script>

<style></style>
