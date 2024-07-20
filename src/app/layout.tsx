import '@/styles/index.scss'

import { Navbar } from '@/components/common/Navbar'
import ToastMessage from '@/components/toolkit/ToastMessage'
import { GTMInjection } from '@/gtm'

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
      <body className="selection:bg-teal-100 selection:text-teal-900">
        <ToastMessage />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
