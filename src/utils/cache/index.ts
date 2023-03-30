import { StorageCache, createSessionStorage, createLocalStorage } from './storageCache'
import type { SETTING_KEY } from '@/enums/cache'
import type { Setting } from '#/settings'

export interface CacheOptions {
  storage: StorageCache
}

export interface LocalStore {
  [SETTING_KEY]: Setting
}

export interface SessionStore {
  [SETTING_KEY]: Setting
}

export class Cache<T> {
  private static instance: Cache<any>
  private storage: StorageCache

  private constructor({ storage }: CacheOptions) {
    this.storage = storage
  }

  public static getInstance<T>({ storage }: CacheOptions): Cache<T> {
    if (!Cache.instance) {
      Cache.instance = new Cache<T>({ storage })
    }
    return Cache.instance
  }

  getItem<K extends keyof T>(key: K) {
    return this.storage.get(key as string)
  }
  setItem<K extends keyof T>(key: K, value: object) {
    this.storage.set(key as string, value)
  }
  removeItem<K extends keyof T>(key: K) {
    this.storage.remove(key as string)
  }
  clear() {
    this.storage.clear()
  }
}

export const createLocalCache = () => {
  return Cache.getInstance<LocalStore>({ storage: createLocalStorage() })
}

export const createSessionCache = () => {
  return Cache.getInstance<SessionStore>({ storage: createSessionStorage() })
}
