'use client'

import { NavLink } from '../molecules/NavLink'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * メインヘッダーコンポーネント
 * 
 * 機能:
 * - スクロール連動で表示/非表示を切り替え（300px以上で非表示）
 * - ピル型（左右が半円）のデザイン
 * - テーマ色に連動した背景グラデーション
 * - ロゴ横に浮遊する泡アニメーション
 * - ナビゲーションメニューのぷにぷにホバーエフェクト
 * - レスポンシブ対応（モバイルではハンバーガーメニュー）
 */
export const Header = () => {
  // スクロール位置を監視
  const [scrollY, setScrollY] = useState(0)
  // ヘッダーの表示状態を管理
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  
  // スクロールイベントの監視
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      // 300px以上スクロールしたらヘッダーを隠す
      // これにより左上のフローティングハンバーガーメニューが表示される
      if (currentScrollY > 300) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      <motion.header 
      className="sticky top-0 z-50 transition-all duration-300 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"
      initial={{ y: -100 }}
      animate={{ 
        y: isHeaderVisible ? 0 : -100,
        opacity: isHeaderVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.4, 
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      }}
    >
      {/* 上部に隙間を作るためのコンテナ */}
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-2">
        {/* 
          ピル型（完全な楕円）のヘッダーカード
          - rounded-full: 左右が半円の完全な楕円
          - bg-white/95: 半透明の白背景
          - backdrop-blur-md: 背景ぼかし効果
        */}
        <div className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-100/30 px-8 py-4">
          <div className="flex items-center justify-between">
            
            {/* ロゴエリア（左側） */}
            <div className="flex items-center gap-3">
              <NavLink href="/" className="flex items-center">
                <div className="text-xl font-bold text-gray-800">
                  Issei Suzuki
                </div>
              </NavLink>
              
              {/* 
                ロゴ横の浮遊する泡アニメーション
                - 3秒周期で上下に浮遊
                - スケールと透明度も変化して生き生きとした動き
              */}
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full shadow-lg"
                animate={{
                  y: [-3, 3, -3],           // 上下6pxの浮遊
                  scale: [1, 1.1, 1],      // 10%の拡大縮小
                  opacity: [0.7, 1, 0.7]   // 透明度の変化
                }}
                transition={{
                  duration: 3,              // 3秒で1周期
                  repeat: Infinity,         // 無限リピート
                  ease: "easeInOut"         // 滑らかな加減速
                }}
              />
            </div>
            
            {/* デスクトップ用ナビゲーション（中央） */}
            <nav className="hidden md:flex items-center space-x-6">
              {[
                { href: "/about", label: "About" },
                { href: "/works", label: "Works" },
                { href: "/blog", label: "Blog" }, 
                { href: "/thinking", label: "Thinking" }
              ].map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ 
                    scale: 1.1,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400,
                    damping: 10
                  }}
                >
                  <NavLink 
                    href={item.href} 
                    className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-full hover:bg-gray-50 block"
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* 
              モバイル用ハンバーガーメニューボタン（右側）
              注意: このボタンは装飾のみ。実際の機能は左上のFloatingHamburgerMenuが担当
            */}
            <div className="md:hidden">
              <motion.button 
                className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none rounded-full hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ 
                  scale: 1.1,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10 
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
    </>
  )
}