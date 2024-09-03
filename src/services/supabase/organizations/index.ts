import { AxiosInstance } from 'axios'

export class Organizations {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }
}
