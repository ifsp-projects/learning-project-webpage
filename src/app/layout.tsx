import { Navbar } from '@/components/common/Navbar'
import ToastMessage from '@/components/toolkit/ToastMessage'
import { GTMInjection } from '@/gtm'
import { Theme } from '@radix-ui/themes'

import '@/styles/index.scss'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import '@radix-ui/themes/styles.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <GTMInjection />
      </head>
      <body className="bg-slate-50 text-slate-700 selection:bg-indigo-100 selection:text-indigo-500">
        <Theme>
          <ToastMessage />
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  )
}
