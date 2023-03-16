import { defineStore } from 'pinia'
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
  }
})
