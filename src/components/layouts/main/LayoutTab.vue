<script lang="ts" setup>
import { useNameSpace } from '@/hooks/core/useStyle'
import { useLayoutTab } from './src/useLayoutTab'
import { useLayoutTabDropDownMenu } from './src/useLayoutTabDropDownMenu'
import { useLayoutTabDrag } from './src/useLayoutTabDrag'

const { prefixCls } = useNameSpace('layout-tab')
const layoutTabsOperateRef = ref<any>(null)

const tabsRef = ref<any>(null)
nextTick(() => {
  const element = tabsRef.value?.$el.querySelectorAll('.el-tabs__nav')?.[0]
  const tabItemElement = element.querySelectorAll('.tab-item')
  useLayoutTabDrag(element, {
    onStart: () => {
      // 解决拖动是hover触发问题
      tabItemElement.forEach((child: HTMLElement) => {
        child.style.pointerEvents = 'none'
      })
    },
    onEnd: () => {
      tabItemElement.forEach((child: HTMLElement) => {
        child.style.pointerEvents = 'auto'
      })
    }
  })
})

const width = computed(() => {
  return `calc(100% - ${layoutTabsOperateRef.value?.getWidth()})`
})

const { tabs, activeTabsValue, removeTab } = useLayoutTab()
const { dropItems } = useLayoutTabDropDownMenu()
</script>

<template>
  <div :class="prefixCls">
    <ElTabs ref="tabsRef" v-model="activeTabsValue" type="card">
      <ElTabPane v-for="item in tabs" :key="item.name" :label="item.title" :name="item.name">
        <template #label>
          <LayoutTabDropDownMenu trigger="contextmenu" :drop-items="dropItems">
            <LayoutTabItemBox
              class="tab-item"
              :label="item.title"
              :target="item.name"
              @remove-tab="removeTab"
            >
            </LayoutTabItemBox>
          </LayoutTabDropDownMenu>
        </template>
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

@tab-height: 40px;

.@{prefix-cls} {
  border-bottom: 1px solid #f6f6f6;
  margin-top: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;

  .el-tabs {
    width: v-bind(width);

    .el-tabs__header {
      padding: 0 10px;
      height: @tab-height;
      border: unset;
      margin: 0;

      .el-tabs__nav-wrap {
        margin-bottom: 0;

        .el-tabs__nav-prev,
        .el-tabs__nav-next {
          line-height: @tab-height;
        }

        .el-tabs__nav {
          border: unset;
          margin-top: 1px;

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
    }
  }

  .menu {
    height: @tab-height;
    line-height: @tab-height;
    margin-right: 8px;
  }
}
</style>
