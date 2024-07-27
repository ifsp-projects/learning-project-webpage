import { Container } from '@/components/toolkit/Container'

export const Tests: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="classroom-testes"
    >
      <section className="flex w-full flex-col gap-8 rounded-sm border border-slate-300 bg-white px-4 py-8">
        <h2 className="text-lg font-semibold lg:text-xl">Avaliações</h2>
      </section>
    </Container>
  )
}
