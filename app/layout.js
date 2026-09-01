import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import SmartsuppScript from '@/components/SmartsuppScript'

export const metadata = {
  metadataBase: new URL('https://novacore-pharma.vercel.app'),
  title: 'NovacoreLife | Advancing Healthcare Through Innovation',
  description: "NovacoreLife is a global pharmaceutical leader dedicated to discovering, developing, and delivering innovative medicines that address the world's most challenging health conditions.",
  keywords: 'pharmaceutical, healthcare, biotechnology, drug discovery, clinical trials, immunology, neuroscience, oncology',
  openGraph: {
    title: 'NovacoreLife | Advancing Healthcare Through Innovation',
    description: "NovacoreLife is a global pharmaceutical leader dedicated to discovering, developing, and delivering innovative medicines.",
    url: 'https://novacore-pharma.vercel.app',
    siteName: 'NovacoreLife',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NovacoreLife Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovacoreLife | Advancing Healthcare Through Innovation',
    description: "NovacoreLife is a global pharmaceutical leader dedicated to discovering, developing, and delivering innovative medicines.",
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <SmartsuppScript />
      </body>
    </html>
  )
}
