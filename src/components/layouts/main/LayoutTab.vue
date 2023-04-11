<script lang="ts" setup>
import { useNameSpace } from '@/hooks/core/useStyle'
import { useLayoutTab } from './src/useLayoutTab'
import type { Tab, TabOperate } from './src/types'

const { prefixCls } = useNameSpace('layout-tab')

const activeTabsValue = ref('1')

const tabs = reactive<Tab[]>([
  {
    title: 'Tab 12222222222222222222222222222',
    name: '1'
  },
  {
    title: 'Tab 3333333333333333333333333333333333332',
    name: '2'
  },
  {
    title: 'Tab 244444444444444444444444444',
    name: '3'
  },
  {
    title: 'Tab 2',
    name: '4'
  },
  {
    title: 'Tab 2',
    name: '5'
  },
  {
    title: 'Tab 2',
    name: '6'
  },
  {
    title: 'Tab 2',
    name: '7'
  },
  {
    title: 'Tab 2',
    name: '8'
  },
  {
    title: 'Tab 2',
    name: '9'
  },
  {
    title: 'Tab 2',
    name: '10'
  },
  {
    title: 'Tab 2',
    name: '11'
  },
  {
    title: 'Tab 2',
    name: '12'
  },
  {
    title: 'Tab 2',
    name: '13'
  },
  {
    title: 'Tab 2',
    name: '14'
  },
  {
    title: 'Tab 2',
    name: '15'
  }
])

const { removeTab } = useLayoutTab({ activeTabsValue, tabs })

const tabsOperate = reactive<TabOperate[]>([
  {
    icon: 'ep:menu',
    event: () => {}
  }
])
</script>

<template>
  <div :class="prefixCls">
    <ElTabs v-model="activeTabsValue" type="card">
      <ElTabPane v-for="item in tabs" :key="item.name" :label="item.title" :name="item.name">
        <template #label>
          <LayoutTabItemBox :label="item.title" :target="item.name" @remove-tab="removeTab">
          </LayoutTabItemBox>
        </template>
        {{ item.title }}
      </ElTabPane>
    </ElTabs>

    <span class="menu">
      <Icon
        v-for="i in tabsOperate"
        :key="i.icon"
        :size="14"
        :icon="i.icon"
        :hover-styles="{ opacity: 0.7 }"
        @click="i.event"
      ></Icon>
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
      margin: 0 10px;
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
    height: 44px;
    line-height: 44px;
    margin-right: 8px;
  }
}
</style>
