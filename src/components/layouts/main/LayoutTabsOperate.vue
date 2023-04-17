<script setup lang="ts">
import { add, multiply } from 'lodash-es'
import { useNameSpace } from '@/hooks/core/useStyle'
import type { TabOperate } from './src/types'

const { prefixCls } = useNameSpace('layout-tabs-operate')

const gapNumber = 15
const gap = ref(`${gapNumber}px`)
const size = ref(14)

const tabsOperate = reactive<TabOperate[]>([
  {
    icon: 'ep:full-screen',
    event: () => {}
  },
  {
    icon: 'ep:menu',
    event: () => {}
  }
])

const width: number = add(gapNumber, multiply(size.value, tabsOperate.length))

const getWidth = (): string => {
  return `${width}px`
}

defineExpose({
  getWidth
})
</script>

<template>
  <div :class="prefixCls">
    <Icon
      v-for="i in tabsOperate"
      :key="i.icon"
      :size="size"
      :icon="i.icon"
      :hover-styles="{ opacity: 0.7 }"
      @click="i.event"
    ></Icon>
  </div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-layout-tabs-operate';

.@{prefix-cls} {
  display: flex;
  column-gap: v-bind(gap);
}
</style>
