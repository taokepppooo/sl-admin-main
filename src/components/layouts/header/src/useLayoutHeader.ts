import type { HeaderIcon } from '@/components/icon/src/type'

export const useLayoutHeader = () => {
  const headerIcon = unref<HeaderIcon>({
    size: '18',
    hover: {
      width: 35,
      height: '100%'
    }
  })
  return {
    headerIcon
  }
}
