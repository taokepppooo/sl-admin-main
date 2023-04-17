<script setup lang="ts">
import type { PropType } from 'vue'
import type { DropDownMenuItem } from './src/useLayoutTabDropDownMenu'
const props = defineProps({
  dropItems: { type: Array as PropType<DropDownMenuItem[]>, require: true }
})

const dropDownMenuRef = ref<any>(null)
const { dropItems } = toRefs(props)

const itemClick = (e: MouseEvent, item: DropDownMenuItem) => {
  if (item.disabled) {
    return
  }

  dropDownMenuRef.value.hideMenuByClickItem()
}
</script>

<template>
  <DropDownMenu ref="dropDownMenuRef">
    <slot></slot>
    <template #menu>
      <DropdownItems>
        <DropdownItem
          v-for="item in dropItems"
          :key="item.label"
          :icon="item.icon"
          :disabled="item.disabled"
          @click="(e: MouseEvent) => itemClick(e, item)"
        >
          {{ item.label }}</DropdownItem
        >
      </DropdownItems>
    </template>
  </DropDownMenu>
</template>

<style lang="less"></style>
