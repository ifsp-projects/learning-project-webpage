import { NextPage } from 'next'

import Footer from '@/components/common/Footer'
import { Header } from './components/Header'
import { ProfileDetails } from './components/ProfileDetails'
import { getMetaData } from '@/utils/getters/getMetaData'

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
      <main className="flex w-full flex-col gap-8 py-12 lg:gap-12 lg:py-20">
        <Header />
        <ProfileDetails />
      </main>
      <Footer />
    </>
  )
}

export default Page
