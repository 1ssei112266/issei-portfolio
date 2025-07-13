import { ReactNode } from 'react'

/**
 * カードコンポーネントのプロパティ型定義
 * daisyUIのcardコンポーネントをベースにしたラッパー
 */
interface CardProps {
  children: ReactNode // カード内に表示するコンテンツ
  className?: string // 追加のCSSクラス
  hoverable?: boolean // ホバー時のアニメーションを有効にするか
  compact?: boolean // コンパクトなスタイルを使用するか
}

/**
 * 汎用カードコンポーネント
 * daisyUIのcardスタイルをベースに、ホバーアニメーションなどの機能を追加
 * 
 * @param children - カード内に表示するコンテンツ
 * @param className - 追加のCSSクラス
 * @param hoverable - ホバー時にシャボン玉風アニメーションを適用するか
 * @param compact - コンパクトなスタイルを使用するか
 */
export const Card = ({ 
  children, 
  className = '', 
  hoverable = false,
  compact = false 
}: CardProps) => {
  // daisyUIの基本カードスタイル
  const baseClasses = 'card bg-base-100 shadow-xl'
  
  // ホバー時のアニメーションクラス（globals.cssで定義）
  const hoverClasses = hoverable ? 'bubble-card' : ''
  
  // コンパクトスタイルクラス
  const compactClasses = compact ? 'card-compact' : ''
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${compactClasses} ${className}`}>
      {children}
    </div>
  )
}