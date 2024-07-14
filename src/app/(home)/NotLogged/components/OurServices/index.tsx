import { Container } from '@/components/toolkit/Container'
import { SERVICES_DATA } from './data'
import { ServiceCard } from './ServiceCard'

export const OurServices: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="home-logged-out-services"
      className="flex flex-col gap-8 lg:gap-16 py-12 lg:py-20"
    >
      <article className='gap-2 lg:gap-4 max-w-xl mx-auto items-center flex flex-col'>
        <p className='font-medium text-sm text-teal-600'>Nossos Serviços</p>
        <h1 className='font-semibold text-2xl lg:text-4xl'>O Que Providenciamos</h1>
        <p className='text-sm text-center'>Nós fornecemos as melhores features aos nossos usuários. Sempre focados na satisfação e experiência em nossa plataforma</p>
      </article>
      <ul className='flex w-full lg:flex-row flex-col lg:justify-between gap-4 lg:gap-8'>
        {SERVICES_DATA.map((service, index: number) => (
          <ServiceCard copy={service} key={`${service.title}-${index}`} />
        ))}
      </ul>
    </Container>
  )
}
