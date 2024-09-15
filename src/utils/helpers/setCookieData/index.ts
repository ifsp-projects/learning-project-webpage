'use server'

import { cookies } from 'next/headers'

export const setCookieData = async (
  cookieName: string,
  cookieValue: string,
  expirationDays?: number
) => {
  const cookieStore = cookies()

  const options: { expires?: Date } = {}

  if (expirationDays !== undefined) {
    options.expires = new Date(
      Date.now() + expirationDays * 24 * 60 * 60 * 1000
    )
  }

  cookieStore.set(cookieName, cookieValue, options)
}
