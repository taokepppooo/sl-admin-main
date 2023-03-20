<script setup lang="ts">
import { useNameSpace } from '@/hooks/core/useStyle'
import type { LayoutMenu } from '@/hooks/layout/useLayoutMenu'

const { prefixCls } = useNameSpace('basic-menu')
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
  },
  {
    title: '4',
    hasChild: true,
    children: [
      {
        hasChild: false,
        title: '4-1'
      },
      {
        hasChild: true,
        title: '4-2',
        children: [
          {
            hasChild: false,
            title: '4-2-1'
          }
        ]
      },
      {
        hasChild: false,
        title: '4-3'
      }
    ]
  },
  {
    title: '5',
    hasChild: true,
    children: [
      {
        hasChild: false,
        title: '5-1'
      },
      {
        hasChild: true,
        title: '5-2',
        children: [
          {
            hasChild: false,
            title: '5-2-1'
          }
        ]
      },
      {
        hasChild: false,
        title: '5-3'
      }
    ]
  }
])
</script>

<template>
  <ElScrollbar>
    <ElMenu :class="prefixCls" default-active="1">
      <LayoutMenuItems :menu="menu"></LayoutMenuItems>
    </ElMenu>
  </ElScrollbar>
</template>

<style lang="less">
@import url('./src/index.less');
</style>
