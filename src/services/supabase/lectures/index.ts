import { AxiosInstance } from 'axios'

export class Lectures {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }
}
