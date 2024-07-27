import Footer from '@/components/common/Footer'
import { NextPage } from 'next'
import { GeneralView } from './components/GeneralView'
import { Activities } from './components/Activities'
import { Notices } from './components/Notices'
import { Tests } from './components/Tests'
import { Materials } from './components/Materials'
import { ClassroomNavbar } from './components/ClassroomNavbar'

const Page: NextPage = () => {
  return (
    <>
      <ClassroomNavbar />
      <main className="flex w-full flex-col gap-12 lg:gap-20 py-12">
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
