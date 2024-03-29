import { defineStore } from 'pinia'
import { deepClone } from '@/utils'
import { createLocalCache } from '@/utils/cache'
import { SETTING_KEY } from '@/enums/cache'
import type { Setting, MenuSetting } from '#/settings'

interface AppState {
  setting: Setting
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    setting: {} as Setting
  }),
  getters: {
    getMenuSetting(): MenuSetting {
      return this.setting.menuSetting
    }
  },
  actions: {
    setSetting(config: Setting): void {
      this.setting = deepClone(this.setting || {}, config)
      createLocalCache().setItem(SETTING_KEY, this.setting)
    }
  }
})
