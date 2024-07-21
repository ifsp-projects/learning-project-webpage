export class Users {
  constructor(private baseUrl: string) {
    this.baseUrl = baseUrl
  }

  public loginUser = async () => {
    try {
      console.log('login user')
    } catch (userLoginError) {
      console.log(userLoginError)
    }
  }

  public createUser = async () => {
    try {
      console.log('create user')
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
