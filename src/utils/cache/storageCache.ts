import { WebStorage } from './storage'

const createWebStorage = (storage: Storage) => {
  return WebStorage.getInstance({ storage })
}

export const createSessionStorage = () => {
  return StorageCache.getInstance({ storage: createWebStorage(sessionStorage) })
}

export const createLocalStorage = () => {
  return StorageCache.getInstance({ storage: createWebStorage(localStorage) })
}

export interface StorageCacheOptions {
  storage: WebStorage
}

export class StorageCache {
  private static instance: StorageCache
  private storage: WebStorage

  private constructor({ storage }: StorageCacheOptions) {
    this.storage = storage
  }

  public static getInstance({ storage }: StorageCacheOptions): StorageCache {
    if (!StorageCache.instance) {
      StorageCache.instance = new StorageCache({ storage })
    }
    return StorageCache.instance
  }

  set(key: string, value: object) {
    this.storage.set(key, value)
  }
  get(key: string) {
    return this.storage.get(key)
  }
  remove(key: string) {
    this.storage.remove(key)
  }
  clear() {
    this.storage.clear()
  }
}
