import { BASE_URL } from '@/constants/environments/baseUrl'

import { routeBuilder } from './routeBuilder'

export const homepageRouteBuilder = (locale, lastModified) => {
  const homeRoute = {
    url: `${BASE_URL}${locale !== 'pt' ? `/${locale}` : ''}`,
    lastModified,
    priority: '1.0'
  }

  return routeBuilder(homeRoute.url, homeRoute.lastModified, homeRoute.priority)
}
