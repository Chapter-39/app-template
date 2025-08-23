<template>
  <button @click="handleClick">Print</button>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.info("Print button clicked");
  console.info(`[ThePrintButton.vue] MODE: ${import.meta.env.MODE}`);
};
</script>

<style lang="scss" scoped>
@use "@/styles/type/large-default";
@use "@/styles/variables";

button {
  @extend %type-body;

  background-color: var(--rgb-blue);
  color: rgb(var(--text));
  padding: variables.$grid variables.$grid * 2;
  border-radius: variables.$grid * 0.5;
  cursor: pointer;

  &:hover {
    background-color: rgb(var(--indigo));
  }
}
</style>
