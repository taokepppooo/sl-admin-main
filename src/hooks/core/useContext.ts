export const createContext = (context: any, key: InjectionKey<any> = Symbol()) => {
  provide(key, context)
}

export const useContext = (key: InjectionKey<any> = Symbol()) => {
  return inject(key)
}
