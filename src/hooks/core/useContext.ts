export const createContext = <T>(context: T, key: InjectionKey<T> = Symbol()) => {
  provide(key, context)
}

export const useContext = <T>(key: InjectionKey<T> = Symbol(), defaultValue?: T) => {
  return inject(key, defaultValue)
}
