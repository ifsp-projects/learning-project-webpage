import { Container } from '@/components/toolkit/Container'

import { SERVICES_DATA } from './data'
import { ServiceCard } from './ServiceCard'

export const OurServices: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:gap-16 lg:py-20"
      data-cid="home-logged-out-services"
    >
      <article className="mx-auto flex max-w-xl flex-col items-center gap-2 lg:gap-4">
        <p className="text-sm font-medium text-teal-600">Nossos Serviços</p>
        <h1 className="text-2xl font-semibold lg:text-4xl">
          O Que Providenciamos
        </h1>
        <p className="text-center text-sm">
          Nós fornecemos as melhores features aos nossos usuários. Sempre
          focados na satisfação e experiência em nossa plataforma
        </p>
      </article>
      <ul className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between lg:gap-8">
        {SERVICES_DATA.map((service, index: number) => (
          <ServiceCard copy={service} key={`${service.title}-${index}`} />
        ))}
      </ul>
    </Container>
  )
}
