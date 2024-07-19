import Footer from '@/components/common/Footer'

import { MyClassRooms } from './components/MyClassrooms'

export const Logged: React.FC = () => {
  return (
    <>
      <main className="min-h-[62vh]">
        <MyClassRooms />
      </main>
      <Footer />
    </>
  )
}
