<script setup lang="ts">
import { ref } from 'vue'
import hostMap from '@/utils/hostMap'
const reactUrl = ref(hostMap('//localhost:3000/'))
</script>

<template>
  <WujieVue width="100%" height="100%" name="react" :url="reactUrl" :sync="true"></WujieVue>
</template>
