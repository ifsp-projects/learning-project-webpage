import axios, { AxiosInstance } from 'axios'

import { SUPABASE_API_HEADERS } from '@/constants/headers/supabase'
import { supabaseBaseUrl } from '@/environments/supbaseBaseUrl'

import { Classes } from './classes'
import { Lectures } from './lectures'
import { Organizations } from './organizations'

export class Supabase {
  private instance: AxiosInstance

  public classes: Classes
  public lectures: Lectures
  public organizations: Organizations

  constructor() {
    this.instance = axios.create({
      baseURL: supabaseBaseUrl,
      headers: SUPABASE_API_HEADERS
    })

    this.classes = new Classes(this.instance)
    this.lectures = new Lectures(this.instance)
    this.organizations = new Organizations(this.instance)
  }
}
