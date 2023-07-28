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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} >
        <div className='background_main bg-light'>
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
