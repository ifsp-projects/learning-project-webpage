import { GetDynamicRouteProps } from './types'

export const getDynamicRoute = ({
  locale,
  baseRoute,
  slug
}: GetDynamicRouteProps) => {
  const baseLocale = locale === 'pt' ? '' : `/${locale}`

  return `${baseLocale}${baseRoute}/${slug}`
}
