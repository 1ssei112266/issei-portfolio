'use client'

import { usePathname } from 'next/navigation'
import { Link } from '../atoms/Link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const NavLink = ({ href, children, className = '' }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`
        ${className}
        ${isActive ? 'text-primary font-bold' : 'text-base-content hover:text-primary'}
        transition-colors duration-200
      `}
    >
      {children}
    </Link>
  )
}