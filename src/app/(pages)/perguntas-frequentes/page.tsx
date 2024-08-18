import { NextPage } from 'next'

import Footer from '@/components/common/Footer'

import { Accordions } from './components/Accordions'
import { Header } from './components/Header'

const Page: NextPage = () => {
  return (
    <>
      <main>
        <Header />
        <Accordions />
      </main>
      <Footer />
    </>
  )
}

export default Page
