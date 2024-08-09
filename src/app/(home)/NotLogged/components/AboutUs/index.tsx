import Image from 'next/image'

import { Anchor } from '@/components/toolkit/Anchor'
import { Container } from '@/components/toolkit/Container'

export const AboutUs: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:gap-16 lg:py-20"
      data-cid="home-logged-out-about-us"
      wrapperClassName="bg-slate-50"
    >
      <article className="mx-auto flex max-w-xl flex-col items-center gap-2">
        <p className="text-sm font-medium text-green-600">About us</p>
        <h1 className="text-2xl font-semibold lg:text-4xl">Quem somos?</h1>
      </article>
      <div className="flex w-full flex-col-reverse justify-between gap-8 lg:flex-row lg:gap-12">
        <figure className="w-full lg:max-w-[400px]">
          <Image
            alt="about-us-image"
            className="rounded-sm hover:bg-transparent"
            height={800}
            src="https://images.unsplash.com/photo-1495576775051-8af0d10f19b1?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={600}
          />
        </figure>
        <article className="flex w-full flex-1 flex-col gap-4 lg:gap-6">
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse
            iste non magnam facilis voluptatum nesciunt ducimus vitae porro quae
            qui repellendus odio, accusamus ratione veritatis consequatur dicta
            maiores suscipit.
          </p>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse
            iste non magnam facilis voluptatum nesciunt ducimus vitae porro quae
            qui repellendus odio, accusamus ratione veritatis consequatur dicta
            maiores suscipit. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nemo voluptatem veniam eaque sed unde harum nihil
            esse, maxime, perferendis cum ad laboriosam saepe tempora facere
            illo ex repellat tenetur modi?
          </p>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse
            iste non magnam facilis voluptatum nesciunt ducimus vitae porro quae
            qui repellendus odio, accusamus ratione veritatis consequatur dicta
            maiores suscipit.
          </p>
          <div className="flex h-auto w-full items-center justify-between gap-4 self-stretch">
            <div className="h-full w-full rounded-sm border border-slate-300 bg-white p-4">
              <p className="text-lg font-semibold text-green-600 lg:text-2xl">
                10%
              </p>
              <p>de alguma coisa de benefício</p>
            </div>
            <div className="h-full w-full rounded-sm border border-slate-300 bg-white p-4">
              <p className="text-lg font-semibold text-green-600 lg:text-2xl">
                10%
              </p>
              <p>de alguma coisa de benefício</p>
            </div>
          </div>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse
            iste non magnam facilis voluptatum nesciunt ducimus vitae porro quae
            qui repellendus odio, accusamus ratione veritatis consequatur dicta
            maiores suscipit.
          </p>
          <Anchor className="mx-auto mt-4 lg:mx-0" href="#">
            Quero saber mais
          </Anchor>
        </article>
      </div>
    </Container>
  )
}
