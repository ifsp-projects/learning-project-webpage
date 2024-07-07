import Image from 'next/image'
import { Breadcrumb } from '../Breadcrumb'
import { ContentCardProps } from './types'

export const ContentCard: React.FC<ContentCardProps> = ({ card }) => {
  return (
    <article className="cursor-pointer group max-w-xs relative flex h-full w-full flex-1 flex-col rounded-sm border border-slate-300 bg-white ring-1 ring-transparent duration-300 hover:border-blue-500 hover:ring-blue-500">
      <figure className="relative">
        <Image
          src="https://t3.ftcdn.net/jpg/01/20/39/22/360_F_120392263_rQz9G8tZXxW66XEjSccKUc8m94fAypng.jpg"
          alt={card.title}
          width={400}
          height={400}
          className="object-cover opacity-10"
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
          <p className='text-sm text-slate-400'>{card.modules} módulos • </p>
          <p className='text-sm text-slate-400'>{card.classes} aulas totais</p>
        </div>
      </div>
    </article>
  )
}
