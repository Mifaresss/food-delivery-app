'use client'
import { Header } from '@/components/Header/Header'
import { Provider } from 'react-redux'
import './globals.css'
import './reset.css'
import { store } from '@/store'

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
