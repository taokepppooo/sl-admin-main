<script setup lang="ts">
import type { LayoutMenu } from '@/hooks/layout/useLayoutMenu'

defineProps<{
  menu: LayoutMenu[]
}>()
</script>

<template>
  <template v-for="(m, _index) in menu" :key="_index">
    <ElSubMenu v-if="m.hasChild" :index="m.title">
      <template #title>
        <span>{{ m.title }}</span>
      </template>
      <LayoutMenuItems :menu="m.children ?? []"></LayoutMenuItems>
    </ElSubMenu>
    <ElMenuItem v-else :index="m.title">{{ m.title }}</ElMenuItem>
  </template>
</template>

<style lang="less"></style>
