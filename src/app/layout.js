'use client'
import { Header } from '@/components/Header/Header'
import { Provider } from 'react-redux'
import './globals.css'
import './reset.css'
import { store } from '@/store'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Food delivery',
   description: 'Food delivery app created by Serafim Barey',
}

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <body>
            <Provider store={store}>
               <Header />
               {children}
            </Provider>
         </body>
      </html>
   )
}
