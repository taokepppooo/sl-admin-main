import { createContext, useContext } from '@/hooks/core/useContext'

export interface AppProviderContext {
  prefixCls: string
}

const key: InjectionKey<any> = Symbol()

export const createAppProviderContext = (context: AppProviderContext) => {
  createContext(context, key)
}

export const useAppProviderContext = () => {
  return useContext(key)
}
