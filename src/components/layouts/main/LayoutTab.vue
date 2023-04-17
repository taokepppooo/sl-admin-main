<script lang="ts" setup>
import { useNameSpace } from '@/hooks/core/useStyle'
import { useLayoutTab } from './src/useLayoutTab'
import { useLayoutTabDropDownMenu } from './src/useLayoutTabDropDownMenu'

const { prefixCls } = useNameSpace('layout-tab')
const layoutTabsOperateRef = ref<any>(null)

const width = computed(() => {
  return `calc(100% - ${layoutTabsOperateRef.value?.getWidth()})`
})

const { tabs, activeTabsValue, removeTab } = useLayoutTab()
const { dropItems } = useLayoutTabDropDownMenu()
</script>

<template>
  <div :class="prefixCls">
    <ElTabs v-model="activeTabsValue" type="card">
      <ElTabPane v-for="item in tabs" :key="item.name" :label="item.title" :name="item.name">
        <template #label>
          <LayoutTabDropDownMenu :drop-items="dropItems">
            <LayoutTabItemBox :label="item.title" :target="item.name" @remove-tab="removeTab">
            </LayoutTabItemBox>
          </LayoutTabDropDownMenu>
        </template>
        {{ item.title }}
      </ElTabPane>
    </ElTabs>

    <span class="menu">
      <LayoutTabsOperate ref="layoutTabsOperateRef"></LayoutTabsOperate>
    </span>
  </div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-layout-tab';
@import url('./src/index.less');

.@{prefix-cls} {
  margin-top: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;

  .el-tabs {
    width: v-bind(width);

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
