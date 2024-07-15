import type { Metadata } from "next"
import "@/styles/index.scss"
import { Navbar } from "@/components/common/Navbar"
import SideNav from "@/components/common/Navbar/sidebar"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-white"}>
        <div className="flex">
          <SideNav/>
          <main className=" flex-1">
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}




