export enum COOKIE {
  PREVIEW_TOKEN = 'preview-token',
  CLIENT_ID = 'cid'
}

export const PREVIEW_TOKEN_COOKIE_OPTIONS = {
  maxAge: 0,
  httpOnly: true,
  secure: true,
  sameSite: 'strict'
} as const

const CLIENT_ID_DURATION = 60 * 60 * 24 * 365

export const CLIENT_ID_COOKIE_OPTIONS = {
  maxAge: CLIENT_ID_DURATION,
  httpOnly: true,
  secure: true,
  sameSite: 'strict'
} as const
