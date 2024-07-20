import { NextPage } from 'next'

import Footer from '@/components/common/Footer'

import { Classrooms } from './Classrooms'

const Page: NextPage = () => {
  return (
    <>
      <main>
        <Classrooms />
      </main>
      <Footer />
    </>
  )
}

export default Page
