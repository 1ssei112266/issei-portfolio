import { WorkCard } from '@/components/molecules/WorkCard'
import { BlogCard } from '@/components/molecules/BlogCard'
import { Button } from '@/components/atoms/Button'
import { Link } from '@/components/atoms/Link'
import { getFeaturedWorks } from '@/lib/works'
import { getZennArticles } from '@/lib/zenn'

export default async function HomePage() {
  const featuredWorks = getFeaturedWorks()
  const zennArticles = await getZennArticles()

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-primary mb-6">
          Issei Suzuki's Portfolio
        </h1>
        <p className="text-xl text-base-content/80 mb-8 max-w-2xl mx-auto">
          フロントエンド開発者として、モダンなWeb技術を使って<br />
          ユーザーフレンドリーなアプリケーションを作成しています。
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/works">
            <Button variant="primary" size="lg">
              作品を見る
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" size="lg">
              プロフィール
            </Button>
          </Link>
        </div>
      </section>

      {/* Recent Works Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-base-content">最近の作品</h2>
          <Link href="/works" className="text-primary hover:text-primary-focus">
            すべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.slice(0, 3).map((work, index) => (
            <WorkCard
              key={work.id}
              title={work.title}
              description={work.description}
              image={work.image}
              slug={work.slug}
              technologies={work.technologies}
              animationDelay={index * 0.2}
            />
          ))}
        </div>
      </section>

      {/* Zenn Articles Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-base-content">Zenn最新記事</h2>
          <Link href="/blog" className="text-primary hover:text-primary-focus">
            すべて見る →
          </Link>
        </div>
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
  )
}