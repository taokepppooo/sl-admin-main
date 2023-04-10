import type { TabHookInParam } from './types'

export const useLayoutTab = ({ activeTabsValue, tabs }: TabHookInParam) => {
  let tabIndex = 2

  const addTab = () => {
    const newTabName = `${++tabIndex}`
    tabs.value.push({
      title: 'New Tab',
      name: newTabName
    })

    activeTabsValue.value = newTabName
  }

  const removeTab = (target: string) => {
    const items = tabs.value
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
    tabs.value = items.filter((item) => item.name !== target)
  }

  return {
    addTab,
    removeTab
  }
}
