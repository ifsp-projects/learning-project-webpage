import { Button } from '@/components/toolkit/Button'
import { Container } from '@/components/toolkit/Container'

export const WhyUseOurPlatform: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:gap-12 lg:py-20"
      data-cid="home-why-use"
      wrapperClassName="bg-slate-900"
    >
      <h2 className="text-center text-2xl font-semibold text-slate-50 lg:text-4xl">
        Proporcionando salas virtuais para <br /> mais de +100 Instituições
      </h2>
      <p className="text-center text-sm text-slate-50 lg:text-base">
        Faça parte da nossa comunidade e começe a usufruir o quanto antes dos
        nossos serviços <br /> para lecionar as suas aulas em sua instituição
      </p>
      <Button className="mx-auto">Quero criar uma conta</Button>
    </Container>
  )
}
