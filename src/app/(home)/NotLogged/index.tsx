import { AuthModal } from '@/components/common/AuthModal'
import Footer from '@/components/common/Footer'
import { getUserSession } from '@/utils/auth/getUserSession'

import { AboutUs } from './components/AboutUs'
import { Header } from './components/Header'
import { OurServices } from './components/OurServices'
import { SuccessCases } from './components/SucccessCases'
import { WhoUseOurPlatform } from './components/WhoUseOurPlatform'
import { WhyUseOurPlatform } from './components/WhyUseOurPlatform'

export const NotLogged: React.FC = async () => {
  const session = await getUserSession()

  return (
    <>
      <main className="min-h-[62vh] overflow-x-hidden pt-20">
        <Header />
        <OurServices />
        <AboutUs />
        <WhyUseOurPlatform />
        <SuccessCases />
        <WhoUseOurPlatform />
        {session ? null : <AuthModal />}
      </main>
      <Footer />
    </>
  )
}
