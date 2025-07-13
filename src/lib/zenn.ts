export interface ZennArticle {
  title: string
  url: string
  publishedAt: string
  excerpt?: string
}

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

export async function getZennArticles(): Promise<ZennArticle[]> {
  try {
    // 将来的にはZennのRSSフィードから記事を取得する
    // const response = await fetch('https://zenn.dev/isseisuzuki/feed')
    // const feedData = await response.text()
    // return parseFeed(feedData)
    
    // 現在は仮データを返す
    return mockZennArticles
  } catch (error) {
    console.error('Zenn記事の取得に失敗しました:', error)
    return mockZennArticles
  }
}