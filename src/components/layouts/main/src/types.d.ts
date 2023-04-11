export interface TabHookInParam {
  activeTabsValue: { value: string }
  tabs: Array<Tab>
}

export interface Tab {
  title: string
  name: string
}

export interface TabOperate {
  icon: string
  event: Function
}
