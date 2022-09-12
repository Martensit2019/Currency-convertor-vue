<template>
  <div class="page main-page">
    <p style="color: red">Я не совсем понял, какой нужен функционал первой страницы и дизайна мне не предоставили, поэтому сделал, как я понял. <br>Адаптив я также неделал</p>
    <p>По функционалу:<br>
    1. В зависимости от базовой валюты меняется курс и изменения<br>
    2. Работает живой поиск<br>
    3. Кнопка справа сбрасывает поиск
    </p>
    <h1>Список валют</h1>
    <form>
      <div class="block-select">
        <div class="select-box">
          <img :src="`https://flagcdn.com/48x36/${baseCurrency.slice(0, 2).toLowerCase()}.png`" alt="flag" />
          <select-app :model-value="baseCurrency" :options="currencyDataKeysWithRu" @update:model-value="setBaseCurrency" />
        </div>
      </div>
      <input-app :model-value="searchQuery" placeholder="Поиск по названию валюты или её коду..." @update:model-value="setSearchQuery" />
      <button type="button" style="width: 52px" @click="$store.commit('setSearchQuery', '')">X</button>
    </form>
    <div class="main-page__base">Базовая валюта - {{ baseCurrencyValue }}</div>

    <table-app v-if="searchedDataValues.length" :tableData="searchedDataValues" />
    <h2 v-else>Увы, ничего не удалось найти...</h2>
  </div>
</template>

<script>
import TableApp from '@/components/table/TableApp.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import SelectApp from '@/components/SelectApp.vue'
import InputApp from '@/components/InputApp.vue'

export default {
  components: { TableApp, SelectApp, InputApp },
  name: 'HomeView',
  methods: {
    ...mapMutations({
      setBaseCurrency: 'setBaseCurrency',
      setSearchQuery: 'setSearchQuery',
    }),
  },
  computed: {
    ...mapState({
      searchQuery: (state) => state.searchQuery,
      baseCurrency: (state) => state.baseCurrency,
      currencyDataArr: state =>state.currencyDataArr
    }),
    ...mapGetters({
      searchedDataValues: 'searchedDataValues',
      currencyDataKeysWithRu: 'currencyDataKeysWithRu',
      baseCurrencyValue: 'baseCurrencyValue'
    }),
  },
}
</script>
