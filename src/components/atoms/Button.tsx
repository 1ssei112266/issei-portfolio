import { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * ボタンコンポーネントのプロパティ型定義
 * HTMLButtonElementの標準属性を継承し、独自のプロパティを追加
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode // ボタン内に表示するコンテンツ
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' // ボタンのスタイルバリアント
  size?: 'sm' | 'md' | 'lg' // ボタンのサイズ
}

/**
 * 汎用ボタンコンポーネント
 * daisyUIのボタンクラスを使用してスタイリング
 * 
 * @param children - ボタン内に表示するコンテンツ
 * @param variant - ボタンのスタイル（primary, secondary, accent, ghost）
 * @param size - ボタンのサイズ（sm, md, lg）
 * @param className - 追加のCSSクラス
 * @param props - その他のHTML button属性
 */
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}: ButtonProps) => {
  // daisyUIの基本ボタンクラス
  const baseClasses = 'btn'
  
  // スタイルバリアント別のクラス定義
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary', 
    accent: 'btn-accent',
    ghost: 'btn-ghost'
  }
  
  // サイズ別のクラス定義
  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  }
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}