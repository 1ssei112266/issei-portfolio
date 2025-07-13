/**
 * Zenn記事のデータ型定義
 * RSSフィードから取得した記事情報を格納
 */
export interface ZennArticle {
  title: string // 記事のタイトル
  url: string // 記事のURL
  publishedAt: string // 公開日（YYYY-MM-DD形式）
  excerpt?: string // 記事の概要（オプション）
}

/**
 * 仮のZenn記事データ
 * 実際のRSSフィードが利用できない場合のフォールバックデータ
 * 本番環境では実際のZenn APIまたはRSSフィードを使用する
 */
export const mockZennArticles: ZennArticle[] = [
  {
    title: "Next.js 14 App Routerで始めるモダンWebアプリケーション開発",
    url: "https://zenn.dev/isseisuzuki/articles/nextjs-14-app-router",
    publishedAt: "2024-01-20",
    excerpt: "Next.js 14の新機能であるApp Routerを使用したWebアプリケーション開発について解説します。"
  },
  {
    title: "TypeScriptで型安全なReactコンポーネントを作る",
    url: "https://zenn.dev/isseisuzuki/articles/typescript-react-components",
    publishedAt: "2024-01-10",
    excerpt: "TypeScriptを活用してより型安全で保守性の高いReactコンポーネントを作成する方法を説明します。"
  },
  {
    title: "Tailwind CSSとdaisyUIで効率的なUI開発",
    url: "https://zenn.dev/isseisuzuki/articles/tailwindcss-daisyui-ui-development",
    publishedAt: "2023-12-25",
    excerpt: "Tailwind CSSとdaisyUIを組み合わせて、効率的で美しいUIを開発する手法を紹介します。"
  }
]

/**
 * Zenn記事を取得する関数
 * 現在は仮データを返すが、将来的には実際のZenn RSSフィードから取得する予定
 * 
 * 実装例:
 * 1. Zenn RSSフィードからデータをfetch
 * 2. XMLをパースしてZennArticle型に変換
 * 3. エラーハンドリングで仮データをフォールバックとして使用
 * 
 * @returns Zenn記事の配列
 */
export async function getZennArticles(): Promise<ZennArticle[]> {
  try {
    // TODO: 将来的には実際のZenn RSSフィードから記事を取得する
    // const response = await fetch('https://zenn.dev/isseisuzuki/feed')
    // const feedData = await response.text()
    // return parseFeed(feedData) // XMLパーサーでZennArticle[]に変換
    
    // 現在は開発用の仮データを返す
    return mockZennArticles
  } catch (error) {
    // APIエラー時はコンソールにログを出力し、仮データでフォールバック
    console.error('Zenn記事の取得に失敗しました:', error)
    return mockZennArticles
  }
}