import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'

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
        {/* フルスクリーンレイアウト: ヘッダー、メイン、フッターで構成 */}
        <div className="min-h-screen flex flex-col">
          {/* サイトヘッダー（ナビゲーション含む） */}
          <Header />
          
          {/* メインコンテンツエリア（各ページの内容） */}
          <main className="flex-grow">
            {children}
          </main>
          
          {/* サイトフッター（SNSリンク、コピーライト含む） */}
          <Footer />
        </div>
      </body>
    </html>
  )
}