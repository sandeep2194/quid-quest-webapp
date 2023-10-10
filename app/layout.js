import './globals.css'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from '@/app/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quid Quest Web App',
  description: 'An Expense Tracker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
