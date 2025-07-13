'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

/**
 * 浮遊する泡コンポーネントのプロパティ型定義
 * タップすると背景色を変更する機能を持つ
 */
interface FloatingBubbleProps {
  children: ReactNode // 泡の中に表示するコンテンツ
  onTap: () => void // タップ時のコールバック関数
  size?: 'sm' | 'md' | 'lg' // 泡のサイズ
  delay?: number // アニメーション開始の遅延時間（秒）
  className?: string // 追加のCSSクラス
  floating?: boolean // 浮遊アニメーションを有効にするか
  color?: string // 泡の色テーマ
}

/**
 * 浮遊する泡コンポーネント
 * ふわふわと上下に浮遊し、タップすると背景色を変更する
 * 
 * @param children - 泡の中に表示するコンテンツ（テキストやアイコンなど）
 * @param onTap - タップ時に実行されるコールバック関数
 * @param size - 泡のサイズ（sm: 小、md: 中、lg: 大）
 * @param delay - 浮遊アニメーション開始の遅延時間
 * @param className - 追加で適用するCSSクラス
 * @param floating - 浮遊アニメーションを有効にするか（デフォルト: true）
 * @param color - 泡の色テーマ
 */
export const FloatingBubble = ({ 
  children, 
  onTap, 
  size = 'md', 
  delay = 0,
  className = '',
  floating = true,
  color = 'primary'
}: FloatingBubbleProps) => {
  // サイズ別のクラス定義（全体的に大きめに調整）
  const sizeClasses = {
    sm: 'w-20 h-20 text-sm',
    md: 'w-28 h-28 text-base',
    lg: 'w-32 h-32 text-lg'
  }

  // 浮遊アニメーションの設定（より大きな動き）
  const floatingAnimation = floating ? {
    y: [0, -40, 20, -30, 0], // 上下により大きく浮遊（-40px〜+20px）
    x: [0, 30, -25, 40, -20, 0], // 左右にも大きく移動（-25px〜+40px）
    rotate: [0, 15, -10, 8, -12, 0], // より大きな回転
    scale: [1, 1.05, 0.95, 1.02, 1], // サイズも少し変化
    transition: {
      duration: 6 + Math.random() * 4, // 6〜10秒の間でより長い周期
      repeat: Infinity, // 無限ループ
      ease: "easeInOut", // なめらかな動き
      delay: delay // 指定された遅延時間
    }
  } : {}

  // 色テーマに応じたグラデーション
  const getGradientClasses = (colorTheme: string) => {
    const gradients = {
      primary: 'from-primary/80 to-secondary/80 hover:from-primary hover:to-secondary',
      sunset: 'from-orange-400/80 to-pink-500/80 hover:from-orange-400 hover:to-pink-500',
      ocean: 'from-blue-400/80 to-cyan-500/80 hover:from-blue-400 hover:to-cyan-500',
      forest: 'from-green-400/80 to-emerald-500/80 hover:from-green-400 hover:to-emerald-500',
      purple: 'from-purple-400/80 to-indigo-500/80 hover:from-purple-400 hover:to-indigo-500',
      rose: 'from-rose-400/80 to-pink-500/80 hover:from-rose-400 hover:to-pink-500'
    }
    return gradients[colorTheme as keyof typeof gradients] || gradients.primary
  }

  return (
    <motion.button
      // 初期状態: 透明度0、少し縮小
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      
      // アニメーション後: 完全に表示、元のサイズ、浮遊開始
      animate={{ 
        opacity: 1, 
        scale: 1,
        ...floatingAnimation 
      }}
      
      // ホバー時のエフェクト: 少し拡大、影を強く
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
      }}
      
      // タップ時のエフェクト: 少し縮小してポップな効果
      whileTap={{ 
        scale: 0.9,
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.3 }
      }}
      
      // タップイベント
      onClick={onTap}
      
      // アニメーション設定
      transition={{ 
        type: "spring", // スプリングアニメーション
        stiffness: 300, // バネの硬さ
        damping: 20 // 減衰
      }}
      
      className={`
        ${sizeClasses[size]} 
        ${className}
        rounded-full
        bg-gradient-to-br ${getGradientClasses(color)}
        backdrop-blur-sm
        border border-white/30
        shadow-lg
        flex items-center justify-center
        text-white font-medium
        transition-all duration-300
        cursor-pointer
        group
        focus:outline-none focus:ring-4 focus:ring-white/30
      `}
    >
      {/* 泡の中のコンテンツ */}
      <div className="text-center group-hover:scale-110 transition-transform duration-200">
        {children}
      </div>
    </motion.button>
  )
}

// 色テーマの定義
export const colorThemes = {
  primary: {
    name: 'Primary',
    background: 'bg-gradient-to-br from-base-100 via-primary/5 to-secondary/10'
  },
  sunset: {
    name: 'Sunset',
    background: 'bg-gradient-to-br from-orange-50 via-orange-100/50 to-pink-100/50'
  },
  ocean: {
    name: 'Ocean',
    background: 'bg-gradient-to-br from-blue-50 via-blue-100/50 to-cyan-100/50'
  },
  forest: {
    name: 'Forest',
    background: 'bg-gradient-to-br from-green-50 via-green-100/50 to-emerald-100/50'
  },
  purple: {
    name: 'Purple',
    background: 'bg-gradient-to-br from-purple-50 via-purple-100/50 to-indigo-100/50'
  },
  rose: {
    name: 'Rose',
    background: 'bg-gradient-to-br from-rose-50 via-rose-100/50 to-pink-100/50'
  }
}