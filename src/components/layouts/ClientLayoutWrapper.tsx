'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { FloatingHamburgerMenu } from '@/components/organisms/FloatingHamburgerMenu'

/**
 * クライアントレイアウトラッパーコンポーネント
 * 
 * 機能:
 * - Next.js 13+ App Routerでクライアント専用機能を分離
 * - スクロール位置を監視してフローティングメニューの表示を制御
 * - メインヘッダー、フッター、フローティングハンバーガーメニューを統合管理
 * - レイアウト全体の構造を提供
 * 
 * 注意:
 * - layout.tsxはサーバーコンポーネントのため、useStateやuseEffectが使用不可
 * - このコンポーネントで'use client'を使ってクライアント機能を分離
 */

interface ClientLayoutWrapperProps {
  children: React.ReactNode  // ページコンテンツ
}

export const ClientLayoutWrapper = ({ children }: ClientLayoutWrapperProps) => {
  // スクロール位置を監視（フローティングメニューの表示制御に使用）
  const [scrollY, setScrollY] = useState(0)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(false)

  // スクロールイベントリスナーの設定
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      // ハンバーガーメニューの表示ロジック
      // - モバイルのみ：常に表示
      // - デスクトップ：表示しない（ヘッダーを使用）
      const isMobile = window.innerWidth < 768 // md breakpoint
      
      if (isMobile) {
        setIsHamburgerVisible(true)
      } else {
        setIsHamburgerVisible(false)
      }
      
      setPrevScrollY(currentScrollY)
    }
    
    // 初回実行とリサイズ時の処理
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [prevScrollY])

  return (
    <>
      {/* フルスクリーンレイアウト: ヘッダー、メイン、フッターで構成 */}
      <div className="min-h-screen flex flex-col">
        {/* サイトヘッダー（ナビゲーション含む） */}
        <Header />
        
        {/* メインコンテンツエリア（各ページの内容） */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* サイトフッター（SNSリンク、コピーライト含む） */}
        <Footer />

        {/* フローティングハンバーガーメニュー（左上） */}
        <FloatingHamburgerMenu isVisible={isHamburgerVisible} />
      </div>
    </>
  )
}