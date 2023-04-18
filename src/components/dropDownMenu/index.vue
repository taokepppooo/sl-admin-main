<script setup lang="ts">
import { subtract } from 'lodash-es'
import { whenTrigger } from '@/utils/event'
import { useNameSpace } from '@/hooks/core/useStyle'

const { prefixCls } = useNameSpace('drop-down-menu')
const { prefixCls: dropDownMenuNs } = useNameSpace('layout-tab-drop-down-menu')

const isMenuVisible = ref(false)
const menuLeft = ref(0)
const menuTop = ref(0)
const popperRef = ref<HTMLElement | null>(null)
const { isOutside } = useMouseInElement(popperRef)

const { trigger } = inject(dropDownMenuNs) as any

onMounted(() => {
  nextTick(() => {
    document.addEventListener('click', hideMenu)
    document.addEventListener('mousedown', hideMenu)
    document.addEventListener('contextmenu', hideMenu)
  })
})

onUnmounted(() => {
  document.removeEventListener('click', hideMenu)
  document.removeEventListener('mousedown', hideMenu)
  document.removeEventListener('contextmenu', hideMenu)
})

const showMenu = (event: MouseEvent) => {
  event.preventDefault()

  const { width } = useWindowSize()
  const defaultOffset = 5

  document.addEventListener(trigger, closeOtherMenus)

  const handleTimeout = () => {
    const popperWidth = popperRef.value?.offsetWidth || 0
    const isPopperWidthTooBig = subtract(width.value, event.clientX) < popperWidth

    if (isPopperWidthTooBig) {
      menuLeft.value = subtract(width.value, popperWidth)
    } else {
      menuLeft.value = event.clientX
    }

    menuTop.value = event.clientY + defaultOffset
  }

  setTimeout(handleTimeout)
}

const onContextmenu = (event: MouseEvent) => {
  whenTrigger(trigger, 'contextmenu', () => {
    showMenu(event)
  })
}

const onClick = (event: MouseEvent) => {
  whenTrigger(trigger, 'click', () => {
    showMenu(event)
  })
}

const hideMenu = () => {
  if (isMenuVisible.value && isOutside.value) {
    isMenuVisible.value = false
  }
}

const hideMenuByClickItem = () => {
  if (isMenuVisible.value) {
    isMenuVisible.value = false
  }
}

const closeOtherMenus = () => {
  const popper = Array.from(document.querySelectorAll('body > .popper-wrapper'))

  popper.forEach((element) => {
    if (element !== popperRef.value) {
      ;(element as HTMLElement).style.display = 'none'
      document.removeEventListener(trigger, closeOtherMenus)
    }
  })

  isMenuVisible.value = true
}

defineExpose({ hideMenuByClickItem })
</script>

<template>
  <span :class="prefixCls" @contextmenu="onContextmenu" @click="onClick">
    <slot></slot>
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-show="isMenuVisible"
          ref="popperRef"
          class="popper-wrapper"
          :style="{ top: `${menuTop}px`, left: `${menuLeft}px` }"
        >
          <slot name="menu"></slot>
        </div>
      </Transition>
    </Teleport>
  </span>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-drop-down-menu';

.@{prefix-cls} {
  display: inline-flex;
}

.popper-wrapper {
  position: fixed;
  background-color: white;
  z-index: 999;
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
