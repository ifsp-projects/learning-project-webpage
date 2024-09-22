import { User as NextAuthUser } from 'next-auth'

import { auth } from '@/instances/auth'
import { CredentialsProps } from '@/types/auth/credentials'
import { User } from '@/types/auth/user'

export const credentialsOptions = {
  id: 'credentials',
  name: 'credentials',
  credentials: {
    email: { label: 'email', type: 'email' },
    password: { label: 'password', type: 'password' }
  },

  async authorize(credentials: CredentialsProps) {
    const userData: User =
      (await auth.users.loginUser(credentials)) || ({} as User)

    return userData as unknown as NextAuthUser
  }
}
