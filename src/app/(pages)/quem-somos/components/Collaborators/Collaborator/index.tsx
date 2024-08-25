import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { Anchor } from '@/components/toolkit/Anchor'

import { COMPANY_LOGOS } from '../data'
import { CollaboratorCardProps } from './types'

export const CollaboratorCard: React.FC<CollaboratorCardProps> = ({ copy }) => {
  return (
    <div className="flex justify-between gap-4 rounded-sm border border-slate-100 bg-white p-4">
      <figure className="w-auto">
        <Image
          alt={copy.name}
          className="rounded-sm object-cover selection:bg-transparent"
          height={80}
          src={copy.profilePicture}
          width={80}
        />
      </figure>
      <article className="flex w-full flex-col gap-4">
        <article className="flex w-full flex-col">
          <p className="text-sm font-semibold">{copy.name}</p>
          <p className="text-xs text-slate-500">{copy.description}</p>
        </article>
        <ul className="flex min-h-[60px] w-full flex-wrap gap-3 overflow-hidden">
          {copy.technologies.map((technology: string, index: number) => (
            <li
              className="h-fit rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500"
              key={`${technology}-${index}`}
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="flex w-full items-center justify-between">
          <figure className="w-full">
            <Image
              alt={copy.company}
              className="selection:bg-transparent"
              height={30}
              src={COMPANY_LOGOS[copy.company]}
              width={60}
            />
          </figure>
          <div className="mt-4 flex w-full items-center justify-end gap-3">
            {copy.github ? (
              <Anchor href={copy.github} target="_blank" variant="custom">
                <FaGithub
                  className="transition-default cursor-pointer transition-all hover:brightness-110"
                  fill="#334155"
                  size={20}
                />
              </Anchor>
            ) : null}
            {copy.linkedin ? (
              <Anchor href={copy.linkedin} target="_blank" variant="custom">
                <FaLinkedin
                  className="transition-default cursor-pointer transition-all hover:brightness-110"
                  fill="#334155"
                  size={20}
                />
              </Anchor>
            ) : null}
          </div>
        </div>
      </article>
    </div>
  )
}
