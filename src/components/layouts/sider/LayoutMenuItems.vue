<script setup lang="ts">
import type { LayoutMenu } from '@/hooks/layout/useLayoutMenu'
import type { PropType } from 'vue'

const props = defineProps({
  menu: { type: Array as PropType<LayoutMenu[]> }
})

const menuSize = unref('18')
</script>

<template>
  <template v-for="(m, _index) in props.menu" :key="_index">
    <ElSubMenu v-if="m.hasChild" :index="m.title">
      <template #title>
        <icon :size="menuSize" :icon="m.icon" />
        <span>{{ m.title }}</span>
      </template>
      <LayoutMenuItems :menu="m.children ?? []"></LayoutMenuItems>
    </ElSubMenu>
    <ElMenuItem v-else :index="m.title">{{ m.title }}</ElMenuItem>
  </template>
</template>

<style lang="less"></style>
