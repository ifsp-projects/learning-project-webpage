import { NextPage } from 'next'

import Footer from '@/components/common/Footer'
import { getMetaData } from '@/utils/getters/getMetaData'

import { Header } from './components/Header'
import { ProfileDetails } from './components/ProfileDetails'

export async function generateMetadata() {
  return getMetaData({
    title: 'Perfil do Usuário',
    description:
      'Administre e gerencie suas salas de aulas, assim como seus alunos e aulas lecionadas.',
    opengraph: ''
  })
}

const Page: NextPage = () => {
  return (
    <>
      <main className="flex w-full flex-col gap-8 pb-12 pt-16 lg:gap-12 lg:pb-20 lg:pt-32">
        <Header />
        <ProfileDetails />
      </main>
      <Footer />
    </>
  )
}

export default Page
