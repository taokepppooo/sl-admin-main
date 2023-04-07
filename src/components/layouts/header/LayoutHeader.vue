<script setup lang="ts">
import { useNameSpace } from '@/hooks/core/useStyle'

const { prefixCls } = useNameSpace('layouts-header')
</script>

<template>
  <div :class="prefixCls">
    <LayoutHeaderCollapseMenu></LayoutHeaderCollapseMenu>
  </div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-layouts-header';

.@{prefix-cls} {
  height: 100%;
}
</style>
