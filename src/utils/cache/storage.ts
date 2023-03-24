import { isObject } from 'lodash-es'
import type { WebStorageInstance } from './type'

class WebStorage {
  private static instance: WebStorage
  private storage: Storage

  public constructor({ storage }: WebStorageInstance, instance: WebStorage) {
    this.storage = storage
    this.instance = WebStorage.getInstance({ storage }, instance)
  }

  public static getInstance(
    { storage = sessionStorage }: WebStorageInstance,
    instance: WebStorage
  ): WebStorage {
    if (!instance) {
      instance = new WebStorage({ storage })
    }

    return instance
  }

  set(key: string, value: Object) {
    if (!isObject(value)) value = {}

    const stringData = JSON.stringify(value)
    this.storage.setItem(key, stringData)
  }
  get(key: string) {
    const value = this.storage.getItem(key)

    if (!value) return {}

    const obj = JSON.parse(value)

    return obj
  }
  remove(key: string) {
    this.storage.removeItem(key)
  }
  clear() {
    this.storage.clear()
  }
}

export class SessionWebStorage extends WebStorage {
  constructor({ storage }: WebStorageInstance) {
    super({ storage })
  }
}

export class LocalWebStorage extends WebStorage {
  constructor({ storage }: WebStorageInstance) {
    super({ storage })
  }
}
