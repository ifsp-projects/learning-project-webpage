import { NextRequest } from 'next/server'

import { QUERY_PARAMETER } from '@/constants/enums/queryParameter'

export const getCurrentUrl = (request: NextRequest): string => {
  const url = new URL(request.nextUrl.toString())

  url.searchParams.delete(QUERY_PARAMETER.PREVIEW_TOKEN)

  return url.toString()
}
