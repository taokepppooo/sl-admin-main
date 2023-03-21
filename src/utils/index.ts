import { cloneDeep, isObject } from 'lodash-es'

export const deepClone = (source: any = {}, target: any = {}) => {
  let key: string
  const clone = cloneDeep(source)
  for (key in target) {
    clone[key] = isObject(clone[key]) ? deepClone(clone[key], target[key]) : target[key]
  }

  return clone
}
