import { auth } from '@/instances/auth'
import { getUserSession } from '@/utils/auth/getUserSession'

export const googleOptions = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  async profile(profile: {
    sub: string
    email: string
    picture: string
    name: string
  }) {
    const user = await getUserSession()

    const { sub: googleId, email, picture, name } = profile

    if (!user) {
      try {
        const userData = await auth.users.loginUser({
          email,
          callbackUrl: 'http://localhost:3000/',
          redirect: false
        })

        if (userData) {
          return {
            ...userData,
            profilePicture: picture,
            id: googleId
          }
        }

        const createdUserData = await auth.users.createUser({
          email,
          googleId,
          profilePicture: picture,
          fullname: name
        })

        if (createdUserData) {
          return {
            ...createdUserData,
            profilePicture: picture,
            id: googleId
          }
        }

        return null
      } catch (createUserError) {
        console.error(createUserError)
      }
    }

    return null
  }
}
