<script setup lang="ts">
import { AppEnum } from '@/enums/setting'
import { createAppProviderContext } from './src/useAppProviderContext'

createAppProviderContext({ prefixCls: AppEnum.PREFIX_CLS })
</script>

<template>
  <slot></slot>
</template>

<style lang="less"></style>
