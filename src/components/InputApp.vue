<template>
  <input v-model="modelValue" type="text" @input="updateInput" />
</template>

<script>
export default {
  name: "input-app",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>


