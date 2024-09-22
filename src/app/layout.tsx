import { Navbar } from '@/components/common/Navbar'
import ToastMessage from '@/components/toolkit/ToastMessage'
import { CroctProvider } from '@/contexts/CroctProvider'
import { getMiddlewareData } from '@/utils/getters/getMiddlewareData'
import { Theme } from '@radix-ui/themes'

import '@/styles/index.scss'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import '@radix-ui/themes/styles.css'
import { AuthProvider } from '@/contexts/AuthProvider'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { headersClientId } = getMiddlewareData()

  return (
    <html lang="pt">
      <body className="bg-slate-50 text-slate-600 selection:bg-indigo-50 selection:text-slate-700">
        <AuthProvider>
          <CroctProvider clientId={headersClientId!}>
            <Theme>
              <ToastMessage />
              <Navbar />
              {children}
            </Theme>
          </CroctProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
