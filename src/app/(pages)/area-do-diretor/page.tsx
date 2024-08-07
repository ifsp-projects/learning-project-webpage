import { NextPage } from 'next'

import Footer from '@/components/common/Footer'
import { getMetaData } from '@/utils/getters/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: '',
    description: '',
    opengraph: ''
  })
}

const Page: NextPage = () => {
  return (
    <>
      <main>page</main>
      <Footer />
    </>
  )
}

export default Page
