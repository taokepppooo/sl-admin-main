import type { Tab } from './types'

export const useLayoutTab = () => {
  const activeTabsValue = ref('1')

  const tabs = ref<Tab[]>([
    {
      title: 'Tab 12222222222222222222222222222',
      name: '1'
    },
    {
      title: 'Tab 3333333333333333333333333333333333332',
      name: '2'
    },
    {
      title: 'Tab 244444444444444444444444444',
      name: '3'
    },
    {
      title: 'Tab 2',
      name: '4'
    },
    {
      title: 'Tab 2',
      name: '5'
    },
    {
      title: 'Tab 2',
      name: '6'
    },
    {
      title: 'Tab 2',
      name: '7'
    },
    {
      title: 'Tab 2',
      name: '8'
    },
    {
      title: 'Tab 2',
      name: '9'
    },
    {
      title: 'Tab 2',
      name: '10'
    },
    {
      title: 'Tab 2',
      name: '11'
    },
    {
      title: 'Tab 2',
      name: '12'
    },
    {
      title: 'Tab 2',
      name: '13'
    },
    {
      title: 'Tab 2',
      name: '14'
    },
    {
      title: 'Tab 2',
      name: '15'
    }
  ])

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
    tabs,
    activeTabsValue,
    removeTab
  }
}
