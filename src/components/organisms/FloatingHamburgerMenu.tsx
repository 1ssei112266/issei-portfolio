'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from '../molecules/NavLink'

/**
 * フローティングハンバーガーメニューコンポーネント
 * 
 * 機能:
 * - 左上に固定表示されるシャボン玉風メニューボタン
 * - 300px以上スクロール時に表示される（メインヘッダーが隠れた時の代替ナビゲーション）
 * - クリックで展開し、4つのナビゲーション項目を表示
 * - 各メニュー項目は順次アニメーションで表示
 * - 背景に浮遊する泡エフェクト
 * - 全体的にシャボン玉テーマに合わせたデザイン
 */

interface FloatingHamburgerMenuProps {
  isVisible: boolean  // 表示・非表示を制御するフラグ
}

export const FloatingHamburgerMenu = ({ isVisible }: FloatingHamburgerMenuProps) => {
  // メニューの開閉状態を管理
  const [isOpen, setIsOpen] = useState(false)

  // ナビゲーションメニュー項目の定義
  const menuItems = [
    { section: "about", label: "About", icon: "👤" },
    { section: "works", label: "Works", icon: "💼" },
    { section: "blog", label: "Blog", icon: "📝" },
    { section: "thinking", label: "Thinking", icon: "💭" }
  ]

  // メニューの開閉を切り替える関数
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-6 left-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        >
          {/* メニューアイテム */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute top-16 left-0 space-y-3 min-w-48"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.section}
                    initial={{ scale: 0, x: -50 }}
                    animate={{ scale: 1, x: 0 }}
                    exit={{ scale: 0, x: -50 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 15
                    }}
                    className="flex justify-start"
                  >
                    <button
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: item.section }))
                        setIsOpen(false)
                      }}
                      className="flex items-center gap-3 px-4 py-3 bg-base-100/95 backdrop-blur-md rounded-full shadow-xl border border-base-200/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 w-full"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-base font-medium text-base-content/80">
                        {item.label}
                      </span>
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* メインボタン */}
          <motion.button
            onClick={toggleMenu}
            className="w-14 h-14 bg-gradient-to-r from-primary/80 to-secondary/80 backdrop-blur-md rounded-full shadow-xl border border-primary/30 flex items-center justify-center"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -2, 0],
              rotate: isOpen ? 45 : 0
            }}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 0.3 }
            }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </motion.button>

          {/* 背景の泡エフェクト */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-primary/15 rounded-full"
                style={{
                  width: `${4 + (i * 2)}px`,
                  height: `${4 + (i * 2)}px`,
                  left: `${(i * 20) % 100}%`,
                  top: `${(i * 15) % 100}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  delay: i % 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}