import { NextRequest } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

import { COOKIE } from '@/constants/enums/cookie'

export const getClientId = (request: NextRequest): string => {
  return (
    request.cookies.get(COOKIE.CLIENT_ID)?.value ?? uuidv4().replaceAll('-', '')
  )
}
