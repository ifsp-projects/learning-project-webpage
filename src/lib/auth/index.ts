/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { credentialsOptions } from './credentialsOptions'

export const authOptions: AuthOptions = {
  // @ts-expect-error
  providers: [CredentialsProvider(credentialsOptions)],
  callbacks: {
    jwt: async data => {
      const { user, token, trigger, session } = data

      let userData: any = token.userData as any

      if (user) userData = user as unknown as any

      if (trigger === 'update') {
        userData.error = null

        if (session) {
          userData = {
            ...userData,
            ...session
          }
        }
      }

      token.userData = userData
      return token
    }
    // session: async props => {
    //   const { session, token: jwt } = props

    //   const { userData } = jwt
    //   session.user = userData

    //   return Promise.resolve(session)
    // }
  },
  pages: {
    signIn: '/?should_authenticate=true'
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' }
}
