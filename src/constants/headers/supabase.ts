import { supabaseAPK } from '@/environments/supabaseAPK'

export const SUPABASE_API_HEADERS = {
  'Content-Type': 'application/json',
  apikey: supabaseAPK || '',
  Authorization: `Bearer ${supabaseAPK || ''}`
} as const
