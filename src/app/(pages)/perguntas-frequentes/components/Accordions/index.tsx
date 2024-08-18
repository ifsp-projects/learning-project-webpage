import { Container } from '@/components/toolkit/Container'

import { AccordionItem } from './AccordionItem'
import { ACCORDIONS_DATA } from './data'
import { AccordionProps } from './types'

export const Accordions: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="faq-accordions"
      wrapperClassName="bg-white w-full"
    >
      <section className="mx-auto flex w-full max-w-2xl flex-col gap-4 py-12 lg:max-w-6xl lg:gap-6 lg:py-20">
        {ACCORDIONS_DATA.map((accordion: AccordionProps, index: number) => (
          <AccordionItem copy={accordion} key={`${accordion.title}-${index}`} />
        ))}
      </section>
    </Container>
  )
}
