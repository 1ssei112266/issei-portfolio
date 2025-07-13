import { notFound } from 'next/navigation'
import { Button } from '@/components/atoms/Button'
import { Link } from '@/components/atoms/Link'
import { getWorkBySlug, getAllWorks } from '@/lib/works'
import type { Metadata } from 'next'

interface WorkDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const works = getAllWorks()
  return works.map((work) => ({
    slug: work.slug,
  }))
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const work = getWorkBySlug(params.slug)
  
  if (!work) {
    return {
      title: 'Not Found | Issei Suzuki\'s Portfolio',
    }
  }

  return {
    title: `${work.title} | Issei Suzuki's Portfolio`,
    description: work.description,
  }
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const work = getWorkBySlug(params.slug)

  if (!work) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="breadcrumbs text-sm mb-8">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/works">作品一覧</Link></li>
            <li className="text-base-content/60">{work.title}</li>
          </ul>
        </nav>

        {/* Work Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">{work.title}</h1>
          <p className="text-xl text-base-content/80 mb-6">{work.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {work.technologies.map((tech, index) => (
              <span key={index} className="badge badge-primary">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {work.demoUrl && (
              <Link href={work.demoUrl} external>
                <Button variant="primary">
                  デモを見る
                </Button>
              </Link>
            )}
            {work.githubUrl && (
              <Link href={work.githubUrl} external>
                <Button variant="ghost">
                  GitHub
                </Button>
              </Link>
            )}
          </div>
        </header>

        {/* Work Image */}
        <section className="mb-12">
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center shadow-xl">
            <span className="text-6xl opacity-50">🎨</span>
          </div>
        </section>

        {/* Work Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-base-content mb-4">プロジェクト概要</h2>
          <p className="text-base-content/80 leading-relaxed whitespace-pre-wrap">
            {work.content}
          </p>
        </section>

        {/* Project Details */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title">使用技術</h3>
              <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech, index) => (
                  <span key={index} className="badge badge-outline">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title">公開日</h3>
              <p className="text-base-content/80">{work.publishedAt}</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <Link href="/works">
            <Button variant="ghost" size="lg">
              ← 作品一覧に戻る
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}