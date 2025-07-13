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
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [keepVisible, setKeepVisible] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // モバイルでは常に非表示（ハンバーガーメニューを使用）
      const isMobile = window.innerWidth < 768 // md breakpoint
      
      if (isMobile) {
        setIsHeaderVisible(false)
        setPrevScrollY(currentScrollY)
        return
      }
      
      // ヘッダーを強制表示中は隠さない
      if (keepVisible) {
        setIsHeaderVisible(true)
        setPrevScrollY(currentScrollY)
        return
      }
      
      // デスクトップでのスクロール対応ヘッダーロジック
      // 50px未満のスクロールは無視（UX向上のため）
      if (Math.abs(currentScrollY - prevScrollY) < 50) {
        return
      }

      // スクロール方向を判定
      const isScrollingDown = currentScrollY > prevScrollY
      const isScrollingUp = currentScrollY < prevScrollY

      // 下スクロールでヘッダーを隠す、上スクロールで表示
      if (isScrollingDown && currentScrollY > 50) {
        setIsHeaderVisible(false)
      } else if (isScrollingUp) {
        setIsHeaderVisible(true)
      }

      setPrevScrollY(currentScrollY)
    }
    
    const handleNavigateToSection = (event: CustomEvent) => {
      // ナビゲーションクリック時はヘッダーを表示したまま保持
      setKeepVisible(true)
      setIsHeaderVisible(true)
      
      // 1.5秒後に通常のスクロール動作に戻る
      setTimeout(() => {
        setKeepVisible(false)
      }, 1500)
    }
    
    // 初回実行とリサイズ時の処理
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    window.addEventListener('navigate-to-section', handleNavigateToSection as EventListener)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('navigate-to-section', handleNavigateToSection as EventListener)
    }
  }, [prevScrollY, keepVisible])
  
  return (
    <>
      <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 md:block hidden"
      initial={{ y: -100 }}
      animate={{ 
        y: isHeaderVisible ? 0 : -100,
        opacity: isHeaderVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeInOut"
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
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('back-to-home'))}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <div className="text-xl font-bold text-gray-800">
                  Issei Suzuki
                </div>
              </button>
              
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
                { section: "about", label: "About" },
                { section: "works", label: "Works" },
                { section: "blog", label: "Blog" }, 
                { section: "thinking", label: "Thinking" }
              ].map((item) => (
                <motion.div
                  key={item.section}
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
                  <button 
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: item.section }))
                    }}
                    className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-full hover:bg-gray-50 block"
                  >
                    {item.label}
                  </button>
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