import { NextRequest, NextResponse } from 'next/server'

import { HEADERS } from '@/constants/enums/headers'

import { getClientId } from './croct/getClientId'
import { getCroctPreviewToken } from './croct/getCroctPreviewToken'
import { getCurrentUrl } from './getCurrentUrl'

export const getHeaders = (
  request: NextRequest,
  response: NextResponse
): Headers => {
  const headers = new Headers(response.headers)

  headers.set(HEADERS.REQUEST_URI, getCurrentUrl(request))

  const clientId = getClientId(request)

  if (clientId !== null) headers.set(HEADERS.CLIENT_ID, clientId)

  if (request.ip !== undefined) headers.set(HEADERS.CLIENT_IP, request.ip)

  const previewToken = getCroctPreviewToken(request)

  if (previewToken !== null && previewToken !== 'exit')
    headers.set(HEADERS.PREVIEW_TOKEN, previewToken)

  return headers
}
