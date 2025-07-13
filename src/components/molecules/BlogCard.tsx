import { Card } from '../atoms/Card'
import { Link } from '../atoms/Link'

/**
 * ブログカードコンポーネントのプロパティ型定義
 * 外部ブログ記事の情報を表示するためのカード
 */
interface BlogCardProps {
  title: string // ブログ記事のタイトル
  publishedAt: string // 公開日（文字列形式）
  url: string // 記事のURL（外部リンク）
}

/**
 * ブログカードコンポーネント
 * 外部ブログ記事の情報を美しくカード形式で表示
 * Cardコンポーネントのhoversble効果を利用してシャボン玉風のアニメーションを適用
 * 
 * @param title - ブログ記事のタイトル
 * @param publishedAt - 公開日（YYYY-MM-DD形式など）
 * @param url - 記事への外部リンクURL
 */
export const BlogCard = ({ title, publishedAt, url }: BlogCardProps) => {
  return (
    <Card hoverable>
      <div className="card-body">
        <h3 className="card-title text-lg">{title}</h3>
        <p className="text-sm text-base-content/70">{publishedAt}</p>
        <div className="card-actions justify-end">
          <Link href={url} external className="text-primary hover:text-primary-focus">
            読む →
          </Link>
        </div>
      </div>
    </Card>
  )
}