import Footer from '@/components/common/Footer'
import { Disclaimer } from '@/components/toolkit/Disclaimer'
import { getMetaData } from '@/utils/getters/getMetaData'
import { NextPage } from 'next'

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
