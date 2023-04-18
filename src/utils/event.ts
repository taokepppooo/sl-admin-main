import { isArray } from 'lodash-es'

export const isEventType = (trigger: Array<String> | String, type: String) => {
  if (isArray(trigger)) {
    return trigger.includes(type)
  }

  return trigger === type
}

export const whenTrigger = (trigger: Array<String> | String, type: String, handler: () => void) => {
  isEventType(trigger, type) && handler()
}
