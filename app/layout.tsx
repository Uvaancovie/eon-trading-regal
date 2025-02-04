// app/layout.tsx

import "./globals.css"
import Header from "../components/Header"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Eon Trading Regal",
  description: "Professional, gold-accented corporate site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-neutralBg ${inter.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
