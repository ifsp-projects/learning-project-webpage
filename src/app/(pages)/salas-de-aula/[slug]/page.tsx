import Footer from '@/components/common/Footer'
import { NextPage } from 'next'
import { GeneralView } from './components/GeneralView'
import { Activities } from './components/Activities'
import { Notices } from './components/Notices'
import { Tests } from './components/Tests'
import { Materials } from './components/Materials'
import { ClassroomNavbar } from './components/ClassroomNavbar'
import { getMetaData } from '@/utils/getters/getMetaData'
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
