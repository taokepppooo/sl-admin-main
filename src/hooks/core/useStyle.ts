import { useAppProviderContext } from '@/components/basic/src/useAppProviderContext'
export const useNameSpace = (scope: string) => {
  const values = useAppProviderContext()

  return {
    prefixCls: `${values.prefixCls}-${scope}`,
    prefixVar: values.prefixCls
  }
}
