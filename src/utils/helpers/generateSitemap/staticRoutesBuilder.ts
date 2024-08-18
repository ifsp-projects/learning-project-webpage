import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/environments/baseUrl'

import { routeBuilder } from './routeBuilder'

export const staticRoutesBuilder = (locale: string, lastModified: Date) => {
  const routesArray = []

  const processRoutes = (pages: string[]) => {
    for (let index = 0; index < pages.length; index++) {
      const route = pages[index]
      if (route) {
        const formattedRoute = `${BASE_URL}${route}`
        routesArray.push(routeBuilder(formattedRoute, lastModified, '1.0'))
      }
    }
  }

  processRoutes(PATHS)
}
