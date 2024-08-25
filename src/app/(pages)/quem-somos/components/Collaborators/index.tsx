import { Container } from '@/components/toolkit/Container'

import { CollaboratorCard } from './Collaborator'
import { COLLABORATORS_DATA } from './data'
import { CollaboratorProps } from './types'

export const Collaborators: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:gap-16 lg:py-20"
      data-cid="quem-somos-collaborators"
      wrapperClassName="bg-slate-50"
    >
      <article className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {COLLABORATORS_DATA.map(
          (collaborator: CollaboratorProps, index: number) => (
            <CollaboratorCard
              copy={collaborator}
              key={`${collaborator.name}-${index}`}
            />
          )
        )}
      </article>
    </Container>
  )
}
