import { WorkCard } from '@/components/molecules/WorkCard'
import { BlogCard } from '@/components/molecules/BlogCard'
import { Link } from '@/components/atoms/Link'
import { Hero } from '@/components/organisms/Hero'
import { getFeaturedWorks } from '@/lib/works'
import { getZennArticles } from '@/lib/zenn'

/**
 * ホームページコンポーネント
 * サイトのトップページで、以下のセクションで構成:
 * 1. Heroセクション: インパクトのあるファーストビュー（浮遊する泡のアニメーション付き）
 * 2. 最近の作品: 注目作品をカード形式で表示
 * 3. Zenn最新記事: 技術ブログの最新記事を表示
 */
export default async function HomePage() {
  // 注目作品（featured: true）を取得
  const featuredWorks = getFeaturedWorks()
  
  // Zenn記事を非同期で取得（現在は仮データ）
  const zennArticles = await getZennArticles()

  return (
    <>
      {/* Heroセクション: アニメーション付きのインパクトあるファーストビュー */}
      <Hero />
      
      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-16">

      {/* 最近の作品セクション: 注目作品をカード形式で表示 */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-base-content">最近の作品</h2>
          {/* 作品一覧ページへのリンク */}
          <Link href="/works" className="text-primary hover:text-primary-focus">
            すべて見る →
          </Link>
        </div>
        {/* レスポンシブグリッドレイアウト（モバイル: 1列、タブレット: 2列、PC: 3列） */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.slice(0, 3).map((work, index) => (
            <WorkCard
              key={work.id}
              title={work.title}
              description={work.description}
              image={work.image}
              slug={work.slug}
              technologies={work.technologies}
              animationDelay={index * 0.2} // カードごとにアニメーション遅延を設定
            />
          ))}
        </div>
      </section>

      {/* Zenn記事セクション: 技術ブログの最新記事を表示 */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-base-content">Zenn最新記事</h2>
          {/* ブログ一覧ページへのリンク */}
          <Link href="/blog" className="text-primary hover:text-primary-focus">
            すべて見る →
          </Link>
        </div>
        {/* レスポンシブグリッドレイアウト（モバイル: 1列、タブレット: 2列、PC: 3列） */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zennArticles.slice(0, 3).map((article, index) => (
            <BlogCard
              key={index}
              title={article.title}
              publishedAt={article.publishedAt}
              url={article.url}
            />
          ))}
        </div>
      </section>
      </div>
    </>
  )
}