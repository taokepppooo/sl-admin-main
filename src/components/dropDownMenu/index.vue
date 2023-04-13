<script setup lang="ts">
import { useNameSpace } from '@/hooks/core/useStyle'

const { prefixCls } = useNameSpace('drop-down-menu')

const isMenuVisible = ref(false)
const menuX = ref(0)
const menuY = ref(0)
const popperRef = ref(null)

const showMenu = (event: MouseEvent) => {
  menuX.value = event.clientX
  menuY.value = event.clientY

  isMenuVisible.value = true
  document.addEventListener('click', closeOtherMenus)
  document.addEventListener('mousedown', closeOtherMenus)
  document.addEventListener('mouseup', closeOtherMenus)
  document.addEventListener('contextmenu', closeOtherMenus)
}

const closeOtherMenus = () => {
  const popper = document.querySelectorAll('body > .popper-wrapper')
  popper.forEach((element) => {
    if (element !== popperRef.value) {
      element.remove()
    }
  })
}

onUnmounted(() => {
  document.removeEventListener('click', closeOtherMenus)
  document.removeEventListener('mousedown', closeOtherMenus)
  document.removeEventListener('mouseup', closeOtherMenus)
  document.removeEventListener('contextmenu', closeOtherMenus)
})
</script>

<template>
  <div :class="prefixCls" @contextmenu.prevent="showMenu($event)">
    <slot></slot>
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isMenuVisible"
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