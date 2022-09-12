<template>
  <the-header />
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import { mapActions } from "vuex";

export default {
  components: {
    TheHeader,
  },
  methods: mapActions(["getCurrencyData"]),
  mounted() {
    this.getCurrencyData();
  },
};
</script>
