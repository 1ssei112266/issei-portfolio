import NextLink from 'next/link'
import { ReactNode, AnchorHTMLAttributes } from 'react'

/**
 * リンクコンポーネントのプロパティ型定義
 * 内部リンクと外部リンクの両方に対応
 */
interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string // リンク先URL
  children: ReactNode // リンク内に表示するコンテンツ
  external?: boolean // 外部リンクかどうかのフラグ（デフォルト: false）
}

/**
 * 汎用リンクコンポーネント
 * 内部リンク（Next.js Link）と外部リンク（通常のaタグ）を自動で切り替え
 * 
 * @param href - リンク先URL
 * @param children - リンク内に表示するコンテンツ
 * @param external - 外部リンクかどうか（trueの場合、新しいタブで開く）
 * @param className - 追加のCSSクラス
 * @param props - その他のHTML anchor属性
 */
export const Link = ({ 
  href, 
  children, 
  external = false, 
  className = '',
  ...props 
}: LinkProps) => {
  // 外部リンクの場合：通常のaタグを使用し、新しいタブで開く
  if (external) {
    return (
      <a
        href={href}
        target="_blank" // 新しいタブで開く
        rel="noopener noreferrer" // セキュリティ対策
        className={`link ${className}`}
        {...props}
      >
        {children}
      </a>
    )
  }

  // 内部リンクの場合：Next.js Linkを使用してクライアントサイドルーティング
  return (
    <NextLink href={href} className={`link ${className}`} {...props}>
      {children}
    </NextLink>
  )
}