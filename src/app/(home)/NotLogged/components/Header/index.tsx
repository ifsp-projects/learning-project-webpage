import Image from 'next/image'

import { Anchor } from '@/components/toolkit/Anchor'
import { Container } from '@/components/toolkit/Container'

export const Header: React.FC = () => {
  return (
    <Container
      as="section"
      className="py-12 lg:py-20"
      data-cid="home-logged-out-header"
      wrapperClassName="bg-white"
    >
      <div className="mx-auto flex w-full flex-col gap-20 lg:flex-row lg:justify-between lg:gap-12">
        <article className="flex w-full flex-col items-center gap-4 lg:items-start">
          <p className="max-w-[145px] border-indigo-500 pb-2 text-sm font-medium text-indigo-500 lg:border-b-[1.6px] lg:text-base">
            Learning Platform
          </p>
          <h1 className="text-center text-2xl font-semibold lg:text-left lg:text-4xl">
            Bem-Vindo à Melhor Plataforma de Gerenciamento Escolar
          </h1>
          <p className="text-center text-sm lg:text-left lg:text-base">
            Descubra a excelência em gerenciamento escolar com nossa plataforma
            inovadora. Simplifique suas operações e otimize a administração
            educacional.
          </p>
          <Anchor className="mt-4 lg:mt-8" href="/quem-somos">
            Quero saber mais
          </Anchor>
        </article>
        <figure className="flex w-full justify-center">
          <Image
            alt="homepage-image"
            className="selection:bg-transparent"
            height={500}
            src="/homepage/header-homepage.svg"
            width={500}
          />
        </figure>
      </div>
    </Container>
  )
}
