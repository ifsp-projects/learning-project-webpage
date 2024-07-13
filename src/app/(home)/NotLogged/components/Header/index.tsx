import { Button } from '@/components/common/Button'
import { Container } from '@/components/toolkit/Container'
import Image from 'next/image'

export const Header: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="home-logged-out-header"
      className="py-12 lg:py-20"
      wrapperClassName="bg-slate-50"
    >
      <div className="mx-auto flex w-full justify-between gap-8 lg:gap-12">
        <article className="flex w-full flex-col gap-4">
          <p className="max-w-[145px] border-b border-green-600 pb-2 text-green-500">
            Learning Platform
          </p>
          <h1 className="text-2xl font-semibold lg:text-4xl">
            Bem-Vindo à Melhor Plataforma de Gerenciamento Escolar
          </h1>
          <p className="text-sm lg:text-base">
            Descubra a excelência em gerenciamento escolar com nossa plataforma
            inovadora. Simplifique suas operações e otimize a administração
            educacional.
          </p>
          <Button className='mt-4 lg:mt-8'>Quero saber mais</Button>
        </article>
        <figure className="flex w-full justify-center ">
          <Image
            src="/homepage/header-homepage.svg"
            alt="homepage-image"
            width={500}
            height={500}
          />
        </figure>
      </div>
    </Container>
  )
}
