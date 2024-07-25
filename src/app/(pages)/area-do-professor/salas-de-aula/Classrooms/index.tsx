'use client'

import { useState } from 'react'

import { Button } from '@/components/common/Button'
import { Container } from '@/components/toolkit/Container'
import { SeeLessButton } from '@/components/toolkit/SeeLessButton'
import SeeMoreButton from '@/components/toolkit/SeeMoreButton'
import { usePagination } from '@/hooks/usePagination'

import { CreateClassroomModal } from './CreateClassroomModal'
import { FAKE_DATA } from './data'
import { EditableContentCard } from './EditableContentCard'

export const Classrooms: React.FC = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([])
  const [isCreateClassroomOpen, setIsCreateClassroomOpen] =
    useState<boolean>(false)

  const { isLast, nextPage, reset, paginatedItems } = usePagination(
    FAKE_DATA,
    8,
    {
      incremental: true
    }
  )

  const handleSelectCard = (id: number) => {
    if (selectedCards.includes(id)) {
      setSelectedCards(selectedCards.filter(currentId => currentId !== id))
    } else {
      setSelectedCards([...selectedCards, id])
    }
  }

  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:py-20"
      data-cid="my-classes"
    >
      <div className="flex w-full items-center justify-between">
        <h2 className="w-full text-lg font-semibold lg:text-2xl">
          Minhas Salas de Aula
        </h2>
        <div className="flex w-full justify-end gap-4 lg:gap-4">
          <Button
            className="md:text-sm"
            onClick={() => setIsCreateClassroomOpen(!isCreateClassroomOpen)}
          >
            Adicionar Sala
          </Button>
          <Button
            className={`transition-colors duration-300 ease-in-out md:text-sm ${selectedCards.length ? 'bg-gradient-to-br !from-rose-600 !to-rose-500' : 'cursor-not-allowed bg-gradient-to-br !from-slate-400 !to-slate-400 text-slate-500'}`}
          >
            Remover Tudo
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {paginatedItems.map((card, index: number) => (
          <EditableContentCard
            card={card}
            handleSelectCard={handleSelectCard}
            isSelected={selectedCards.includes(card.id)}
            key={`${card.title}-${index}`}
          />
        ))}
      </div>
      {isLast ? (
        <SeeLessButton onClick={reset} />
      ) : (
        <SeeMoreButton onClick={nextPage} />
      )}
      <CreateClassroomModal
        isOpen={isCreateClassroomOpen}
        setIsOpen={setIsCreateClassroomOpen}
      />
    </Container>
  )
}
