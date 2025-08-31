<template>
  <button @click="router.replace({ path: '/settings' })" class="top-right-cta"><Settings /></button>
  <h1>{{ t("Home") }}</h1>
</template>

<script setup lang="ts">
import router from "@/router";
import { Settings } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
