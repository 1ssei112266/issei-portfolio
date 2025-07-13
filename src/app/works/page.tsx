import { WorkCard } from '@/components/molecules/WorkCard'
import { getAllWorks } from '@/lib/works'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '作品一覧 | Issei Suzuki\'s Portfolio',
  description: 'Issei Suzukiが手がけた作品の一覧ページです。',
}

export default function WorksPage() {
  const works = getAllWorks()

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">作品一覧</h1>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
          これまでに制作した Web アプリケーションやプロジェクトをご紹介します。<br />
          各プロジェクトで使用した技術やアプローチについても詳しく説明しています。
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <WorkCard
              key={work.id}
              title={work.title}
              description={work.description}
              image={work.image}
              slug={work.slug}
              technologies={work.technologies}
              animationDelay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {works.length === 0 && (
        <section className="text-center py-16">
          <p className="text-xl text-base-content/60">
            まだ作品がありません。
          </p>
        </section>
      )}
    </div>
  )
}