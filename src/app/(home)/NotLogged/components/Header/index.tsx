import { Button } from '@/components/common/Button'
import { Container } from '@/components/toolkit/Container'
import Image from 'next/image'

export const Header: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="home-logged-out-header"
      className="py-12 lg:py-20"
    >
      <div className="mx-auto flex w-full flex-col gap-20 lg:flex-row lg:justify-between lg:gap-12">
        <article className="flex w-full flex-col items-center gap-4 lg:items-start">
          <p className="max-w-[145px] lg:border-b-[1.6px] text-sm lg:text-base font-medium border-teal-600 pb-2 text-teal-600">
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
          <Button className="mt-4 !rounded-full lg:mt-8">
            Quero saber mais
          </Button>
        </article>
        <figure className="flex w-full justify-center ">
          <Image
            src="/homepage/header-homepage.svg"
            alt="homepage-image"
            className="selection:bg-transparent"
            width={500}
            height={500}
          />
        </figure>
      </div>
    </Container>
  )
}
