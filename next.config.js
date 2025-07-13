/** @type {import('next').NextConfig} */
/**
 * Next.jsの設定ファイル
 * 画像最適化やビルド設定などを管理
 */
const nextConfig = {
  // Next.js Imageコンポーネントで使用できる外部ドメイン
  images: {
    domains: [
      'images.unsplash.com', // Unsplashの画像用
      'via.placeholder.com', // プレースホルダー画像用
    ],
  },
}

module.exports = nextConfig