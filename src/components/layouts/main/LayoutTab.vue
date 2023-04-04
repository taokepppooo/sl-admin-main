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
        <LayoutTabItemBox>
          {{ item.content }}
        </LayoutTabItemBox>
      </template>
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-layout-tab';

.@{prefix-cls} {
  .el-tabs__header {
    margin: 0;
    border: unset;

    .el-tabs__nav {
      border: unset;
    }

    .el-tabs__item {
      border-left: unset;
    }
  }

  .el-tabs__content {
    padding: 10px;
  }
}
</style>
