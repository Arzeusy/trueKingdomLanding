import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from "../components/NavBar"
import Footer from "../components/footer"
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
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} >
        <div className='background_main bg-light after:invert dark:bg-dark dark:after:invert-0 xl:!p-24 lg:!p-19 md:!p-12 sm:!p-8'>
          <div className='background_content'></div>
        </div>
        <main className="w-full min-h-screen text-zinc-700">
          <NavBar></NavBar>
          {children}
          <Footer/>
        </main>
        
      </body>
    </html>
  )
}
