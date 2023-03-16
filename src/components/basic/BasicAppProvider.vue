<script setup lang="ts">
import { createAppProviderContext } from '@/components/basic/hooks/useAppProviderContext'
import { AppEnum } from '@/enums/setting'

createAppProviderContext({ prefixCls: AppEnum.PREFIX_CLS })
</script>

<template>
  <slot></slot>
</template>

<style lang="less"></style>
