import { BASE_URL } from '@/constants/environments/baseUrl'

import { fetchRoutesPosts } from './fetchRoutesPosts'
import { routeBuilder } from './routeBuilder'

export const postsRoutesBuilder = async (locale, lastModified) => {
  const routesArray = (await fetchRoutesPosts(locale))?.map(postRoute => {
    const formattedPostRoute = `${BASE_URL}/${
      locale === 'pt' ? '' : locale + '/'
    }blog/${postRoute.slug}`
    return routeBuilder(formattedPostRoute, lastModified, '0.80')
  })

  return routesArray.join('')
}
