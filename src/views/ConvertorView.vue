<template>
  <div class="page converter-page">
    <h1>Конвертор валют</h1>
    <!-- currencyDataArr - {{$store.getters.currencyDataKeys}} -->
    {{ cur }}
    <form @submit.prevent="handleSubmit">
      <div class="amount">
        <p>Введите сумму:</p>
        <input type="text" v-model="amount" />
      </div>
      <div class="block-select">
        <div class="from">
          <p>Из</p>
          <div class="select-box">
            <img
              :src="`https://flagcdn.com/48x36/${valFrom
                .slice(0, 2)
                .toLowerCase()}.png`"
              alt="flag"
            />
            <select-app v-model="valFrom" :options="currencyDataKeys" />
          </div>
        </div>
        <div class="icon" @click="changeCurrency">
          <img :src="require('../assets/icon-change.svg')" alt="" />
        </div>
        <div class="to">
          <p>В</p>
          <div class="select-box">
            <img
              :src="`https://flagcdn.com/48x36/${valTo
                .slice(0, 2)
                .toLowerCase()}.png`"
              alt="flag"
            />
            <select-app v-model="valTo" :options="currencyDataKeys" />
          </div>
        </div>
      </div>
      <div class="exchange-rate">{{ exchangeRate }}</div>
      <button>Получить обменный курс</button>
    </form>
  </div>
</template>

<script>
import SelectApp from "@/components/SelectApp.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ConvertorView",
  components: {
    SelectApp,
    // TheHeader,
  },

  data() {
    return {
      amount: 1,
      valFrom: "USD",
      valTo: "EUR",
      exchangeRate: "",
    };
  },
  methods: {
    handleSubmit() {
      this.getExchangeRate();
    },
    getExchangeRate() {
      let valFrom = this.valFrom;
      console.log("valFrom ->", valFrom);
      console.log("this.currencyData ->", this.currencyData);
      let RateValFrom = this.currencyData[valFrom].Value;
      console.log("RateValFrom->", RateValFrom);

      let valTo = this.valTo;
      console.log("valTo ->", valTo);
      let RateValTo = this.currencyData[valTo].Value;
      console.log("RateValTo->", RateValTo);

      let result = `${this.amount} ${valFrom} = ${(
        (RateValFrom / RateValTo) *
        this.amount
      ).toFixed(4)} ${valTo}`;
      return (this.exchangeRate = result);
    },
    changeCurrency() {
      console.log("change");
      let tempCode = this.valFrom;
      this.valFrom = this.valTo;
      this.valTo = tempCode;
      this.getExchangeRate();
    },
  },
  computed: mapGetters(["currencyData", "currencyDataKeys"]),
  mounted() {
    this.getExchangeRate();
  },
};
</script>
