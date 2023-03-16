<script setup lang="ts">
import { useNameSpace } from '@/hooks/core/useStyle'
import type { LayoutMenu } from '@/hooks/layout/useLayoutMenu'

const { prefixCls } = useNameSpace('layout-menu')
const menu = reactive<LayoutMenu[]>([
  {
    title: '1',
    hasChild: true,
    children: [
      {
        hasChild: false,
        title: '1-1'
      }
    ]
  },
  {
    title: '2',
    hasChild: true,
    children: [
      {
        hasChild: false,
        title: '2-1'
      }
    ]
  },
  {
    title: '3',
    hasChild: true,
    children: [
      {
        hasChild: false,
        title: '3-1'
      },
      {
        hasChild: true,
        title: '3-2',
        children: [
          {
            hasChild: false,
            title: '3-2-1'
          }
        ]
      },
      {
        hasChild: false,
        title: '3-3'
      }
    ]
  }
])
</script>

<template>
  <div>
    <ElMenu
      style="width: 210px"
      :class="prefixCls"
      active-text-color="#ffd04b"
      background-color="#001529"
      default-active="1"
      text-color="#fff"
    >
      <LayoutMenuItems :menu="menu"></LayoutMenuItems>
    </ElMenu>
  </div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-layout-menu';

.@{prefix-cls} {
  height: 100vh;
}
</style>
