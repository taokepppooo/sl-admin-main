<script setup lang="ts">
import { useAppStore } from '@/store/modules/app'
import { useLayoutHeader } from './src/useLayoutHeader'

const { headerIcon } = useLayoutHeader()
const appStore = useAppStore()

const collapseTrigger = () => {
  appStore.setSetting({
    menuSetting: {
      collapsed: !appStore.getMenuSetting?.collapsed
    }
  })
}
</script>

<template>
  <icon :size="headerIcon.size" :hover="headerIcon.hover" icon="ep:fold" @click="collapseTrigger" />
</template>

<style lang="less"></style>
