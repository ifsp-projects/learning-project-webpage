import { NextPage } from 'next'

import { OurServices } from '@/app/(home)/NotLogged/components/OurServices'
import { WhyUseOurPlatform } from '@/app/(home)/NotLogged/components/WhyUseOurPlatform'
import Footer from '@/components/common/Footer'
import { getMetaData } from '@/utils/getters/getMetaData'

import { Collaborators } from './components/Collaborators'
import { ContactWithUs } from './components/ConectWithUs'
import { Header } from './components/Header'
import { ProvidingKnowledge } from './components/ProvidingKnowledge'

export async function generateMetadata() {
  return getMetaData({
    title: 'Conheça nossa equipe de desenvolvimento da plataforma',
    description: 'Conheça nossa equipe de desenvolvimento da plataforma',
    opengraph: ''
  })
}

const Page: NextPage = () => {
  return (
    <>
      <main className="min-h-[62vh] overflow-x-hidden pt-20">
        <Header />
        <Collaborators />
        <OurServices />
        <WhyUseOurPlatform />
        <ProvidingKnowledge />
        <ContactWithUs />
      </main>
      <Footer />
    </>
  )
}

export default Page
