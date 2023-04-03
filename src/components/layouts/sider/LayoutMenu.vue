<script setup lang="ts">
import { initSetting } from '@/components/basicMenu/src/useBasicMenu'
import { useAppStore } from '@/store/modules/app'
import type { LayoutMenu } from '@/hooks/layout/useLayoutMenu'

initSetting()
const appStore = useAppStore()

const menu = reactive<LayoutMenu[]>([
  {
    title: '12222222222222333333333',
    icon: 'ep:unlock',
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
    icon: 'ep:unlock',
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
  <BasicMenu
    :collapse="appStore.getMenuSetting?.collapsed"
    :menu="menu"
    default-active="1-1"
  ></BasicMenu>
</template>

<style lang="less"></style>
