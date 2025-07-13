import worksData from './works.json'

/**
 * 作品データの型定義
 * works.jsonのデータ構造と一致するように定義
 */
export interface Work {
  id: string // 作品の一意識別子
  title: string // 作品タイトル
  slug: string // URL用のスラッグ（英数字のみ）
  description: string // 作品の簡潔な説明
  image: string // サムネイル画像のパス
  technologies: string[] // 使用した技術スタックの配列
  githubUrl?: string // GitHubリポジトリURL（オプション）
  demoUrl?: string // デモサイトURL（オプション）
  featured: boolean // トップページに表示するかどうか
  publishedAt: string // 公開日（YYYY-MM-DD形式）
  content: string // 作品詳細ページで表示する詳細説明
}

/**
 * 全ての作品データを取得する関数
 * works.jsonからデータを読み込んで返す
 * 
 * @returns 全作品の配列
 */
export function getAllWorks(): Work[] {
  return worksData as Work[]
}

/**
 * 指定したスラッグに一致する作品を取得する関数
 * 動的ルーティングで使用（/works/[slug]）
 * 
 * @param slug - 作品のスラッグ
 * @returns 一致する作品またはundefined
 */
export function getWorkBySlug(slug: string): Work | undefined {
  return worksData.find((work) => work.slug === slug) as Work | undefined
}

/**
 * 注目作品（featured: true）のみを取得する関数
 * トップページで表示する作品をフィルタリング
 * 
 * @returns 注目作品の配列
 */
export function getFeaturedWorks(): Work[] {
  return worksData.filter((work) => work.featured) as Work[]
}