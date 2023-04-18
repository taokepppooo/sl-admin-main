<script setup lang="ts">
import { add, multiply } from 'lodash-es'
import { useNameSpace } from '@/hooks/core/useStyle'
import { useLayoutTabDropDownMenu } from './src/useLayoutTabDropDownMenu'
import type { TabOperate } from './src/types'

const { prefixCls } = useNameSpace('layout-tabs-operate')

const gapNumber = 15
const gap = ref(`${gapNumber}px`)
const size = ref(15)

const { dropItems } = useLayoutTabDropDownMenu()

const tabsOperate = reactive<TabOperate[]>([
  {
    icon: 'ep:full-screen',
    event: () => {}
  },
  {
    icon: 'ep:menu',
    menuItems: dropItems
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
    <div v-for="i in tabsOperate" :key="i.icon">
      <LayoutTabDropDownMenu v-if="i.menuItems" :drop-items="dropItems" trigger="click">
        <Icon :size="size" :icon="i.icon" :hover-styles="{ opacity: 0.7 }"></Icon>
      </LayoutTabDropDownMenu>
      <Icon
        v-else
        :size="size"
        :icon="i.icon"
        :hover-styles="{ opacity: 0.7 }"
        @click="i.event"
      ></Icon>
    </div>
  </div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-layout-tabs-operate';

.@{prefix-cls} {
  display: flex;
  column-gap: v-bind(gap);
}
</style>
