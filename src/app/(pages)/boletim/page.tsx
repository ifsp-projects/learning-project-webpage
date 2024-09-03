import React from 'react'

import Footer from '../../../components/common/Footer'
import { Charts } from './components/Charts'
import { Header } from './components/Header'
import { Tab } from './components/Tab'

const Page: React.FC = () => {
  return (
    <>
      <Header />
      <Charts />
      <section className="mx-auto flex w-full max-w-2xl flex-col gap-4 lg:max-w-6xl">
        <Tab />
      </section>
      <Footer />
    </>
  )
}

export default Page
