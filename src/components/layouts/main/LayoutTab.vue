<script lang="ts" setup>
import { useNameSpace } from '@/hooks/core/useStyle'

const { prefixCls } = useNameSpace('layout-tab')

let tabIndex = 2
const activeTabsValue = ref('1')
const tabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content2222222222224444444444444444444'
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content'
  }
])

const addTab = () => {
  const newTabName = `${++tabIndex}`
  tabs.value.push({
    title: 'New Tab',
    name: newTabName,
    content: 'New Tab content'
  })
  activeTabsValue.value = newTabName
}

const removeTab = (target: string) => {
  const items = tabs.value
  let activeName = activeTabsValue.value
  if (activeName === target) {
    items.forEach((item, index) => {
      if (item.name === target) {
        const nextTab = items[index + 1] || items[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  tabs.value = items.filter((item) => item.name !== target)

  activeTabsValue.value = activeName
}
</script>

<template>
  <div :class="prefixCls">
    <ElTabs v-model="activeTabsValue" type="card">
      <ElTabPane v-for="item in tabs" :key="item.name" :label="item.title" :name="item.name">
        <template #label>
          <LayoutTabItemBox :label="item.content" :target="item.name" @remove-tab="removeTab">
          </LayoutTabItemBox>
        </template>
        {{ item.content }}
      </ElTabPane>
    </ElTabs>

    <span class="menu">
      <ElButton size="small" @click="addTab()"> add tab </ElButton>
    </span>
  </div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-layout-tab';
@import url('./src/index.less');

.@{prefix-cls} {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;

  .el-tabs {
    width: calc(100% - 80px);

    .el-tabs__header {
      margin: 0;
      border: unset;

      .el-tabs__nav {
        border: unset;

        .el-tabs__item {
          border: unset;
          padding: 0 15px;
        }

        .el-tabs__item.is-active {
          position: relative;
          z-index: 2;

          .outside-circle {
            &::before,
            &::after {
              .before-after();
            }

            &::before {
              left: -10px;
              .before-after-style(0, var(--el-color-primary-light-9));
            }

            &::after {
              right: -10px;
              .before-after-style(100%, var(--el-color-primary-light-9));
            }
          }
        }

        .el-tabs__item:not(.is-active) {
          position: relative;
          z-index: 1;

          .outside-circle {
            background-color: unset;
            color: var(--el-nav-tab-item-hover-color);

            &:hover {
              background: var(--el-nav-tab-item-hover-bg);
              color: var(--el-nav-tab-item-hover-color);
            }

            &:hover::before,
            &:hover::after {
              .before-after();

              background: var(--el-nav-tab-item-hover-bg);
            }

            &:hover::before {
              left: -10px;

              .before-after-style(0, var(--el-nav-tab-item-hover-bg));
            }

            &:hover::after {
              right: -10px;

              .before-after-style(100%, var(--el-nav-tab-item-hover-bg));
            }
          }
        }

        .el-tabs__item:not(:first-child) {
          margin-left: -40px;
        }
      }
    }

    .el-tabs__content {
      padding: 10px;
    }
  }

  .menu {
    height: 38px;
    line-height: 38px;
    margin-right: 8px;
  }
}
</style>
