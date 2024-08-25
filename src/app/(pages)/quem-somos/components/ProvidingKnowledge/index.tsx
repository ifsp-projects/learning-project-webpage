import { Container } from '@/components/toolkit/Container'

export const ProvidingKnowledge: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:gap-16 lg:py-20"
      data-cid="quem-somos-providing-knowledge"
      wrapperClassName="bg-white"
    >
      <h2 className="mx-auto w-full cursor-default text-center text-4xl font-[500]">
        Impulsionando{' '}
        <span className="bg-gradient-to-r from-indigo-900 to-pink-400 bg-clip-text text-4xl font-[500] text-transparent">
          Ensino e Organização
        </span>{' '}
        para
        <span className="bg-gradient-to-r from-indigo-900 to-pink-400 bg-clip-text text-4xl font-[500] text-transparent">
          {' '}
          milhares
        </span>{' '}
        de estudantes e escolas no mundo
      </h2>
    </Container>
  )
}
