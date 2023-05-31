'use client'
import { Header } from '@/components/Header/Header'
import { ThemeProvider } from '@emotion/react'
import './globals.css'
import './reset.css'
import { createTheme } from '@mui/material'

const theme = createTheme({
   typography: {
      fontFamily: 'system-ui',
   },
})

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <body>
            <ThemeProvider theme={theme}>
               <Header />
               {children}
            </ThemeProvider>
         </body>
      </html>
   )
}
