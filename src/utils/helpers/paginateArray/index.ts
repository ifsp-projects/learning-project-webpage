import { PaginateArrayProps } from './types'

export const paginateArray = <T>({
  array,
  page,
  limit
}: PaginateArrayProps & { array: T[] }): {
  paginatedArray: T[]
  pageAmount: number
} => {
  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  return {
    paginatedArray: array.slice(startIndex, endIndex),
    pageAmount: Math.ceil(array.length / limit)
  }
}
