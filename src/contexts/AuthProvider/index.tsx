'use client'

import { SessionProvider } from 'next-auth/react'
import React, { createContext, useContext } from 'react'

const SessionContext = createContext(null)

export const useSessionContext = () => useContext(SessionContext)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return <SessionProvider>{children}</SessionProvider>
}
