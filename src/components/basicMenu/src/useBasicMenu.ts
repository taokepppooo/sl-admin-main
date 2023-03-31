import { useAppStore } from '@/store/modules/app'
import { createLocalCache } from '@/utils/cache'
import { SETTING_KEY } from '@/enums/cache'

export const initSetting = () => {
  const appStore = useAppStore()

  const setting = createLocalCache().getItem(SETTING_KEY)
  const collapsed = setting?.menuSetting?.__value?.collapsed

  appStore.setSetting({
    menuSetting: {
      collapsed: collapsed || false
    }
  })
}
