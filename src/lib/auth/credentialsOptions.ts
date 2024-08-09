import { User as NextAuthUser } from 'next-auth'

import { auth } from '@/instances/auth'
import { User } from '@/types/auth/user'

export const credentialsOptions = {
  id: 'credentials',
  name: 'credentials',
  credentials: {
    email: {
      label: 'email',
      type: 'email'
    },
    codeConfirm: { label: 'codeConfirm', type: 'string' }
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async authorize(credentials: string) {
    const userData: User =
      (await auth.users.loginUser(credentials)) || ({} as User)

    console.log(userData)

    return {} as unknown as NextAuthUser
  }
}
