import { BASE_URL } from '@/constants/environments/baseUrl'
import { pathsObj } from '@/constants/internationalization'

import { routeBuilder } from './routeBuilder'

export const staticRoutesBuilder = (locale, lastModified) => {
  const routesArray = []
  for (const indexRoute of Object.keys(pathsObj)) {
    const route = pathsObj[indexRoute][locale]
    if (route) {
      const formattedRoute = `${BASE_URL}${
        locale !== 'pt' ? `/${locale}` : ''
      }${route}`
      routesArray.push(routeBuilder(formattedRoute, lastModified, '1.0'))
    }
  }

  return routesArray.join('')
}
