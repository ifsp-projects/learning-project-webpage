/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies, headers } from 'next/headers'

import { HEADERS } from '@/constants/enums/headers'

import { CookiesUserAgent, GetMiddlewareDataReturn } from './types'

const getCookieValue = <CookieValue>(
  cookie: RequestCookie | string
): CookieValue | null => {
  if (typeof cookie === 'string') {
    try {
      return JSON.parse(cookie) as CookieValue
    } catch (error) {
      return null
    }
  }

  return (cookie?.value as CookieValue) ?? null
}

export const getMiddlewareData = (): GetMiddlewareDataReturn => {
  const cookieStore = cookies()
  const headersStore = headers()

  const cookiesUserAgent = getCookieValue<CookiesUserAgent>(
    // @ts-expect-error
    cookieStore.get('userAgent')
  )

  const cookiesSearchParams =
    cookieStore.get('searchParams') ||
    JSON.parse(
      getCookieValue<string>(cookieStore.get('searchParams') || '') || ''
    ) ||
    null
  const cookiesUtmStoredData =
    cookieStore.get('utmStaticData') ||
    JSON.parse(
      getCookieValue<string>(cookieStore.get('utmStaticData') || '') || ''
    ) ||
    null

  const headersClientId = headersStore.get(HEADERS.CLIENT_ID) ?? undefined

  return {
    cookiesUserAgent,
    cookiesSearchParams,
    headersClientId,
    cookiesUtmStoredData
  }
}
