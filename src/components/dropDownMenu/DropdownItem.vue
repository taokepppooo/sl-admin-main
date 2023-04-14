<script setup lang="ts">
import { useNameSpace } from '@/hooks/core/useStyle'

const { prefixCls } = useNameSpace('drop-down-item')

const props = defineProps({
  icon: { type: String },
  disabled: { type: Boolean }
})

const { icon, disabled } = toRefs(props)
</script>

<template>
  <div :class="prefixCls">
    <div class="item" :class="{ disabled: disabled }">
      <Icon class="item-icon" :icon="icon" :size="16"></Icon>
      <label>
        <slot></slot>
      </label>
    </div>
  </div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-drop-down-item';
@import url('@/assets/mixins/index.less');

.@{prefix-cls} {
  font-size: 16px;

  .item {
    display: flex;
    align-items: center;
    color: var(--drop-menu-text-color);
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    cursor: pointer;
    transition: border-color var(--el-transition-duration),
      background-color var(--el-transition-duration), color var(--el-transition-duration);
    white-space: nowrap;

    .item-icon {
      display: flex;
      margin-right: 3px;
    }

    &:hover {
      color: var(--drop-menu-hover-text-color);
      background-color: var(--drop-menu-hover-bg-color);
    }
  }
}
</style>
