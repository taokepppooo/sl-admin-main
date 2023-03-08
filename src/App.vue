<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import DefaultVue from '@/layouts/default.vue'

const locale = zhCn
</script>

<template>
  <ElConfigProvider :locale="locale">
    <DefaultVue></DefaultVue>
  </ElConfigProvider>
</template>

<style scoped></style>
