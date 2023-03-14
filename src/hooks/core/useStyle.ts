import { useAppProviderContext } from '@/components/basic/hooks/useAppProviderContext'
export const useNameSpace = (scope: string) => {
  const values = useAppProviderContext()

  return {
    prefixCls: `${values.prefixCls}-${scope}`,
    prefixVar: values.prefixCls
  }
}
