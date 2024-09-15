import { getSearchParamsMiddleware } from '@/middlewares/getSearchParams'
import { getUserAgentMiddleware } from '@/middlewares/getUserAgent'

export type CookiesUserAgent = ReturnType<typeof getUserAgentMiddleware>
export type CookiesSearchParams = ReturnType<typeof getSearchParamsMiddleware>

export interface GetMiddlewareDataReturn {
  cookiesSearchParams: CookiesSearchParams
  cookiesUserAgent: CookiesUserAgent | null
  cookiesUtmStoredData: {
    utm_campaign: string
    utm_content: string
    utm_medium: string
    utm_source: string
    utm_term: string
  }
  headersClientId: string | undefined
}
