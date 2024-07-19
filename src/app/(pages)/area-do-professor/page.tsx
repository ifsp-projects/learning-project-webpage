import { NextPage } from 'next'

import Footer from '@/components/common/Footer'
import { getMetaData } from '@/utils/getters/getMetaData'

import { Analytics } from './components/Analytics'
import { GeneralView } from './components/GeneralView'
import { MyClasses } from './components/MyClasses'

export async function generateMetadata() {
  return getMetaData({
    title: 'Área do Professor',
    description:
      'Administre e gerencie suas salas de aulas, assim como seus alunos e aulas lecionadas.',
    opengraph: ''
  })
}

const Page: NextPage = () => {
  return (
    <>
      <main className="flex flex-col gap-12 bg-slate-50 py-12 lg:py-20">
        <GeneralView />
        <Analytics />
        <MyClasses />
      </main>
      <Footer />
    </>
  )
}

export default Page
