<template>
  <button @click="handleClick">Print</button>
  <div v-if="showEnvInfo" class="env-info">
    <p>MODE: {{ envVars.mode }}</p>
    <p>VITE_APPLE_TEAM_ID: {{ envVars.viteAppleTeamId }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const envVars = computed(() => ({
  mode: import.meta.env.MODE,
  viteAppleTeamId: import.meta.env.VITE_APPLE_TEAM_ID,
}));

const showEnvInfo = ref(false);

const handleClick = () => {
  showEnvInfo.value = true;
  console.info("Print button clicked");
  console.info(`[ThePrintButton.vue] MODE: ${envVars.value.mode}`);
  console.info(`[ThePrintButton.vue] VITE_APPLE_TEAM_ID: ${envVars.value.viteAppleTeamId}`);
};
</script>

<style lang="scss" scoped>
@use "@/styles/type";
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
.env-info {
  margin-top: variables.$grid;
  p {
    margin: 0;
    font-size: 0.95em;
    color: rgb(var(--text));
  }
}
</style>
