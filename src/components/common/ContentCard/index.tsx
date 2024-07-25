import Image from 'next/image'

import { Breadcrumb } from '../Breadcrumb'
import { ContentCardProps } from './types'

export const ContentCard: React.FC<ContentCardProps> = ({ card }) => {
  return (
    <article className="group relative flex h-full w-full flex-1 cursor-pointer flex-col rounded-sm border border-slate-300 bg-white ring-1 ring-transparent duration-300 hover:border-blue-500 hover:ring-blue-500 lg:max-w-xs">
      <figure className="relative w-full">
        <Image
          alt={card.title}
          className="object-cover"
          height={600}
          src="https://png.pngtree.com/background/20220731/original/pngtree-green-tea-gradient-glassmorphism-background-picture-image_1908813.jpg"
          width={600}
        />
      </figure>
      <div className="flex h-full flex-col justify-between gap-4 p-4">
        <div className="flex flex-col gap-4">
          <Breadcrumb
            items={[
              {
                name: card.title,
                href: card.slug
              }
            ]}
          />
          <p className="line-clamp-2 font-semibold duration-default group-hover:text-blue-500">
            {card.title}
          </p>
          <p className="line-clamp-3 text-xs text-slate-500">
            {card.description}
          </p>
        </div>
        <div className="flex gap-2">
          <p className="text-sm text-slate-400">{card.modules} módulos • </p>
          <p className="text-sm text-slate-400">{card.classes} aulas totais</p>
        </div>
      </div>
    </article>
  )
}
