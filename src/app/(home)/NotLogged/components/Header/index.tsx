import Image from 'next/image'

import { Button } from '@/components/common/Button'
import { Container } from '@/components/toolkit/Container'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <Container
      as="section"
      className="py-12 lg:py-20"
      data-cid="home-logged-out-header"
    >
      <div className="mx-auto flex w-full flex-col gap-20 lg:flex-row lg:justify-between lg:gap-12">
        <article className="flex w-full flex-col items-center gap-4 lg:items-start">
          <p className="max-w-[145px] border-teal-600 pb-2 text-sm font-medium text-teal-600 lg:border-b-[1.6px] lg:text-base">
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
          <Link
            href="/quem-somos"
            className="w-auto max-w-fit rounded-sm bg-emerald-600 mt-4 px-4 py-2 text-sm text-white transition-all duration-300 hover:brightness-105"
          >
            Quero saber mais
          </Link>
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
