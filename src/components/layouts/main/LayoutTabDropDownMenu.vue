<script setup lang="ts"></script>

<template>
  <DropDownMenu>
    <slot></slot>
    <template #menu>
      <DropdownItems>
        <DropdownItem icon="ep:refresh-right">重新加载</DropdownItem>
        <DropdownItem icon="ep:close">关闭标签页</DropdownItem>
        <DropdownItem icon="ep:d-arrow-left">关闭左侧标签页</DropdownItem>
        <DropdownItem icon="ep:d-arrow-right">关闭右侧标签页</DropdownItem>
        <DropdownItem icon="ep:switch" disabled>关闭其他标签页</DropdownItem>
        <DropdownItem icon="ep:semi-select" disabled>关闭全部标签页</DropdownItem>
      </DropdownItems>
    </template>
  </DropDownMenu>
</template>

<style lang="less"></style>
