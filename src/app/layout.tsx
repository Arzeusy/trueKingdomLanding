import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from "../components/NavBar"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'True kingdom',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} >
        <main className="bg-light w-full min-h-screen text-zinc-700">
          <NavBar></NavBar>
          {children}
        </main>
      </body>
    </html>
  )
}
