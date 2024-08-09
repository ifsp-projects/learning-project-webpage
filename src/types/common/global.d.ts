import { DefaultSession } from 'next-auth'

import { User } from '../auth/user'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: User
  }
}
