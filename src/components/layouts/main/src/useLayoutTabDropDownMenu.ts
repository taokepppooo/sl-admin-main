export interface DropDownMenuItem {
  icon: string
  label: string
  disabled?: boolean
}

export type Trigger = 'hover' | 'click' | 'contextmenu'

export const useLayoutTabDropDownMenu = () => {
  const dropItems = reactive<DropDownMenuItem[]>([
    {
      icon: 'ep:refresh-right',
      label: '重新加载'
    },
    {
      icon: 'ep:close',
      label: '关闭标签页'
    },
    {
      icon: 'ep:d-arrow-left',
      label: '关闭左侧标签页'
    },
    {
      icon: 'ep:d-arrow-right',
      label: '关闭右侧标签页'
    },
    {
      icon: 'ep:switch',
      disabled: true,
      label: '关闭其他标签页'
    },
    {
      icon: 'ep:semi-select',
      disabled: true,
      label: '关闭全部标签页'
    }
  ])

  return {
    dropItems
  }
}
