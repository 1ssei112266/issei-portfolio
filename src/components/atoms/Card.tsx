import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
  compact?: boolean
}

export const Card = ({ 
  children, 
  className = '', 
  hoverable = false,
  compact = false 
}: CardProps) => {
  const baseClasses = 'card bg-base-100 shadow-xl'
  const hoverClasses = hoverable ? 'bubble-card' : ''
  const compactClasses = compact ? 'card-compact' : ''
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${compactClasses} ${className}`}>
      {children}
    </div>
  )
}