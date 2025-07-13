'use client'

import { usePathname } from 'next/navigation'
import { Link } from '../atoms/Link'

/**
 * ナビゲーションリンクコンポーネントのプロパティ型定義
 * 現在のページと一致する場合にアクティブスタイルを適用
 */
interface NavLinkProps {
  href: string // リンク先URL
  children: React.ReactNode // リンクテキスト
  className?: string // 追加のCSSクラス
}

/**
 * ナビゲーションリンクコンポーネント
 * 現在のページとリンク先が一致する場合にアクティブスタイルを適用
 * ホバー時のアニメーションも含む
 * 
 * @param href - リンク先URL
 * @param children - リンクテキスト
 * @param className - 追加のCSSクラス
 */
export const NavLink = ({ href, children, className = '' }: NavLinkProps) => {
  // 現在のページパスを取得（Next.js App Routerのフック）
  const pathname = usePathname()
  
  // 現在のページとリンク先が一致するかどうかを判定
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`
        ${className}
        ${
          isActive 
            ? 'text-primary font-bold' // アクティブ時：プライマリ色で太字
            : 'text-base-content hover:text-primary' // 非アクティブ時：ホバーでプライマリ色
        }
        transition-colors duration-200 // 色変化のアニメーション
      `}
    >
      {children}
    </Link>
  )
}