import { Navbar } from '@/components/common/Navbar'
import ToastMessage from '@/components/toolkit/ToastMessage'
import { GTMInjection } from '@/gtm'

import '@/styles/index.scss'

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
      <body className="text-slate-700 selection:bg-teal-100 selection:text-teal-900">
        <ToastMessage />
        <Navbar />
        testando novo sistema de commit
        {children}
      </body>
    </html>
  )
}
