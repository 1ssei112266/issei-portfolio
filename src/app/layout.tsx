import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Issei Suzuki\'s Portfolio',
  description: 'フロントエンド開発者 Issei Suzuki のポートフォリオサイト',
  keywords: ['Next.js', 'React', 'TypeScript', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Issei Suzuki' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" data-theme="cupcake">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}