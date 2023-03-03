<script setup lang="ts">
import { ref } from 'vue'
import hostMap from '@/utils/hostMap'
const svelteUrl = ref(hostMap('//localhost:5173/'))
</script>

<template>
  <WujieVue width="100%" height="100%" name="react" :url="svelteUrl" :sync="true"></WujieVue>
</template>
