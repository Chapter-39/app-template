<template>
  <button @click="setMode('local')" class="the-local-mode">
    {{ t("or Continue without account") }}
  </button>
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
@use "@/styles/type/large-default";
@use "@/styles/variables";

.the-local-mode {
  @extend %type-callout;

  padding: variables.$grid 0;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}
</style>
