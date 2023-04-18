<script lang="ts" setup>
import { useNameSpace } from '@/hooks/core/useStyle'
import type { CSSProperties, PropType } from 'vue'

const { prefixCls } = useNameSpace('layout-tab-item-box')

const emit = defineEmits<{
  (e: 'removeTab', target: string): void
}>()

const props = defineProps({
  label: { type: String, required: true },
  target: { type: String, required: true },
  itemStyle: { type: Object as PropType<CSSProperties> }
})

const DEFAULT_HEIGHT = '38px'
const defaultItemStyle = {
  height: DEFAULT_HEIGHT,
  'line-height': DEFAULT_HEIGHT
}
const itemStyle = reactive<CSSProperties>({
  ...defaultItemStyle,
  ...(props.itemStyle || {})
})

const removeTab = () => {
  emit('removeTab', props.target)
}
</script>
<template>
  <div :class="prefixCls">
    <div class="outside-circle" :style="itemStyle">
      <div class="label">
        <span>{{ props.label }}</span>
        <Icon
          class="icon"
          :size="14"
          icon="ep:close"
          hover-icon="ep:circle-close-filled"
          @click.stop="removeTab"
        ></Icon>
      </div>
    </div>
  </div>
</template>
<style lang="less">
@prefix-cls: ~'@{namespace}-layout-tab-item-box';
@import url('@/assets/mixins/index.less');

.@{prefix-cls} {
  display: inline-block;
  width: auto;

  .outside-circle {
    padding: 0 20px;
    text-align: center;
    cursor: pointer;
    position: relative;
    background: var(--el-color-primary-light-9);
    border-radius: 10px 10px 0 0;

    .label {
      display: flex;
      align-items: center;
      .no-select();
    }

    .icon {
      margin-left: 12px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
