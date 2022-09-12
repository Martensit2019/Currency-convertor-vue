import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    currencyDataObj: () => {},
    baseCurrency: 'RUB',
    searchQuery: '',
  },
  getters: {
    currencyData(state) {
      return state.currencyDataObj
    },
    baseCurrencyValue(state, getters) {
      let value = ''
      if (state.baseCurrency === 'RUB') return (value = 'Российский рубль')
      return getters.currencyData[state.baseCurrency].Name
    },

    currencyDataValues(_, getters) {
      return Object.values(getters.currencyData)
    },
    currencyDataKeys(_, getters) {
      return Object.keys(getters.currencyData)
    },
    currencyDataKeysWithRu(_, getters) {
      const arr = [...getters.currencyDataKeys]
      arr.unshift('RUB')
      return arr
    },
    selectedDataValues(state, getters) {
      if (state.baseCurrency === 'RUB') return getters.currencyDataValues
      const baseValue = getters.currencyDataValues.filter((currency) => currency.CharCode === state.baseCurrency)[0].Value
      const basePrevious = getters.currencyDataValues.filter((currency) => currency.CharCode === state.baseCurrency)[0].Previous
      return getters.currencyDataValues.map((currency) => {
        return { ...currency, Value: currency.Value / baseValue, Previous: currency.Previous / basePrevious }
      })
    },
    searchedDataValues(state, getters) {
      return getters.selectedDataValues.filter(
        (currency) =>
          currency.Name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          currency.NumCode.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          currency.CharCode.toLowerCase().includes(state.searchQuery.toLowerCase())
      )
    },
  },
  mutations: {
    setCurrencyData(state, currencyDataObj) {
      state.currencyDataObj = currencyDataObj
    },
    setBaseCurrency(state, baseCurrency) {
      state.baseCurrency = baseCurrency
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
  },
  actions: {
    async getCurrencyData({ commit }) {
      try {
        const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
        commit('setCurrencyData', response.data.Valute)
      } catch (e) {
        alert('Нt удалось загрузить данные')
      }
    },
  },
  modules: {},
})
