import { NextPage } from 'next'

import Footer from '@/components/common/Footer'
import { getMetaData } from '@/utils/getters/getMetaData'

import { Accordions } from './components/Accordions'
import { Header } from './components/Header'

export async function generateMetadata() {
  return getMetaData({
    title: 'Perguntas Frequentes',
    description:
      'Assista ou lecione aulas dentro de nossa plataforma, com auxilio nossas ferramentas educacionais!',
    opengraph: ''
  })
}

const Page: NextPage = () => {
  return (
    <>
      <main className="min-h-[62vh] overflow-x-hidden pt-20">
        <Header />
        <Accordions />
      </main>
      <Footer />
    </>
  )
}

export default Page
