import { NextRequest } from 'next/server'

import { COOKIE } from '@/constants/enums/cookie'
import { QUERY_PARAMETER } from '@/constants/enums/queryParameter'

const isPreviewTokenValid = (token: unknown): token is string => {
  if (typeof token !== 'string' || token === 'exit') {
    return false
  }

  try {
    const jwt = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString()
    )
    const now = Math.floor(Date.now() / 1000)

    return Number.isInteger(jwt.exp) && jwt.exp > now
  } catch {
    return false
  }
}

export const getCroctPreviewToken = (request: NextRequest): string | null => {
  const { searchParams } = request.nextUrl
  const previewToken =
    searchParams.get(QUERY_PARAMETER.PREVIEW_TOKEN) ??
    request.cookies.get(COOKIE.PREVIEW_TOKEN)?.value

  if (previewToken === undefined) {
    return null
  }

  if (isPreviewTokenValid(previewToken)) {
    return previewToken
  }

  return 'exit'
}
