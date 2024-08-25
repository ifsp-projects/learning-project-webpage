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
      <main>
        <Header />
        <Accordions />
      </main>
      <Footer />
    </>
  )
}

export default Page
