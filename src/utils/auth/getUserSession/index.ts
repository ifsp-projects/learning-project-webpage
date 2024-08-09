import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import { User } from '@/types/auth/user'

export const getUserSession = async (): Promise<User | undefined> => {
  const session = await getServerSession(authOptions)

  return session?.user
}
