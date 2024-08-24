'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import { PartnerProps } from '../types'
import { SwiperSectionProps } from './types'

export const SwiperSession: React.FC<SwiperSectionProps> = ({
  swiperRef,
  copy
}) => {
  return (
    <Swiper
      breakpoints={{
        500: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 25
        }
      }}
      className="no-scrollbar w-full max-w-6xl"
      onSwiper={swiperRef}
      scrollbar={{ draggable: true, hide: true, el: 'no-scrollbar' }}
      slidesPerView={8}
      spaceBetween={50}
    >
      {copy.map((partner: PartnerProps, index: number) => (
        <SwiperSlide key={`${partner.title}-${index}`}>
          <div className="group flex min-h-[200px] w-full max-w-[300px] cursor-pointer flex-col items-center gap-4 rounded-sm border border-slate-300 bg-slate-50 p-6 text-slate-500">
            <figure className="h-full max-h-[60px] w-full max-w-[60px]">
              <Image
                alt={partner.title}
                className="h-[60px] w-[60px] object-contain transition-all duration-300 group-hover:scale-[1.01]"
                height={60}
                src={partner.logo}
                width={60}
              />
            </figure>
            <p className="text-center text-sm">{partner.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
