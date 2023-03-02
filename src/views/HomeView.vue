<script setup lang="ts">
import { ref } from 'vue'
import hostMap from '@/utils/hostMap'
const vue3Url = ref(hostMap('//localhost:5171/'))
</script>

<template>
  <WujieVue width="100%" height="100%" name="vue3" :url="vue3Url" :sync="true"></WujieVue>
</template>
