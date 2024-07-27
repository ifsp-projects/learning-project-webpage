import { Container } from '@/components/toolkit/Container'

export const Activities: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8"
      data-cid="classroom-activities"
    >
      <h2 className="text-lg font-semibold lg:text-xl">
        Atividades
      </h2>
    </Container>
  )
}
