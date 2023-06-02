'use client'
import { Header } from '@/components/Header'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import './globals.css'
import './reset.css'

const theme = createTheme({
   typography: {
      fontFamily: 'system-ui',
   },
   palette: {
      primary: {
         main: '#530c32',
      },
      secondary: {
         main: '#FF8C8E',
      },
      header: {
         main: '#4a313e',
      },
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
