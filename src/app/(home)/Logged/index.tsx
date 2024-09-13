import Footer from '@/components/common/Footer'

import { MyClassRooms } from './components/MyClassrooms'
import { SavedMaterials } from './components/SavedMaterials'

export const Logged: React.FC = () => {
  return (
    <>
      <main className="min-h-[62vh] pt-16">
        <MyClassRooms />
        <SavedMaterials />
      </main>
      <Footer />
    </>
  )
}
