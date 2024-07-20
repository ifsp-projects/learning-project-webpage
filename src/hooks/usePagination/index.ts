import { useEffect, useState } from 'react'

import { PaginationResult, UsePaginationOpts } from './types'

export const usePagination = <T>(
  items: T[],
  perPage: number,
  options: UsePaginationOpts = {}
): PaginationResult<T> => {
  const { incremental = false } = options

  const [page, setPage] = useState(0)
  const numberOfPages = Math.ceil(items.length / perPage)

  useEffect(() => {
    setPage(0)
  }, [perPage, items])

  const nextPage = () =>
    setPage(currentPage =>
      currentPage + 1 >= numberOfPages ? currentPage : currentPage + 1
    )

  const goToPage = (newPage: number) =>
    newPage < numberOfPages && setPage(newPage)

  const reset = () => goToPage(0)

  const startIndex = incremental ? 0 : perPage * page
  const endIndex = perPage * page + perPage

  const paginatedItems = items.slice(startIndex, endIndex)

  return {
    nextPage,
    goToPage,
    reset,
    page,
    numberOfPages,
    isLast: page === numberOfPages - 1,
    paginatedItems
  }
}
