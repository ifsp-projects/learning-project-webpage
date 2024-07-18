import { Button } from '@/components/common/Button'
import { Container } from '@/components/toolkit/Container'
import Image from 'next/image'

export const AboutUs: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="home-logged-out-about-us"
      className="flex flex-col gap-8 py-12 lg:gap-16 lg:py-20"
      wrapperClassName="bg-slate-50"
    >
      <article className="mx-auto flex max-w-xl flex-col items-center gap-2">
        <p className="text-sm font-medium text-teal-600">About us</p>
        <h1 className="text-2xl font-semibold lg:text-4xl">Quem somos?</h1>
      </article>
      <div className="flex w-full justify-between gap-8 lg:gap-12">
        <figure className="w-full max-w-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1495576775051-8af0d10f19b1?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about-us-image"
            width={400}
            height={800}
            className="rounded-sm hover:bg-transparent"
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
            maiores suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptatem veniam eaque sed unde harum nihil esse, maxime, perferendis cum ad laboriosam saepe tempora facere illo ex repellat tenetur modi?
          </p>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse
            iste non magnam facilis voluptatum nesciunt ducimus vitae porro quae
            qui repellendus odio, accusamus ratione veritatis consequatur dicta
            maiores suscipit.
          </p>
          <div className="flex h-auto w-full items-center justify-between gap-4 self-stretch">
            <div className="h-full w-full rounded-sm border border-slate-300 bg-white p-4">
              <h3 className="text-lg font-semibold text-teal-600 lg:text-2xl">
                10%
              </h3>
              <p>de alguma coisa de benefício</p>
            </div>
            <div className="h-full w-full rounded-sm border border-slate-300 bg-white p-4">
              <h3 className="text-lg font-semibold text-teal-600 lg:text-2xl">
                10%
              </h3>
              <p>de alguma coisa de benefício</p>
            </div>
          </div>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse
            iste non magnam facilis voluptatum nesciunt ducimus vitae porro quae
            qui repellendus odio, accusamus ratione veritatis consequatur dicta
            maiores suscipit.
          </p>
          <Button className="mt-4">Quero saber mais</Button>
        </article>
      </div>
    </Container>
  )
}