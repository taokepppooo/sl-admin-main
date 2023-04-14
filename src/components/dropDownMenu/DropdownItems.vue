<script setup lang="ts">
import { useNameSpace } from '@/hooks/core/useStyle'

const { prefixCls } = useNameSpace('drop-down-items')
</script>

<template>
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-drop-down-items';

.@{prefix-cls} {
  background: var(--el-bg-color-overlay);
  border: 1px solid var(--el-border-color-light);
  border-radius: 5px;
  padding: 3px 0;
}
</style>
