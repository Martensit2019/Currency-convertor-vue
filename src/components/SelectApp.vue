<template>
  <select v-model="modelValue" @change="changeOption">
    <option v-for="option in options" :value="option" :key="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: "select-app",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(e){
      this.$emit("update:modelValue", e.target.value);
    }
  }
};
</script>

<style>
</style>