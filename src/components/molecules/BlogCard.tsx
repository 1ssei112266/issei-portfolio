import { Card } from '../atoms/Card'
import { Link } from '../atoms/Link'

interface BlogCardProps {
  title: string
  publishedAt: string
  url: string
}

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