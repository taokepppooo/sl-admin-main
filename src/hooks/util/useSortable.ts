import type { Options } from 'sortablejs'

export const useSortable = (el: HTMLElement, options?: Options) => {
  ;(async () => {
    if (!el) return

    const Sortable = (await import('sortablejs')).default
    Sortable.create(unref(el), {
      animation: 300,
      delay: 300,
      delayOnTouchOnly: true,
      ...options
    })
  })()
}
