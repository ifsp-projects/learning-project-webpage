import Footer from '@/components/common/Footer'
import { Header } from './components/Header'
import { Button } from '@/components/common/Button'

export const NotLogged: React.FC = () => {
  return (
    <>
      <main className="min-h-[62vh]">
        <Header />
      </main>
      <Footer />
    </>
  )
}
