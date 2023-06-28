import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import Header from '@comps/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PLH Photography',
  description: 'Photography by Paul Le Houillier',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body className={inter.className}>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
        <Header/>
        <main>
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
