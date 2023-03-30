import { isObject } from 'lodash-es'
import type { WebStorageInstance } from './type'

export class WebStorage {
  private static instance: WebStorage
  private storage: Storage

  private constructor({ storage }: WebStorageInstance) {
    this.storage = storage
  }

  public static getInstance({ storage }: WebStorageInstance): WebStorage {
    if (!WebStorage.instance) {
      WebStorage.instance = new WebStorage({ storage })
    }
    return WebStorage.instance
  }
  set(key: string, value: object) {
    this.remove(key)

    if (!isObject(value)) value = {}

    const obj: { [key: string]: any } = {
      [key]: {}
    }

    for (const k in value) {
      if (Object.hasOwnProperty.call(value, k)) {
        const storage = obj[key]
        storage[k] = {
          __value: value[k as keyof object]
        }
      }
    }

    const stringData = JSON.stringify(obj)
    this.storage.setItem(key, stringData)
  }

  get(key: string) {
    const obj = this.storage.getItem(key)

    if (!obj) return {}

    const keyValue = JSON.parse(obj)[key]

    return keyValue || {}
  }
  remove(key: string) {
    this.storage.removeItem(key)
  }
  clear() {
    this.storage.clear()
  }
}
