import { Container } from '@/components/toolkit/Container'

export const Materials: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8"
      data-cid="classroom-materials"
    >
      <h2 className="text-lg font-semibold lg:text-xl">
        Materiais Complementares
      </h2>
    </Container>
  )
}
