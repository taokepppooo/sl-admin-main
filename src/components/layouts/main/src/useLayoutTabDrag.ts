import { useSortable } from '@/hooks/util/useSortable'
import type { SortableOptions } from 'sortablejs'

export const useLayoutTabDrag = (el: HTMLElement, options?: SortableOptions) => {
  if (!el) {
    return
  }

  const { init } = useSortable(el, options)

  init()
}
