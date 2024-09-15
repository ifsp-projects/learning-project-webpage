import { NextRequest, NextResponse } from 'next/server'

import {
  CLIENT_ID_COOKIE_OPTIONS,
  COOKIE,
  PREVIEW_TOKEN_COOKIE_OPTIONS
} from './constants/enums/cookie'
import { HEADERS } from './constants/enums/headers'
import { applySetCookie } from './middlewares/applySetCookie'
import { getHeaders } from './middlewares/getHeaders'
import { getSearchParamsMiddleware } from './middlewares/getSearchParams'
import { getUserAgentMiddleware } from './middlewares/getUserAgent'
import { hasUTMStoredMiddleware } from './middlewares/hasUTMStoredMiddleware'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const headers = getHeaders(request, response)
  headers.forEach((value, name) => {
    response.headers.set(name, value)
  })

  const previewCroctToken = headers.get(COOKIE.PREVIEW_TOKEN)
  const clientId = headers.get(HEADERS.CLIENT_ID)
  const userAgent = getUserAgentMiddleware(request)
  const searchParams = getSearchParamsMiddleware(request)
  const hasUtmStoredData = hasUTMStoredMiddleware(request)
  const utmStaticData = {
    utm_campaign: searchParams?.utm_campaign,
    utm_content: searchParams?.utm_content,
    utm_medium: searchParams?.utm_medium,
    utm_source: searchParams?.utm_source,
    utm_term: searchParams?.utm_term
  }

  response.cookies.set(
    COOKIE.CLIENT_ID,
    String(clientId),
    CLIENT_ID_COOKIE_OPTIONS
  )
  if (previewCroctToken === 'exit') {
    response.cookies.delete(COOKIE.PREVIEW_TOKEN)
  } else if (previewCroctToken !== null) {
    response.cookies.set(
      COOKIE.PREVIEW_TOKEN,
      previewCroctToken,
      PREVIEW_TOKEN_COOKIE_OPTIONS
    )
  }
  response.cookies.set('searchParams', JSON.stringify(searchParams))
  response.cookies.set('userAgent', userAgent)

  if (!hasUtmStoredData) {
    response.cookies.set('utmStaticData', JSON.stringify(utmStaticData), {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60)
    })
  }
  response.headers.set('current-pathname', request.nextUrl.pathname)
  response.headers.set('current-url', request.nextUrl.href)

  applySetCookie(request, response)
  return response
}

export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)']
}
