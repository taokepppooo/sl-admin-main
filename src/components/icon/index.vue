<script setup lang="ts">
import { Icon as IconifyIcon } from '@iconify/vue'
import { useNameSpace } from '@/hooks/core/useStyle'
import type { CSSProperties, PropType } from 'vue'

const { prefixCls } = useNameSpace('icon')

const props = defineProps({
  icon: { type: String },
  hoverIcon: { type: String },
  hoverStyles: { type: Object as PropType<CSSProperties> },
  size: { type: [Number, String] }
})

const isHovering = ref(false)

const { icon, hoverIcon, size, hoverStyles } = toRefs(props)

const showIcon = hoverIcon?.value
  ? computed(() => (isHovering.value ? hoverIcon?.value : icon?.value))
  : icon?.value

const defaultStyles = reactive<CSSProperties>({})
const styles = reactive({
  data: defaultStyles
})

const mouseEnter = () => {
  isHovering.value = true

  if (hoverStyles?.value) {
    styles.data = hoverStyles?.value
  }
}
const mouseLeave = () => {
  isHovering.value = false
  styles.data = defaultStyles
}
</script>

<template>
  <div v-if="icon" :class="prefixCls">
    <IconifyIcon
      :icon="showIcon"
      :height="size"
      :width="size"
      :style="styles.data"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
    />
  </div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-icon';

.@{prefix-cls} {
  cursor: pointer;
}
</style>
