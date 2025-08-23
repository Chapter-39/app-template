<script setup lang="ts">
import router from "@/router";
import { Settings } from "lucide-vue-next";
</script>

<template>
  <button @click="router.replace({ path: '/settings' })" class="top-right-cta"><Settings /></button>
  <h1>Home</h1>
</template>
