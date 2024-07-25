export interface UsePaginationOpts {
  incremental?: boolean
}

export interface PaginationResult<T> {
  goToPage(page: number): void
  isLast: boolean
  nextPage(): void
  numberOfPages: number
  page: number
  paginatedItems: T[]
  reset(): void
}
