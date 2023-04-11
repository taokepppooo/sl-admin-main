import type { TabHookInParam } from './types'

export const useLayoutTab = ({ activeTabsValue, tabs }: TabHookInParam) => {
  const removeTab = (target: string) => {
    const items = tabs
    let activeName = activeTabsValue.value
    if (activeName === target) {
      items.forEach((item, index) => {
        if (item.name === target) {
          const nextTab = items[index + 1] || items[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    activeTabsValue.value = activeName
    tabs = items.filter((item) => item.name !== target)
  }

  return {
    removeTab
  }
}
