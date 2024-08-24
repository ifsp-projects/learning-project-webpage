import Footer from '@/components/common/Footer'

import { AboutUs } from './components/AboutUs'
import { Header } from './components/Header'
import { OurServices } from './components/OurServices'
import { SuccessCases } from './components/SucccessCases'
import { WhoUseOurPlatform } from './components/WhoUseOurPlatform'
import { WhyUseOurPlatform } from './components/WhyUseOurPlatform'

export const NotLogged: React.FC = () => {
  return (
    <>
      <main className="min-h-[62vh] overflow-x-hidden">
        <Header />
        <OurServices />
        <AboutUs />
        <WhyUseOurPlatform />
        <SuccessCases />
        <WhoUseOurPlatform />
      </main>
      <Footer />
    </>
  )
}
