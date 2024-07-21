import { auth } from '@/instances/auth'

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
  async authorize(credentials: any) {
    await auth.users.loginUser()
    console.log(credentials)
  }
}
