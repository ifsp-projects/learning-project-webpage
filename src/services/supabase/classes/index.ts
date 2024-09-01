import { AxiosInstance } from 'axios'

export class Classes {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }
}
