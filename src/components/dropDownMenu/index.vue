<script setup lang="ts">
import { whenTrigger } from '@/utils/event'
import { useNameSpace } from '@/hooks/core/useStyle'

const { prefixCls } = useNameSpace('drop-down-menu')
const { prefixCls: dropDownMenuNs } = useNameSpace('layout-tab-drop-down-menu')

const isMenuVisible = ref(false)
const menuX = ref(0)
const menuY = ref(0)
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
  menuX.value = event.clientX
  menuY.value = event.clientY
  document.addEventListener(trigger, closeOtherMenus)
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
  const popper = document.querySelectorAll('body > .popper-wrapper')
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
  <div :class="prefixCls" @contextmenu="onContextmenu" @click="onClick">
    <slot></slot>
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-show="isMenuVisible"
          ref="popperRef"
          class="popper-wrapper"
          :style="{ top: `${menuY}px`, left: `${menuX}px` }"
        >
          <slot name="menu"></slot>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-drop-down-menu';

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
