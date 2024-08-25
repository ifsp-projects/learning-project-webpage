import { Container } from '@/components/toolkit/Container'

export const Header: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:gap-16 lg:py-20"
      data-cid="quem-somos-header"
      wrapperClassName="bg-white"
    >
      <article className="flex flex-col gap-2">
        <h1 className="text-center text-2xl font-semibold lg:text-4xl">
          Quem somos nós?
        </h1>
        <p className="text-center text-sm lg:text-base">
          Conheça toda a nossa equipe responsável pelo desenvolvimento <br /> da
          plataforma Learning Project
        </p>
      </article>
    </Container>
  )
}
