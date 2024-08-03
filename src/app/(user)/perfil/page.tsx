import { NextPage } from 'next'

import Footer from '@/components/common/Footer'
import { Header } from './components/Header'
import { ProfileDetails } from './components/ProfileDetails'

const Page: NextPage = () => {
  return (
    <>
      <main className="flex w-full flex-col gap-8 py-12 lg:gap-12 lg:py-20">
        <Header />
        <ProfileDetails />
      </main>
      <Footer />
    </>
  )
}

export default Page
