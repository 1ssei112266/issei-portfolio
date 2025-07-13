import { WorkCard } from '@/components/molecules/WorkCard'
import { getAllWorks } from '@/lib/works'

export const WorksSection = () => {
  const works = getAllWorks()

  return (
    <div>
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">作品一覧</h2>
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