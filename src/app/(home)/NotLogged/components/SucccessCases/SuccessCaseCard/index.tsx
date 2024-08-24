import Image from 'next/image'
import { AiOutlinePlus } from 'react-icons/ai'

import { Anchor } from '@/components/toolkit/Anchor'

import { SuccessCaseCardProps } from '../types'

export const SuccessCaseCard: React.FC<SuccessCaseCardProps> = ({ copy }) => {
  return (
    <Anchor
      className="group h-auto w-full rounded-sm"
      href="#"
      variant="custom"
    >
      <figure className="min-h-[200px] w-full overflow-hidden">
        <Image
          alt={copy.image.alt}
          className="oject-cover transition-all duration-300 group-hover:scale-105"
          height={200}
          src={copy.image.src}
          width={600}
        />
      </figure>
      <div className="flex flex-col gap-4 divide-y divide-slate-300 bg-white p-4 transition-all duration-300 group-hover:bg-slate-50 lg:gap-6 lg:px-8 lg:py-6">
        <article className="flex flex-col gap-2 lg:min-h-[140px]">
          <p className="text-base font-semibold">{copy.title}</p>
          <p className="line-clamp-3 text-sm text-slate-500">
            {copy.description}
          </p>
        </article>
        <article className="flex w-full items-center justify-between gap-4 pt-4">
          <p className="flex w-full items-center text-sm text-slate-500 transition-all duration-300 group-hover:text-slate-700">
            Ler mais
          </p>
          <figure className="flex w-full items-center justify-end">
            <AiOutlinePlus fill="#71717a" size={20} />
          </figure>
        </article>
      </div>
    </Anchor>
  )
}
