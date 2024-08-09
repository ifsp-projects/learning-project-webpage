'use client'

import { ReadonlyURLSearchParams } from 'next/navigation'

import { GetAuthFormSearchParamsDataReturn } from './types'

export const getAuthFormSearchParamsData = (
  searchParams: ReadonlyURLSearchParams
): GetAuthFormSearchParamsDataReturn => {
  const searchParamShouldAuthenticate =
    searchParams.get('should_authenticate') === 'true'
  const searchParamRedirectUrl = searchParams.get('auth_redirect') ?? undefined

  return {
    searchParamShouldAuthenticate,
    searchParamRedirectUrl
  }
}
