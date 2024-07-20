'use client'

import Image from 'next/image'

import { EditableContentCardProps } from './types'

export const EditableContentCard: React.FC<EditableContentCardProps> = ({
  card,
  handleSelectCard,
  isSelected
}) => {
  return (
    <article
      className={`animate__animated animate__fadeIn group relative flex h-full w-full flex-1 cursor-pointer flex-col rounded-sm border border-slate-300 bg-white ring-1 duration-300 lg:max-w-xs ${isSelected ? 'ring-teal-600' : 'ring-transparent'}`}
    >
      <figure
        className="relative w-full"
        onClick={() => handleSelectCard(card.id)}
      >
        <Image
          alt={card.title}
          className="object-cover"
          height={600}
          src="https://png.pngtree.com/background/20220731/original/pngtree-green-tea-gradient-glassmorphism-background-picture-image_1908813.jpg"
          width={600}
        />
      </figure>
      <div
        className="flex h-full flex-col justify-between gap-4 p-4"
        onClick={() => handleSelectCard(card.id)}
      >
        <div className="flex flex-col gap-4">
          <p className="line-clamp-2 font-semibold">{card.title}</p>
          <p className="line-clamp-3 text-xs text-slate-500">
            {card.description}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="rounded-sm bg-gradient-to-br from-teal-600 to-teal-500 px-4 py-2 text-xs text-white transition-all duration-300 hover:brightness-105">
            Editar
          </button>
          <button className="rounded-sm bg-white px-4 py-2 text-xs transition-all duration-300 hover:bg-slate-100">
            Remover
          </button>
        </div>
      </div>
    </article>
  )
}
