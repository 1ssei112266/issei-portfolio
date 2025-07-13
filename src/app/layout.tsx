import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ClientLayoutWrapper } from '@/components/layouts/ClientLayoutWrapper'

// Google FontsのInterフォントを読み込み（ラテン文字のみ）
const inter = Inter({ subsets: ['latin'] })

/**
 * サイト全体のメタデータ設定
 * SEOやソーシャルメディアでの表示に影響する
 */
export const metadata: Metadata = {
  title: 'Issei Suzuki\'s Portfolio', // サイトのメインタイトル
  description: 'フロントエンド開発者 Issei Suzuki のポートフォリオサイト', // サイトの説明
  keywords: ['Next.js', 'React', 'TypeScript', 'Web Developer', 'Portfolio'], // 検索キーワード
  authors: [{ name: 'Issei Suzuki' }], // 作者情報
}

/**
 * アプリケーションのルートレイアウトコンポーネント
 * 全ページで共通するレイアウト（ヘッダー、フッター、フォント等）を定義
 * 
 * @param children - 各ページのコンテンツ
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 日本語設定とdaisyUIのcupcakeテーマを適用
    <html lang="ja" data-theme="cupcake">
      <body className={inter.className}>
        {/* グローバルテーマプロバイダーでアプリ全体をラップ */}
        <ThemeProvider>
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}