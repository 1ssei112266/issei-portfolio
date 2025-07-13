import NextLink from 'next/link'
import { ReactNode, AnchorHTMLAttributes } from 'react'

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  children: ReactNode
  external?: boolean
}

export const Link = ({ 
  href, 
  children, 
  external = false, 
  className = '',
  ...props 
}: LinkProps) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`link ${className}`}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} className={`link ${className}`} {...props}>
      {children}
    </NextLink>
  )
}