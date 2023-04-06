<script lang="ts" setup>
import { useNameSpace } from '@/hooks/core/useStyle'
import type { TabPaneName } from 'element-plus'

const { prefixCls } = useNameSpace('layout-tab')

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content'
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content'
  }
])

const handleTabsEdit = (targetName: TabPaneName | undefined, action: 'remove' | 'add') => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content'
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
</script>

<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    editable
    :class="prefixCls"
    @edit="handleTabsEdit"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      <template #label>
        {{ item.content }}
      </template>
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-layout-tab';
@base64-tab-item: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==');

.mask {
  -webkit-mask: @base64-tab-item;
  -moz-osx-mask: @base64-tab-item;
  mask: @base64-tab-item;
  mask-size: 100% 100%;
  -webkit-mask-size: 100% 100%;
  -moz-osx-mask-size: 100% 100%;
}

.@{prefix-cls} {
  margin-top: 5px;

  .el-tabs__header {
    margin: 0;
    border: unset;
    padding: 0 8px;

    .el-tabs__nav {
      border: unset;
      display: inline-block;
      width: auto;
      padding: 0 8px;

      .el-tabs__item {
        border: unset;
        height: 38px;
        line-height: 38px;
        padding: 0 30px;

        &:not(:first-child) {
          margin-left: -22px;
        }

        &.is-active {
          .mask();

          background: var(--el-color-primary-light-9);
          position: relative;
          z-index: 2;
        }

        &:not(.is-active):hover {
          .mask();

          position: relative;
          z-index: 1;
          background: var(--el-nav-tab-item-hover-bg);
          color: var(--el-nav-tab-item-hover-color);
        }

        &:not(.is-active).is-closable:hover {
          padding-left: 30px;
          padding-right: 25px;
        }

        &:nth-child(2):not(.is-active).is-closable:hover {
          padding-left: 30px;
        }

        .is-icon-close {
          display: inline-block;
        }
      }
    }
  }

  .el-tabs__content {
    padding: 10px;
  }
}
</style>
