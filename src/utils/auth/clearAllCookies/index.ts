'use server'

import { cookies } from 'next/headers'

export const clearAllCookies = async () => {
  try {
    const cookie = cookies()

    const allCookies = cookie.getAll()

    for (const [key] of Object.entries(allCookies)) {
      cookie.delete(key)
    }
  } catch (error) {
    console.error(error)
  }
}
