<script setup lang="ts">
import { useNameSpace } from '@/hooks/core/useStyle'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()

const { prefixCls } = useNameSpace('layouts-default')
const menuWidth = computed(() =>
  appStore.getMenuSetting?.collapsed ? { width: '56px' } : { width: '210px' }
)
</script>

<template>
  <div :class="prefixCls">
    <ElContainer>
      <ElAside :style="menuWidth">
        <LayoutSide></LayoutSide>
      </ElAside>
      <ElContainer>
        <ElHeader>
          <LayoutHeader></LayoutHeader>
        </ElHeader>
        <ElMain>
          <LayoutMain></LayoutMain>
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-layouts-default';

.@{prefix-cls} {
  .el-aside {
    height: 100vh;
  }

  .el-header {
    border-bottom: 1px solid #eee;
    height: 48px;
    padding: 0;
    line-height: 48px;
    background-color: #fff;
  }
}
</style>
