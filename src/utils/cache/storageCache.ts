import { WebStorage } from './storage'
import type { WebStorageInstance } from './type'

export class StorageCache {
  webStorageInstance: WebStorage

  constructor({ storage }: WebStorageInstance) {
    this.webStorageInstance = WebStorage.getInstance({ storage })
  }

  set(key: string, value: Object) {
    this.webStorageInstance.set(key, value)
  }
  get(key: string) {
    return this.webStorageInstance.get(key)
  }
  remove(key: string) {
    this.webStorageInstance.remove(key)
  }
  clear() {
    this.webStorageInstance.clear()
  }
}

export const createStorage = () => {}

export const createLocalStorage = () => {}

export const createSessionStorage = () => {}
