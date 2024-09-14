/* eslint-disable @typescript-eslint/ban-ts-comment */
import { headers as getHeaders } from 'next/headers'

import { HEADERS } from '@/constants/enums/headers'
import type { JsonValue } from '@croct/plug-react'
import {
  EvaluationOptions as BaseOptions,
  evaluate as executeQuery
} from '@croct/plug-react/api'

export type EvaluationOptions<T extends JsonValue = JsonValue> = Omit<
  BaseOptions<T>,
  'apiKey'
>

export function croctEvaluate<T extends JsonValue>(
  query: string,
  options: EvaluationOptions<T> = {}
): Promise<T> {
  const headers = getHeaders()
  const uri = headers.get(HEADERS.REQUEST_URI)
  const referrer = headers.get(HEADERS.REFERRER)
  const clientId = headers.get(HEADERS.CLIENT_ID)
  const clientIp = headers.get(HEADERS.CLIENT_IP)
  const clientAgent = headers.get(HEADERS.USER_AGENT)
  // @ts-expect-error
  return executeQuery<T>(query, {
    apiKey: process.env.CROCT_API_KEY!,
    timeout: 100,
    ...(clientId !== null && { clientId }),
    ...(clientIp !== null && { clientIp }),
    ...(clientAgent !== null && { clientAgent }),
    ...(uri !== null
      ? {
          context: {
            page: {
              url: uri,
              ...(referrer !== null ? { referrer } : {})
            }
          }
        }
      : {}),
    extra: {
      cache: 'no-store'
    },
    ...options
  })
}
