import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { HandleRemoveParamData, HandleSetParamData } from './types'

export const useHandleSearchParams = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const params = new URLSearchParams(searchParams.toString())

  const handleSetParam = ({ label, value }: HandleSetParamData) => {
    params.set(label, value)

    const newUrl = `${pathname}?${params.toString()}`

    router.push(newUrl, {
      scroll: false
    })
  }

  const handleRemoveParam = ({ label }: HandleRemoveParamData) => {
    params.delete(label)

    const newUrl = `${pathname}?${params.toString()}`

    router.replace(newUrl, {
      scroll: false
    })
  }

  const searchParamsMap = new Map(searchParams)
  const searchParamsObject = Object.fromEntries(searchParamsMap)

  return {
    searchParams,
    searchParamsMap,
    searchParamsObject,
    handleSetParam,
    handleRemoveParam
  }
}
