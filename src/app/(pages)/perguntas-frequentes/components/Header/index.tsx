import { Container } from '@/components/toolkit/Container'

export const Header: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="faq-header"
      wrapperClassName="bg-slate-50 w-full py-12 lg:py-20"
    >
      <header className="mx-auto flex w-full max-w-2xl flex-col gap-2 lg:max-w-6xl">
        <p className="text-center text-sm font-medium lg:text-left lg:text-base">
          FAQ
        </p>
        <h1 className="text-center text-2xl font-semibold lg:text-left lg:text-3xl">
          Perguntas Frequentes
        </h1>
      </header>
    </Container>
  )
}
