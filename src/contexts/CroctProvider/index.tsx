'use client'

import { useEffect } from 'react'

import croct from '@croct/plug'
import { CroctProvider as Provider } from '@croct/plug-react'

import { CroctProviderProps } from './types'

export const CroctProvider: React.FC<CroctProviderProps> = ({
  children,
  clientId
}) => {
  useEffect(() => {
    if (!('croct' in window)) {
      Object.assign(window, { croct })
    }
  }, [])

  return (
    <Provider appId={process.env.NEXT_PUBLIC_CROCT_APP_ID!} clientId={clientId}>
      {children}
    </Provider>
  )
}
