import { NextPage } from 'next'

import Footer from '@/components/common/Footer'
import { getMetaData } from '@/utils/getters/getMetaData'

import { Activities } from './components/Activities'
import { ClassroomNavbar } from './components/ClassroomNavbar'
import { GeneralView } from './components/GeneralView'
import { Materials } from './components/Materials'
import { Notices } from './components/Notices'
import { Tests } from './components/Tests'
import { ClassroomProps } from './types'

export async function generateMetadata({ params: { slug } }: ClassroomProps) {
  return getMetaData({
    title: `Sala de Aula - ${slug}`,
    description:
      'Veja as suas atividades, avaliações, materiais complementares, avisos e muitos mais dentro da página de sala de aula',
    opengraph: ''
  })
}

const Page: NextPage<ClassroomProps> = ({ params: { slug } }) => {
  return (
    <>
      <ClassroomNavbar />
      <main className="flex w-full flex-col gap-12 bg-zinc-50 py-12">
        <GeneralView />
        <Notices />
        <Activities />
        <Tests />
        <Materials />
      </main>
      <Footer />
    </>
  )
}

export default Page
