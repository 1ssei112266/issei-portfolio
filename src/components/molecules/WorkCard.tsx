'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '../atoms/Card'
import { Link } from '../atoms/Link'

interface WorkCardProps {
  title: string
  description: string
  image: string
  slug: string
  technologies: string[]
  animationDelay?: number
}

export const WorkCard = ({ 
  title, 
  description, 
  image, 
  slug, 
  technologies, 
  animationDelay = 0 
}: WorkCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="animate-float"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <Link href={`/works/${slug}`} className="block">
        <Card hoverable className="h-full">
          <figure className="px-6 pt-6">
            <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
              <span className="text-4xl opacity-50">🎨</span>
            </div>
          </figure>
          <div className="card-body">
            <h3 className="card-title text-lg">{title}</h3>
            <p className="text-sm text-base-content/70 line-clamp-3">{description}</p>
            <div className="card-actions justify-start mt-4">
              {technologies.slice(0, 3).map((tech, index) => (
                <span key={index} className="badge badge-outline badge-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}