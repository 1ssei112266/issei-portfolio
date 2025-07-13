'use client'

import { BlogCard } from '@/components/molecules/BlogCard'
import { getZennArticles } from '@/lib/zenn'
import { useEffect, useState } from 'react'

export const BlogSection = () => {
  const [articles, setArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getZennArticles()
        setArticles(data)
      } catch (error) {
        console.error('Failed to fetch articles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-16">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  return (
    <div>
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">ブログ</h2>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
          技術に関する記事や学んだことを Zenn で発信しています。<br />
          Web開発、React、Next.js、TypeScriptなどのトピックを中心に執筆しています。
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <BlogCard
              key={index}
              title={article.title}
              publishedAt={article.publishedAt}
              url={article.url}
            />
          ))}
        </div>
      </section>

      {articles.length === 0 && (
        <section className="text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-xl text-base-content/60 mb-4">
            まだ記事がありません。
          </p>
          <p className="text-base-content/60">
            近日中に技術記事を公開予定です。
          </p>
        </section>
      )}

      <section className="text-center mt-12">
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title justify-center">Zennで更新中</h2>
            <p className="text-base-content/80">
              最新の記事は Zenn で公開しています。フォローしていただけると嬉しいです！
            </p>
            <div className="card-actions justify-center">
              <a 
                href="https://zenn.dev/isseisuzuki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Zennをフォロー
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}