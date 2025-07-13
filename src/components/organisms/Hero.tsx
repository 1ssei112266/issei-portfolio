'use client'

import { motion } from 'framer-motion'
import { FloatingBubble } from '../molecules/FloatingBubble'
import { Button } from '../atoms/Button'
import { Link } from '../atoms/Link'
import { useTheme } from '@/contexts/ThemeContext'

/**
 * Heroセクションコンポーネント
 * ポートフォリオサイトのファーストビューとして使用
 * 
 * 特徴:
 * - 淡いグラデーション背景（泡のタップで変更可能）
 * - 中央に印象的なキャッチコピー
 * - 周囲に浮遊する泡状のボタン（タップで背景色変更）
 * - Framer Motionによるアニメーション
 * - レスポンシブ対応
 */
export const Hero = () => {
  // グローバルテーマを使用
  const { setTheme, getBackgroundClass } = useTheme()
  
  // 泡のタップ時にグローバルテーマを変更する関数
  const handleBubbleTap = (newTheme: string) => {
    setTheme(newTheme as any)
  }
  return (
    <section 
      className={`
        min-h-screen 
        relative 
        overflow-hidden
        ${getBackgroundClass()}
        flex items-center justify-center
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

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* メインキャッチコピー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="
            text-4xl md:text-6xl lg:text-7xl 
            font-bold 
            text-base-content 
            mb-6
            leading-tight
          ">
            <span className="
              bg-gradient-to-r from-primary to-secondary 
              bg-clip-text text-transparent
            ">
              Creative
            </span>
            <br />
            <span className="text-base-content/90">
              Web Developer
            </span>
          </h1>
          
          <motion.p 
            className="
              text-lg md:text-xl 
              text-base-content/70 
              mb-12 
              max-w-2xl mx-auto
              leading-relaxed
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            ユーザーの心を動かす、<br className="md:hidden" />
            美しく機能的なWebエクスペリエンスを創造します
          </motion.p>

          {/* メインCTAボタン */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button 
              variant="primary" 
              size="lg" 
              className="min-w-[160px]"
              onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'works' }))}
            >
              作品を見る
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="min-w-[160px]"
              onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: 'about' }))}
            >
              プロフィール
            </Button>
          </motion.div>
        </motion.div>

        {/* 浮遊する泡のナビゲーション（デスクトップ用） */}
        <div className="hidden lg:block">
          {/* 左上の泡 */}
          <motion.div
            className="absolute top-10 left-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('ocean')}
              size="lg" 
              delay={0}
              color="ocean"
            >
              <div />
            </FloatingBubble>
          </motion.div>

          {/* 右上の泡 */}
          <motion.div
            className="absolute top-16 right-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('sunset')}
              size="lg" 
              delay={1}
              color="sunset"
            >
              <div />
            </FloatingBubble>
          </motion.div>

          {/* 左下の泡 */}
          <motion.div
            className="absolute bottom-20 left-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('forest')}
              size="md" 
              delay={2}
              color="forest"
            >
              <div />
            </FloatingBubble>
          </motion.div>

          {/* 右下の泡 */}
          <motion.div
            className="absolute bottom-24 right-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('purple')}
              size="md" 
              delay={1.5}
              color="purple"
            >
              <div />
            </FloatingBubble>
          </motion.div>

          {/* 追加の装飾泡（より目立たない位置に） */}
          <motion.div
            className="absolute top-1/3 left-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('rose')}
              size="sm" 
              delay={3}
              color="rose"
              className="opacity-70"
            >
              <div />
            </FloatingBubble>
          </motion.div>

          <motion.div
            className="absolute top-2/3 right-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('primary')}
              size="sm" 
              delay={4}
              color="primary"
              className="opacity-60"
            >
              <div />
            </FloatingBubble>
          </motion.div>

          {/* 画面端に近い位置の泡を追加 */}
          <motion.div
            className="absolute top-1/4 right-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('forest')}
              size="sm" 
              delay={5}
              color="forest"
              className="opacity-50"
            >
              <div />
            </FloatingBubble>
          </motion.div>

          <motion.div
            className="absolute top-3/4 left-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('purple')}
              size="sm" 
              delay={6}
              color="purple"
              className="opacity-50"
            >
              <div />
            </FloatingBubble>
          </motion.div>

          {/* 真ん中エリアの泡 */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-x-24 translate-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.5, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('sunset')}
              size="sm" 
              delay={7}
              color="sunset"
              className="opacity-40"
            >
              <div />
            </FloatingBubble>
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-32 -translate-y-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('ocean')}
              size="sm" 
              delay={8}
              color="ocean"
              className="opacity-35"
            >
              <div />
            </FloatingBubble>
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-y-24 -translate-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6.5, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('rose')}
              size="sm" 
              delay={9}
              color="rose"
              className="opacity-30"
            >
              <div />
            </FloatingBubble>
          </motion.div>
        </div>

        {/* モバイル用のシンプルな泡（数を減らして控えめに） */}
        <div className="lg:hidden">
          <motion.div
            className="absolute top-16 right-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('sunset')}
              size="md" 
              delay={0}
              color="sunset"
            >
              <div />
            </FloatingBubble>
          </motion.div>

          <motion.div
            className="absolute bottom-32 left-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <FloatingBubble 
              onTap={() => handleBubbleTap('ocean')}
              size="md" 
              delay={1}
              color="ocean"
            >
              <div />
            </FloatingBubble>
          </motion.div>
        </div>
      </div>

      {/* スクロールダウンの案内 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.5, duration: 1 }}
      >
        <motion.div
          className="text-base-content/50 text-sm flex flex-col items-center gap-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll Down</span>
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}