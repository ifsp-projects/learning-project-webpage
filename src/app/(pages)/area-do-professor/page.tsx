import { NextPage } from 'next'
import Footer from '@/components/common/Footer'
import { getMetaData } from '@/utils/getters/getMetaData'
import { GeneralView } from './components/GeneralView'
import { Analytics } from './components/Analytics'
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
      <main className="bg-slate-50 py-12 lg:py-20 flex flex-col gap-12">
        <GeneralView />
        <Analytics />
        <MyClasses />
      </main>
      <Footer />
    </>
  )
}

export default Page
