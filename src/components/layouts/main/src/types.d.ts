import type { DropDownMenuItem } from './src/useLayoutTabDropDownMenu'

export interface Tab {
  title: string
  name: string
}

export interface TabOperate {
  icon: string
  menuItems?: DropDownMenuItem[]
  event: Function
}
