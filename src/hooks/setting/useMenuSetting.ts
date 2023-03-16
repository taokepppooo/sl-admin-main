import { useAppStore } from '@/store/modules/app'

export const useMenuSetting = () => {
  const appStore = useAppStore()

  const getCollapsed = computed(() => appStore.getMenuSetting.collapsed)

  return {
    getCollapsed
  }
}
