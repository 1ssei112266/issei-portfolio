'use client'

import { motion } from 'framer-motion'
import { FloatingBubble } from '../molecules/FloatingBubble'
import { useTheme } from '@/contexts/ThemeContext'

/**
 * ページ背景コンポーネント
 * 他のページで使用するための背景とテーマ変更泡を提供
 * 
 * @param children - ページのメインコンテンツ
 * @param showBubbles - 泡を表示するかどうか（デフォルト: true）
 * @param bubbleCount - 表示する泡の数（デフォルト: 4）
 */
interface PageBackgroundProps {
  children: React.ReactNode
  showBubbles?: boolean
  bubbleCount?: number
}

export const PageBackground = ({ 
  children, 
  showBubbles = true, 
  bubbleCount = 4 
}: PageBackgroundProps) => {
  const { setTheme, getBackgroundClass } = useTheme()

  // 泡のタップ時にグローバルテーマを変更する関数
  const handleBubbleTap = (newTheme: string) => {
    setTheme(newTheme as any)
  }

  return (
    <div 
      className={`
        min-h-screen 
        relative 
        ${getBackgroundClass()}
        transition-all duration-1000 ease-in-out
      `}
    >
      {/* 背景の装飾要素 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 背景のぼかし円（装飾用） */}
        <motion.div
          className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* 浮遊する泡（テーマ変更用） */}
      {showBubbles && (
        <div className="absolute inset-0 pointer-events-none">
          {/* 右上の泡 */}
          <motion.div
            className="absolute top-20 right-8 pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('sunset')}
              size="md" 
              delay={0}
              color="sunset"
              className="opacity-80"
            >
              <div />
            </FloatingBubble>
          </motion.div>

          {/* 左下の泡 */}
          <motion.div
            className="absolute bottom-24 left-12 pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('ocean')}
              size="md" 
              delay={1}
              color="ocean"
              className="opacity-80"
            >
              <div />
            </FloatingBubble>
          </motion.div>

          {bubbleCount > 2 && (
            <>
              {/* 右下の泡 */}
              <motion.div
                className="absolute bottom-32 right-16 pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <FloatingBubble 
                  onTap={() => handleBubbleTap('forest')}
                  size="sm" 
                  delay={2}
                  color="forest"
                  className="opacity-70"
                >
                  <div />
                </FloatingBubble>
              </motion.div>

              {/* 左上の泡 */}
              <motion.div
                className="absolute top-32 left-16 pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <FloatingBubble 
                  onTap={() => handleBubbleTap('purple')}
                  size="sm" 
                  delay={3}
                  color="purple"
                  className="opacity-70"
                >
                  <div />
                </FloatingBubble>
              </motion.div>
            </>
          )}

          {bubbleCount > 4 && (
            <>
              {/* 追加の泡 */}
              <motion.div
                className="absolute top-1/2 right-4 pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
              >
                <FloatingBubble 
                  onTap={() => handleBubbleTap('rose')}
                  size="sm" 
                  delay={4}
                  color="rose"
                  className="opacity-60"
                >
                  <div />
                </FloatingBubble>
              </motion.div>

              <motion.div
                className="absolute top-1/3 left-8 pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
              >
                <FloatingBubble 
                  onTap={() => handleBubbleTap('primary')}
                  size="sm" 
                  delay={5}
                  color="primary"
                  className="opacity-60"
                >
                  <div />
                </FloatingBubble>
              </motion.div>
            </>
          )}
        </div>
      )}

      {/* メインコンテンツ */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}