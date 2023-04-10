export interface TabHookInParam {
  activeTabsValue: { value: string }
  tabs: { value: Array<Tab> }
}

export interface Tab {
  title: string
  name: string
}
