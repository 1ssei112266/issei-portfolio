import worksData from './works.json'

export interface Work {
  id: string
  title: string
  slug: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  featured: boolean
  publishedAt: string
  content: string
}

export function getAllWorks(): Work[] {
  return worksData as Work[]
}

export function getWorkBySlug(slug: string): Work | undefined {
  return worksData.find((work) => work.slug === slug) as Work | undefined
}

export function getFeaturedWorks(): Work[] {
  return worksData.filter((work) => work.featured) as Work[]
}