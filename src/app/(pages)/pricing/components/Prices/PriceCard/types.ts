import { PricePlanProps } from '../types'

export interface PriceCardProps {
  colors: {
    text: string
    className: string
    background: string
  }
  copy: PricePlanProps
}
