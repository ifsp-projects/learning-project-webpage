'use client'

import { useCallback, useRef } from 'react'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'
import { Swiper } from 'swiper/types'

import { Container } from '@/components/toolkit/Container'

import { DATA } from './data'
import { SwiperSession } from './SwiperSession'

export const WhoUseOurPlatform: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null)

  const setSwiperRef = useCallback((swiper: Swiper) => {
    if (swiper) {
      swiperRef.current = swiper
    }
  }, [])

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  const previousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:gap-12 lg:py-20"
      data-cid="home-who-use"
      wrapperClassName="bg-white"
    >
      <article className="flex w-full items-center justify-between gap-4">
        <h2 className="flex w-full items-center text-xl font-semibold lg:text-2xl">
          Quem usa nossa plataforma?
        </h2>
        <div className="flex w-full items-center justify-end gap-4">
          <FiArrowLeftCircle
            className="cursor-pointer opacity-75"
            onClick={previousSlide}
            size={30}
          />
          <FiArrowRightCircle
            className="cursor-pointer opacity-75"
            onClick={nextSlide}
            size={30}
          />
        </div>
      </article>
      <div className="w-full">
        <SwiperSession copy={DATA} swiperRef={setSwiperRef} />
      </div>
    </Container>
  )
}
