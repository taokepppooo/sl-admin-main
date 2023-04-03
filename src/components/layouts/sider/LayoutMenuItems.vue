<script setup lang="ts">
import { useNameSpace } from '@/hooks/core/useStyle'
import type { LayoutMenu } from '@/hooks/layout/useLayoutMenu'
import type { PropType } from 'vue'

const props = defineProps({
  menu: { type: Array as PropType<LayoutMenu[]> }
})

const menuSize = unref('18')
const { prefixCls } = useNameSpace('layout-menu-items')
</script>

<template>
  <template v-for="(m, _index) in props.menu" :key="_index">
    <ElSubMenu v-if="m.hasChild" :class="prefixCls" :index="m.title">
      <template #title>
        <icon class="icon" :size="menuSize" :icon="m.icon" />
        <span class="title">{{ m.title }}</span>
      </template>
      <LayoutMenuItems :menu="m.children ?? []"></LayoutMenuItems>
    </ElSubMenu>
    <ElMenuItem v-else :index="m.title">{{ m.title }}</ElMenuItem>
  </template>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-layout-menu-items';
@import url('@/assets/mixins/index.less');

.@{prefix-cls} {
  .title {
    margin-left: 5px;
    line-height: 1.5;
    .ellipsis();
  }

  .el-icon {
    height: 1.3em;
    line-height: 1.3em;
  }
}
</style>
