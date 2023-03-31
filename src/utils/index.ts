import { cloneDeep, isObject, isString } from 'lodash-es'
import { cssUnit } from '@/share/css-unit'

export const deepClone = (source: any = {}, target: any = {}) => {
  let key: string
  const clone = cloneDeep(source)
  for (key in target) {
    clone[key] = isObject(clone[key]) ? deepClone(clone[key], target[key]) : target[key]
  }

  return clone
}

export const toPx = (value?: string | number) => {
  if (!value) return undefined

  if (isString(value) && cssUnit.some((unit) => value.includes(unit))) {
    return value
  }

  return `${`${value}`.replace(/px/, '')}px`
}
