<script setup lang="ts">
import { Icon as iconifyIcon } from '@iconify/vue'
import { useNameSpace } from '@/hooks/core/useStyle'

const { prefixCls } = useNameSpace('icon')

const props = defineProps({
  icon: { type: String },
  size: { type: [Number, String] }
})

const size = unref(props.size)

const isHovering = ref(false)
</script>

<template>
  <div
    v-if="icon"
    :class="prefixCls"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <iconify-icon :icon="icon" :height="size" :width="size" />
  </div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-icon';

.@{prefix-cls} {
  cursor: pointer;
}
</style>
