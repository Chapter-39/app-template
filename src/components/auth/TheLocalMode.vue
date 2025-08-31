<template>
  <div class="the-local-mode">
    <button @click="setMode('local')">
      {{ t("or Continue without account") }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Capacitor } from "@capacitor/core";
import { useModeStore } from "@/stores/settings/mode";

const { t } = useI18n();
const isNativeApp = Capacitor.isNativePlatform();
const { setMode } = useModeStore();

console.info(isNativeApp);
</script>

<style lang="scss" scoped>
@use "@/styles/type";
@use "@/styles/variables";

.the-local-mode {
  text-align: center;

  button {
    @extend %type-sub-headline;

    color: var(--rgba-text-secondary);
    display: inline-block;
    padding: variables.$grid 0;
    text-shadow: 0 0 2px rgb(0 0 0 / 50%);
  }
}
</style>
