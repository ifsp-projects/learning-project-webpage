'use server'

import { cookies } from 'next/headers'

import { SetAuthFormCookiesDataProps } from './types'

export const setAuthFormCookiesData = async (
  props: SetAuthFormCookiesDataProps
) => {
  const cookie = cookies()

  Object.entries(props).forEach(([key, value]) => {
    if (value) {
      cookie.set(key, value)
    }
  })
}
