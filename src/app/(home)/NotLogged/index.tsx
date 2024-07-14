import Footer from '@/components/common/Footer'
import { Header } from './components/Header'
import { OurServices } from './components/OurServices'
import { AboutUs } from './components/AboutUs'
import { Achievements } from './components/Achievements'

export const NotLogged: React.FC = () => {
  return (
    <>
      <main className="min-h-[62vh]">
        <Header />
        <OurServices />
        <AboutUs />
        <Achievements />
      </main>
      <Footer />
    </>
  )
}
