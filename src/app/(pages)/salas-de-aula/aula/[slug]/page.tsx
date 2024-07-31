import { NextPage } from 'next'

import Footer from '@/components/common/Footer'

import { ClassDesktopLayout } from './components/DesktopLayout'
import { ClassMobileLayout } from './components/MobileLayout'
import { ClassProps } from './types'

const Page: NextPage<ClassProps> = ({ params: { slug } }) => {
  return (
    <>
      <ClassDesktopLayout />
      <ClassMobileLayout />
      <Footer />
    </>
  )
}

export default Page
