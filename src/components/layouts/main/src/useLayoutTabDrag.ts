import { useSortable } from '@/hooks/util/useSortable'

export const useLayoutTabDrag = (el: HTMLElement) => {
  if (!el) {
    return
  }

  useSortable(el)
}
