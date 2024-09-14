/* eslint-disable @typescript-eslint/ban-ts-comment */
import { headers as getHeaders } from 'next/headers'

import { HEADERS } from '@/constants/enums/headers'
import type {
  JsonObject,
  SlotContent,
  VersionedSlotId
} from '@croct/plug-react'
import {
  DynamicContentOptions,
  fetchContent as loadContent
} from '@croct/plug-react/api'

export type FetchOptions<T extends JsonObject = JsonObject> = Omit<
  DynamicContentOptions<T>,
  'apiKey'
>

export function fetchContent<I extends VersionedSlotId, C extends JsonObject>(
  slotId: I,
  options: FetchOptions<SlotContent<I, C>> = {}
): Promise<SlotContent<I, C>> {
  const headers = getHeaders()
  const uri = headers.get(HEADERS.REQUEST_URI)
  const previewToken = headers.get(HEADERS.PREVIEW_TOKEN)
  const referrer = headers.get(HEADERS.REFERRER)
  const clientId = headers.get(HEADERS.CLIENT_ID)
  const clientIp = headers.get(HEADERS.CLIENT_IP)
  const clientAgent = headers.get(HEADERS.USER_AGENT)
  // @ts-expect-error
  const promise = loadContent<I, C>(slotId, {
    apiKey: process.env.CROCT_API_KEY!,
    timeout: 100,
    ...(previewToken !== null && { previewToken }),
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

  return promise.then(({ content }) => content)
}
