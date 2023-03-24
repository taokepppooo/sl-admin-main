import type { SETTING_KEY } from '@/enums/cache'
import type { Setting } from '#/settings'

interface LocalStore {
  [SETTING_KEY]: Setting
}

type LocalKeys = keyof LocalStore

export class Cache {
  static getLocal(key: LocalKeys) {
    return localStorage.getItem(key)
  }
  static setLocal(key: LocalKeys, value: LocalStore[LocalKeys]) {
    localStorage.setItem(key, value)
  }
  static removeLocal(key: LocalKeys) {
    localStorage.removeItem(key)
  }
  static clearLocal() {
    localStorage.clear()
  }
}
