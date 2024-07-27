import { Container } from '@/components/toolkit/Container'

export const Tests: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8"
      data-cid="classroom-testes"
    >
      <h2 className="text-lg font-semibold lg:text-xl">Avaliações</h2>
    </Container>
  )
}
