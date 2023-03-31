<script setup lang="ts">
import { useNameSpace } from '@/hooks/core/useStyle'
import type { LayoutMenu } from '@/hooks/layout/useLayoutMenu'
import type { PropType } from 'vue'

const props = defineProps({
  collapse: { type: Boolean },
  menu: { type: Array as PropType<LayoutMenu[]> },
  defaultActive: { type: String }
})

const menu = unref(props.menu)
const { prefixCls: scrollPrefixCls } = useNameSpace('basic-menu-scroll')
const { prefixCls } = useNameSpace('basic-menu')
</script>

<template>
  <ElScrollbar :class="scrollPrefixCls">
    <ElMenu :class="prefixCls" :collapse="props.collapse" :default-active="props.defaultActive">
      <LayoutMenuItems :menu="menu"></LayoutMenuItems>
    </ElMenu>
  </ElScrollbar>
</template>

<style lang="less">
@import url('./src/index.less');
</style>
