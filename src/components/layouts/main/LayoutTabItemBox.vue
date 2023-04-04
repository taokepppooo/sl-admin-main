<script lang="ts" setup>
import { useNameSpace } from '@/hooks/core/useStyle'
import type { CSSProperties, PropType } from 'vue'

const { prefixCls } = useNameSpace('layout-tab-item-box')

const props = defineProps({
  itemStyle: { type: Object as PropType<CSSProperties> }
})

const DEFUALT_HEIGHT = '38px'
const defaultItemStyle = {
  height: DEFUALT_HEIGHT,
  'line-height': DEFUALT_HEIGHT
}
const itemStyle = reactive<CSSProperties>({
  ...defaultItemStyle,
  ...(props.itemStyle || {})
})
</script>
<template>
  <div :class="prefixCls">
    <div class="outside-circle" :style="itemStyle">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less">
@prefix-cls: ~'@{namespace}-layout-tab-item-box';

.@{prefix-cls} {
  display: inline-block;
  width: auto;

  .outside-circle {
    padding: 0 30px;
    text-align: center;
    cursor: pointer;
    position: relative;
    background: #e91e63;
    border-radius: 10px 10px 0 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      bottom: 0;
    }

    &::before {
      left: -20px;
      background: radial-gradient(circle at 0 0, transparent 20px, #e91e63 21px);
    }

    &::after {
      right: -20px;
      background: radial-gradient(circle at 100% 0, transparent 20px, #e91e63 21px);
    }
  }
}
</style>
