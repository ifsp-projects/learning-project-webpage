/* eslint-disable @typescript-eslint/no-explicit-any */
import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/environments/baseUrl'

import { routeBuilder } from './routeBuilder'

export const staticRoutesBuilder = (locale: string, lastModified: Date) => {
  const routesArray = []

  const processRoutes = (pages: any) => {
    for (const indexRoute of Object.keys(pages)) {
      const route = pages[indexRoute]
      if (route) {
        const formattedRoute = `${BASE_URL}${route}`
        routesArray.push(routeBuilder(formattedRoute, lastModified, '1.0'))
      }
    }
  }

  processRoutes(PATHS)
}
