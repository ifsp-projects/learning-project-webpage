import { DefaultSession } from 'next-auth'

import { User } from '../auth/user'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: User
  }
}

interface DataLayerEvent {
  event: string
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[]
  }
}

interface PagesType {
  [key: string]: {
    // Define the properties you expect for each page here
    title?: string
    description?: string
  }
}
