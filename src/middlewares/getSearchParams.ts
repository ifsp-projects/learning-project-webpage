import { NextRequest } from 'next/server'

export const getSearchParamsMiddleware = (request: NextRequest) => {
  let obj = {}
  request.nextUrl.searchParams.forEach((value, key) => {
    obj = { ...obj, [key]: value }
  })
  return obj as { [key: string]: string }
}
