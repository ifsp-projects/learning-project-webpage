import { Users } from './users'

export class Auth {
  baseUrl: string
  users: Users

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.users = new Users(baseUrl)
  }
}
