import { useAppStore } from '@/store/modules/app'
import type { MenuSetting } from '#/settings'

export const initSetting = () => {
  const appStore = useAppStore()

  appStore.setSetting({
    menuSetting: {
      collapsed: true
    } as MenuSetting
  })
}
