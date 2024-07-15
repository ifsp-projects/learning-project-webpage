import { NextPage } from 'next'
import Footer from '@/components/common/Footer'
import { getMetaData } from '@/utils/getters/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: 'Termos de Uso',
    description: 'Veja um pouco mais sobre nossos termos de uso',
    opengraph: ''
  })
}

const Page: NextPage = () => {
  return (
    <>
      <main>
        <section>
          <h1>Therms of Use </h1>
          <p>escreve aqui higor</p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Page
