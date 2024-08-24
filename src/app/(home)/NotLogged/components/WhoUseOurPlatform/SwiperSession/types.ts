import { Swiper } from 'swiper/types'

import { PartnerProps } from '../types'

export interface SwiperSectionProps {
  copy: PartnerProps[]
  swiperRef: (swiper: Swiper) => void
}
