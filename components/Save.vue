<template>
  <h1 class="text-xl opacity-50">L-glossary</h1>
  <p class="text-4xl">
    {{ t("hello") }}
  </p>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
