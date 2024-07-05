import { NextRequest, userAgent } from 'next/server'

export const getUserAgentMiddleware = (request: NextRequest) => {
  const { device } = userAgent(request)

  return device.type === 'mobile' ? 'mobile' : 'desktop'
}
