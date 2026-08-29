import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export const metadata = {
  title: 'NovacoreLife | Advancing Healthcare Through Innovation',
  description: "NovacoreLife is a global pharmaceutical leader dedicated to discovering, developing, and delivering innovative medicines that address the world's most challenging health conditions.",
  keywords: 'pharmaceutical, healthcare, biotechnology, drug discovery, clinical trials, immunology, neuroscience, oncology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
