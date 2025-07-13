'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { colorThemes } from '@/components/molecules/FloatingBubble'

/**
 * 色テーマの型定義
 */
type ColorTheme = keyof typeof colorThemes

/**
 * テーマコンテキストの型定義
 */
interface ThemeContextType {
  currentTheme: ColorTheme // 現在のテーマ
  setTheme: (theme: ColorTheme) => void // テーマ変更関数
  getBackgroundClass: () => string // 背景色クラスを取得
}

/**
 * テーマコンテキストの作成
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * テーマプロバイダーコンポーネント
 * アプリケーション全体でテーマ状態を管理する
 * 
 * @param children - 子コンポーネント
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>('primary')

  /**
   * テーマを変更する関数
   * @param theme - 新しいテーマ
   */
  const setTheme = (theme: ColorTheme) => {
    setCurrentTheme(theme)
  }

  /**
   * 現在のテーマに基づいて背景色クラスを取得
   * @returns Tailwind CSSの背景色クラス
   */
  const getBackgroundClass = () => {
    return colorThemes[currentTheme]?.background || colorThemes.primary.background
  }

  const value: ThemeContextType = {
    currentTheme,
    setTheme,
    getBackgroundClass
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * テーマコンテキストを使用するためのカスタムフック
 * @returns テーマコンテキストの値
 * @throws エラー - ThemeProvider外で使用された場合
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}