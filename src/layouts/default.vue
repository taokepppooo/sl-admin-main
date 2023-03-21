<script setup lang="ts">
import { useNameSpace } from '@/hooks/core/useStyle'

const { prefixCls } = useNameSpace('layouts-default')
</script>

<template>
  <div :class="prefixCls">
    <ElContainer>
      <ElAside>
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
    width: 210px;
    height: 100vh;
  }
}
</style>
