import { CredentialsProps } from '@/types/auth/credentials'
import { User } from '@/types/auth/user'

import { CreateUser } from './types'

export class Users {
  constructor(private baseUrl: string) {
    this.baseUrl = baseUrl
  }

  public loginUser = async (
    credentials: CredentialsProps
  ): Promise<User | undefined> => {
    try {
      return {
        email: credentials.email,
        password: credentials.password
      } as User
    } catch (userLoginError) {
      console.log(userLoginError)
    }
  }

  public createUser = async ({
    email,
    fullname,
    googleId,
    profilePicture
  }: CreateUser): Promise<User | undefined> => {
    try {
      console.log('created user')
      return {} as User
    } catch (createUserError) {
      console.error(createUserError)
    }
  }

  public updateUser = async () => {
    try {
      console.log('Update User')
    } catch (updateUserError) {
      console.error(updateUserError)
    }
  }
}
