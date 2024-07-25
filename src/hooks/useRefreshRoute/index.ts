import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { UseRefreshRouteProps } from './types'

const useRefreshRoute = ({
  onRefresh,
  scroll = true
}: UseRefreshRouteProps) => {
  const router = useRouter()
  const [refreshed, setRefreshed] = useState(false)

  const refreshRoute = useCallback(async () => {
    router.refresh()

    if (scroll) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
    setRefreshed(true)
  }, [router, scroll])

  useEffect(() => {
    if (refreshed && onRefresh) {
      onRefresh()
      setRefreshed(false)
    }
  }, [refreshed, onRefresh])

  return { refreshRoute }
}

export default useRefreshRoute
