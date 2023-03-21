import { useAppStore } from '@/store/modules/app'
import type { Setting, MenuSetting } from '#/settings'

export const initSetting = () => {
  const appStore = useAppStore()

  appStore.setSetting({
    menuSetting: {
      collapsed: true
    } as MenuSetting
  } as Setting)
}
