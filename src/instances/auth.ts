import { BASE_URL } from '@/environments/baseUrl'
import { Auth } from '@/services/auth'

export const auth = new Auth(BASE_URL || 'http://localhost:3000')
