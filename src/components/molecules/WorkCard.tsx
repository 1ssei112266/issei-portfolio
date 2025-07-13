'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '../atoms/Card'
import { Link } from '../atoms/Link'

/**
 * 作品カードコンポーネントのプロパティ型定義
 * シャボン玉風アニメーションとホバーエフェクトを持つ
 */
interface WorkCardProps {
  title: string // 作品タイトル
  description: string // 作品の説明
  image: string // 作品のサムネイル画像パス
  slug: string // URL用のスラッグ（作品詳細ページへのリンク）
  technologies: string[] // 使用技術のリスト
  animationDelay?: number // アニメーションの遅延時間（秒）
}

/**
 * 作品カードコンポーネント
 * Framer Motionでシャボン玉風の浮遊アニメーションを実装
 * ホバー時のスケールアップエフェクトも含む
 * 
 * @param title - 作品タイトル
 * @param description - 作品の説明文
 * @param image - サムネイル画像のパス（現在は未使用）
 * @param slug - 作品詳細ページへのスラッグ
 * @param technologies - 使用技術の配列
 * @param animationDelay - アニメーションの遅延時間（秒）
 */
export const WorkCard = ({ 
  title, 
  description, 
  image, 
  slug, 
  technologies, 
  animationDelay = 0 
}: WorkCardProps) => {
  return (
    <motion.div
      // 初期状態：透明度を0、下に50pxオフセット
      initial={{ opacity: 0, y: 50 }}
      // アニメーション後：完全に表示、元の位置に
      animate={{ opacity: 1, y: 0 }}
      // アニメーションの設定：遅延と継続時間
      transition={{ delay: animationDelay, duration: 0.5 }}
      // ホバー時のエフェクト：少し拡大
      whileHover={{ scale: 1.05 }}
      // CSSアニメーションクラス（tailwind.config.tsで定義）
      className="animate-float"
      // アニメーションの遅延を個別に設定
      style={{ animationDelay: `${animationDelay}s` }}
    >
      {/* 作品詳細ページへのリンク */}
      <Link href={`/works/${slug}`} className="block">
        <Card hoverable className="h-full">
          {/* 作品サムネイルエリア（現在はプレースホルダー） */}
          <figure className="px-6 pt-6">
            <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
              <span className="text-4xl opacity-50">🎨</span>
            </div>
          </figure>
          
          {/* 作品情報エリア */}
          <div className="card-body">
            <h3 className="card-title text-lg">{title}</h3>
            <p className="text-sm text-base-content/70 line-clamp-3">{description}</p>
            
            {/* 使用技術タグ（最大3つまで表示） */}
            <div className="card-actions justify-start mt-4">
              {technologies.slice(0, 3).map((tech, index) => (
                <span key={index} className="badge badge-outline badge-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}