import { GetUrlWithParamsProps } from './types'

export const getUrlWithParams = ({
  baseUrl = '',
  endpoint,
  params
}: GetUrlWithParamsProps): string => {
  try {
    const url = baseUrl + endpoint

    const queryString = Object.entries(params || {}).reduce(
      (acc, [key, value], index, array) => {
        const encodedValue = encodeURIComponent(
          typeof value === 'object' ? JSON.stringify(value) : value.toString()
        )
        const pair = `${encodeURIComponent(key)}=${encodedValue}`
        return acc + pair + (index < array.length - 1 ? '&' : '')
      },
      ''
    )

    const middle = url.includes('?') ? '&' : '?'

    return `${url}${queryString ? middle : ''}${queryString}`
  } catch (error) {
    console.error(error)
    return ''
  }
}
