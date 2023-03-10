<template>
  <div class="common-layout">
    <ElContainer>
      <ElAside>
        <LayoutMenu></LayoutMenu>
      </ElAside>
      <ElContainer>
        <ElHeader>
          <LayoutHeaderNav></LayoutHeaderNav>
        </ElHeader>
        <ElMain>
          <LayoutPageView></LayoutPageView>
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped></style>
