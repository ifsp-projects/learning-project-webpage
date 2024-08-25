import { NextPage } from 'next'

import { SuccessCases } from '@/app/(home)/NotLogged/components/SucccessCases'
import { WhoUseOurPlatform } from '@/app/(home)/NotLogged/components/WhoUseOurPlatform'
import { WhyUseOurPlatform } from '@/app/(home)/NotLogged/components/WhyUseOurPlatform'
import Footer from '@/components/common/Footer'
import { getMetaData } from '@/utils/getters/getMetaData'

import { Accordions } from '../perguntas-frequentes/components/Accordions'
import { Header } from './components/Header'
import { Prices } from './components/Prices'

export async function generateMetadata() {
  return getMetaData({
    title: 'Pricing - Veja os nossos planos oferecidos',
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
        <Prices />
        <WhyUseOurPlatform />
        <SuccessCases />
        <WhoUseOurPlatform />
        <Accordions />
      </main>
      <Footer />
    </>
  )
}

export default Page
