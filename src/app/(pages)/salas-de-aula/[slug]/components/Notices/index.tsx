import { Container } from '@/components/toolkit/Container'

export const Notices: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8"
      data-cid="classroom-notices"
    >
      <h2 className="text-lg font-semibold lg:text-xl">
        Avisos Gerais
      </h2>
    </Container>
  )
}
