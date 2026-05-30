import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#121212',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://velvari.it'),
  title: 'Velvari — Where cars find those who deserve them.',
  description: 'Velvari è la prima piattaforma italiana per aste di automobili straordinarie. Compra e vendi auto d\'epoca e selezionate online. Curata. Precisa. Italiana.',
  keywords: ['aste auto italia', 'comprare auto d\'epoca', 'vendere auto usata', 'marketplace auto italiane', 'aste online auto', 'auto classiche italia', 'velvari'],
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    apple: [{ url: '/logo.png' }],
    shortcut: '/logo.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Velvari',
  },
  openGraph: {
    title: 'Velvari — Where cars find those who deserve them.',
    description: 'La prima piattaforma italiana per aste di automobili straordinarie.',
    url: 'https://velvari.it',
    siteName: 'Velvari',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Velvari' }],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velvari',
    description: 'Where cars find those who deserve them.',
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Velvari',
  url: 'https://velvari.it',
  logo: 'https://velvari.it/logo.png',
  description: 'La prima piattaforma italiana per aste di automobili straordinarie.',
  sameAs: [
    'https://instagram.com/velvari',
    'https://tiktok.com/@velvari',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="bg-noise" aria-hidden="true" />
        <div className="bg-gradient" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
