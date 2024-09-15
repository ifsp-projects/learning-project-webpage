import { NextRequest } from 'next/server'

export const hasUTMStoredMiddleware = (request: NextRequest) => {
  const utmStoredCookie = request.cookies.get('utmStaticData')
  if (utmStoredCookie) {
    const utmStoredObj = JSON.parse(utmStoredCookie.value)
    if (utmStoredObj.utm_source) return true
    else return false
  }

  return false
}
