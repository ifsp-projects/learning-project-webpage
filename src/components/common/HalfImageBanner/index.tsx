import Image from 'next/image'

import { HalfImageBannerProps } from './types'

export const HalfImageBanner: React.FC<HalfImageBannerProps> = async ({
  image,
  children,
  className
}) => {
  return (
    <section
      className={`flex flex-col-reverse overflow-hidden lg:flex-row ${className}`}
    >
      <div className="flex w-full justify-center sm:p-8 md:p-12 lg:w-1/2 lg:justify-end lg:p-16">
        <section className="w-full max-w-2xl">{children}</section>
      </div>
      <figure className="relative min-h-full w-full lg:w-1/2 2xl:max-h-[1000px]">
        <Image
          alt={image.alt}
          className="h-full w-full object-cover"
          height={image.width ? image.width : 362}
          src={image.src}
          width={image.height ? image.height : 640}
        />
      </figure>
    </section>
  )
}
