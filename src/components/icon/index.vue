<script setup lang="ts">
import { Icon as iconifyIcon } from '@iconify/vue'
import { toPx } from '@/utils'
import { useNameSpace } from '@/hooks/core/useStyle'
import type { CSSProperties } from 'vue'
import type { HeaderIconHover } from './src/type'

const { prefixCls } = useNameSpace('icon')

const props = defineProps({
  icon: { type: String },
  size: { type: [Number, String] },
  hover: { type: Object as PropType<HeaderIconHover> }
})

const size = unref(props.size)

const hoverStyle =
  props.hover &&
  unref<CSSProperties>({
    width: toPx(props.hover?.width),
    height: toPx(props.hover?.height)
  })

const isHovering = ref(false)

const classBinding = computed(() => ({
  [prefixCls]: true,
  [`${prefixCls}icon-wrapper-box`]: props.hover && isHovering.value
}))
</script>

<template>
  <div
    v-if="icon"
    :class="classBinding"
    :style="hoverStyle"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <iconify-icon :icon="icon" :height="size" :width="size" />
  </div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-icon';

.@{prefix-cls} {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.@{prefix-cls}icon-wrapper-box {
  background-color: #f6f6f6;
}
</style>
