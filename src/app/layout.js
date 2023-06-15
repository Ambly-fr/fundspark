import Header from '@/components/header/header'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FundSpark',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header signed={false}/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
