<script setup lang="ts">
import { prefixCls } from '@/types/style/settings'
import { createAppProviderContext } from '@/components/basic/hooks/useAppProviderContext'

createAppProviderContext({ prefixCls })
</script>

<template>
  <slot></slot>
</template>

<style lang="less"></style>
